import sql from "better-sqlite3";
import { cache } from "react";
import { unstable_cache } from "next/cache";
const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

// export function getMessages() {
//   console.log("Fetching messages from db");
//   return db.prepare("SELECT * FROM messages").all();
// }

/* 요청 메모화 */
// export const getMessages = cache(
//   function getMessages() {
//     console.log("Fetching messages from db");
//     return db.prepare("SELECT * FROM messages").all();
//   },
//   ["messages"]
// );

/* 데이터 캐싱 */
export const getMessages = unstable_cache(
  async function getMessages() {
    console.log("Fetching messages from db");
    return new Promise((resolve) =>
      setTimeout(() => resolve(db.prepare("SELECT * FROM messages").all()), 100)
    );
  },
  ["messages"],
  {
    tags: ["msg"],
    revalidate: 30, // 30초에 한 번 캐시 무효화 설정
  }
);
