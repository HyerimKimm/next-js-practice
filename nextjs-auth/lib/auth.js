import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";
import { cookies } from "next/headers";

// 1번째 인자 : 데이터베이스 연결 객체
// 2번째 인자 : 유저 정보를 저장할 테이블 이름
// 3번째 인자 : 세션을 저장할 테이블 이름
const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});

// 첫번째 인자 :  adapter, 세션을 어디에 어떻게 저장할지 Lucia에게 알려줌
// 두번째 인자 :
const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false, // next.js에서 lucia를 사용할 때는 false로 설정해야 함
    attributes: {
      secure: process.env.NODE_ENV === "production", // 프로덕션 환경에서는 https에서만 작동하도록 설정
    },
  },
});

/**
 * 세션 DB 테이블에 새 세션을 생성하고 저장한 다음
 * 발신 요청에 첨부된 쿠키를 설정해야 한다.
 * @param {string} userId : 세션을 소유한 사용자의 ID
 */
export async function createAuthSession(userId) {
  /* Lucia 객체를 사용해 새로운 세션을 생성한다. 
    내부적으로 세션의 DB 테이블에 새 항목을 생성하고
    해당 세션에 따른 새로운 고유 세션 ID를 생성한다. */
  const session = await lucia.createSession(userId, {});

  // Lucia에 의해 생성되는 세션 쿠키 얻음
  const sessionCookie = lucia.createSessionCookie(session.id);

  // 쿠키를 발신 요청에 첨부한다.
  // next.js에서는 cookie() 함수를 이용해서 쿠키를 설정할 수 있다.
  // cookie() 함수는 발신 응답에 포함된 쿠키에 접근할 수 있게 해준다.
  // Lucia는 자동으로 이를 DB에 저장하고, 쿠키를 통해 얻은 session Id를 발신 응답에 추가
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}
