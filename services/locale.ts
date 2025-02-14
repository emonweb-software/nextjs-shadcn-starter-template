"use server";

import { cookies } from "next/headers";

import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale(): Promise<string> {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale): Promise<void> {
  (await cookies()).set(COOKIE_NAME, locale);
}
