import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as actionLogin } from "@/app/features/userSlice";
import type { AppDispatch } from "@/app/store";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function useRegister() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const register = async (
    email: string | null,
    password: string | null,
    firstName: string | null,
    lastName: string | null
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const userData: User = {
        firstName: String(firstName || ""),
        lastName: String(lastName || ""),
        email: String(email || ""),
        password: String(password || ""),
      };

      if (!userData.email || !userData.password) {
        throw new Error("Email va parol to‘ldirilishi shart");
      }

      console.log(JSON.stringify(userData));

      await dispatch(actionLogin(userData));

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
        console.error("Login error:", err.message);
      } else {
        setError(new Error("Noma’lum xatolik"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error, user };
}
