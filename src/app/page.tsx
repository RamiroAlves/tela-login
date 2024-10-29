"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"


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

  const onSubmit= () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login successfull",
        description: "Logged in user"
      })
    }, 2000)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          action={onSubmit}
          autoComplete="off"
          className="backdrop-blur-sm border-2 rounded-md py-5 px-7"
        >
          <h1 className="text-4xl text-white">Sign In</h1>
          <p className="mb-5 text-white">Keep it all together and you'll be fine</p>
          <div className="mb-2">
            <Input
              className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full p-2.5 bg-transparent dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={({ target }) => handlePayload('email', target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              className="bg-gray-50 border border-gray-300 text-sm text-white rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full p-2.5 bg-transparent dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={({ target }) => handlePayload('password', target.value)}
            />
          </div>
          <Button
           className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-200 font-medium rounded-lg text-sm w-full px-5 py-2.5 mb-4 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700"
           disabled={loading}
          >Sign In</Button>
        </form>
      </main>
    </div>
  );
}
