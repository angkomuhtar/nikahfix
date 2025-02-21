"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const NamaTamu = () => {
  const to = useSearchParams().get("to");
  return (
    <Suspense>
      <h1 className='text-white font-mono'>{to ?? "Nama Tamu"}</h1>
    </Suspense>
  );
};

export default NamaTamu;
