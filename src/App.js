import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";


export default function App() {
  return (
    <div className="w-full h-screen flex-col background relative items-center overflow-x-hidden ">
        <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl font-bold mx-auto px-10 py-2">RANDOM GIFS</h1>
        <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}
