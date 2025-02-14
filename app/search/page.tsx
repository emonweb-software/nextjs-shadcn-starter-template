"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function Search(): React.ReactElement {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");

  return (
    <div className="text-center mt-[200px] ">
      <h1 className="font-bold text-[30px] mb-[20px]">page result</h1>
      <p>param:{param}</p>
    </div>
  );
}
