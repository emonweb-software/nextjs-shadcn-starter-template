"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

const LocaleSwitcher = (): React.ReactElement => {
  const t = useTranslations("features.site.locale-switcher");
  const locale = useLocale();

  const handleChange = (value: string): void => {
    void setUserLocale(value as Locale);
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map(item => (
          <SelectItem key={item} value={item}>
            {t(item)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
