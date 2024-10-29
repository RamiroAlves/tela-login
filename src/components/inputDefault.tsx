import React from "react";
import { Input } from "./ui/input";

interface IProps {
    type: string;
    id: string;
    placeholder: string;
    required: boolean;
    handleChange: (key: string, value: string) => void;
}

const InputDefault:React.FC<IProps> = ({ type, id, placeholder, required, handleChange }) => {
  return (
    <div className="p-1 text-left">
      <Input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full p-2.5 bg-transparent dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        onChange={({ target }) => handleChange(id, target.value)}
      />
    </div>
  );
}

export default InputDefault;