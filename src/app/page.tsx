"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import InputDefault from "@/components/inputDefault";
import ButtonDefault from "@/components/buttonDefault";

interface IPayload {
  email: string;
  password: string;
}

export default function Login() {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<IPayload>({
    email: "",
    password: "",
  });

  const handlePayload = (key: string, value: string) => {
    setPayload({ ...payload, [key]: value });
  };

  const onSubmit = () => {
    setLoading(true);
    // Simulando tempo de requisição
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login successfull",
        description: "Logged in user",
      });
    }, 2000);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          action={onSubmit}
          autoComplete="off"
          className="backdrop-blur-sm border-2 rounded-md py-5 px-7"
        >
          <h1 className="text-4xl text-white">Sign In</h1>
          <p className="mb-5 text-white">
            Keep it all together and you'll be fine
          </p>
          <div className="mb-2">
            <InputDefault
              type="email"
              id="email"
              placeholder="Email"
              required
              handleChange={handlePayload}
            />
          </div>
          <div className="mb-4">
            <InputDefault
              type="password"
              id="password"
              placeholder="Password"
              required
              handleChange={handlePayload}
            />
          </div>
          <ButtonDefault children="Sign In" type="submit" disabled={loading} />
        </form>
      </main>
    </div>
  );
}
