import { logout } from "@/action/auth-actions";
import "../globals.css";

export default function AuthLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back</p>
        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
