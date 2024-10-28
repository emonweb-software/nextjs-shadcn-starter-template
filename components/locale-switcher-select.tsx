"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { locales, Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

export function LocaleSwitcherSelect() {
  const t = useTranslations("LoginPage");
  const locale = useLocale();

  const handleChange = (value: string) => {
    setUserLocale(value as Locale);
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("language")}</SelectLabel>
          {locales.map(item => (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
