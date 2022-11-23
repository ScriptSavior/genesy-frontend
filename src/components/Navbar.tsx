import React, { useEffect } from "react";
import ConnectWallet from "../components/ConnectWallet";
import { CiLight } from "react-icons/ci";
import { SiMarketo } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-24">
      <div>
        <div className="text-3xl border-r-8 border-black pr-4 ">GENESY</div>
      </div>
      <div className="flex  gap-4">
        <button className="rounded-full text-3xl h-12 w-12 hover:bg-gray-200 flex justify-center items-center">
          <SiMarketo />
        </button>
        <button className="rounded-full text-3xl h-12 w-12 hover:bg-gray-200 flex justify-center items-center">
          <CiLight />
        </button>
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Navbar;
