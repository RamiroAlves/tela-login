import React from "react";
import { Button } from "./ui/button";

interface IProps {
  children: string;
  type: "submit" | "button" | "reset";
  disabled: boolean;
}

const ButtonDefault: React.FC<IProps> = ({ children, type, disabled }: IProps) => {
  return (
    <Button
      className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-200 font-medium rounded-lg text-sm w-full px-5 py-2.5 mb-4 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700"
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonDefault;
