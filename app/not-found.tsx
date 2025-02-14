"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/atom-ui/button";

export default function NotFound(): Readonly<React.ReactElement> {
  const t = useTranslations("app.not-found");

  return (
    <div className="h-screen w-full flex items-center justify-center background">
      <div className="text-center min-w-96 max-w-md p-6 background border shadow-lg rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold mt-4">{t("title")}</h2>
        <p className="text-sm md:text-base mt-4">{t("description")}.</p>
        <div className="mt-4">
          <Link href="/">
            <Button size="sm">{t("backToHome")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
