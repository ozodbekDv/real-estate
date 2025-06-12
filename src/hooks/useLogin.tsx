import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as actionLogin } from "@/app/features/userSlice";

export function useLogin() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const dispatch = useDispatch();

  const login = async (
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      if (typeof email !== "string" || typeof password !== "string") {
        throw new Error("Email yoki parol noto‘g‘ri formatda");
      }

      const userData = { name: "", email, password };
      console.log(JSON.stringify(userData));

      await dispatch(actionLogin(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData); // bu faqat UI uchun, asosan
    } catch (err: any) {
      setError(err);
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, user };
}
