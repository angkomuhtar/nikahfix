"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const NamaTamu = () => {
  const to = useSearchParams().get("to");
  return <h1 className='text-white font-mono'>{to ?? "Nama Tamu"}</h1>;
};

export default NamaTamu;
