"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

// This component handles global errors for the entire app
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations("InternalErrorPage");
  console.error(error)
  return (
    <div className="h-screen w-full flex items-center justify-center background">
      <div className="text-center min-w-96 max-w-md p-6 background border shadow-lg rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold">500</h1>
        <h2 className="text-xl md:text-2xl font-semibold mt-4">{t("title")}</h2>
        <p className="text-sm md:text-base mt-4">{t("description")}.</p>
        <div className="mt-4">
          <Link href="/">
            <Button size="sm" onClick={() => reset()}>{t("retry")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
