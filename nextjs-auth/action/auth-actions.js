"use server";

import { redirect } from "next/navigation";
import { hashUserPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { createAuthSession } from "@/lib/auth";
import { verifyUserPassword } from "@/lib/hash";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 8) {
    console.log(password.trim().length);
    errors.password = "Password must be at least 8 characters long";
  }

  if (Object.keys(errors).length > 0) {
    return { errors: errors };
  }
  const hashedPassword = hashUserPassword(password);

  try {
    const userId = await createUser(email, hashedPassword);

    await createAuthSession(userId);

    redirect("/training");
  } catch (e) {
    if (e.code === "SQLITE_CONSTRAINT_UNIQUE") {
      errors.email = "Email already exists";

      return { errors: errors };
    }
    throw e;
  }
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    errors.email = "User not found";
    return { errors: errors };
  }

  const isValidPassword = verifyUserPassword(existingUser.password, password);

  if (!isValidPassword) {
    errors.password = "Invalid password";
    return { errors: errors };
  }

  await createAuthSession(existingUser.id);

  redirect("/training");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  } else {
    return signup(prevState, formData);
  }
}
