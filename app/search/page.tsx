"use client";
import { useSearchParams } from "next/navigation";
import * as React from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");
  return (
    <div className="text-center mt-[200px] ">
      <h1 className="font-bold text-[30px] mb-[20px]">page result</h1>
      <p>param:{param}</p>
    </div>
  );
}
