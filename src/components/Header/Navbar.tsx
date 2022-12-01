import React, { useEffect } from "react";
import ConnectWallet from "./ConnectWallet";
import { CiLight } from "react-icons/ci";
import { SiMarketo } from "react-icons/si";
import { useTheme } from "../../context";
import { AiOutlineSetting } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-between items-center py-4 max-w-[1024px] mx-auto">
      <div>
        <div className="text-3xl border-r-8 border-black pr-4 ">GENESY</div>
      </div>
      <div className="flex  gap-4">
        <button className="rounded-full text-3xl h-12 w-12 hover:bg-gray-200 flex justify-center items-center">
          <SiMarketo />
        </button>
        <button
          className="rounded-full text-3xl h-12 w-12 hover:bg-gray-200 flex justify-center items-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <AiOutlineSetting /> : <FaMoon />}
        </button>
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Navbar;