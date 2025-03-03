"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icons from "@/custom/icons";

const ThemeSwitcher = (): React.ReactElement => {
  const t = useTranslations("features.globals.theme-switcher");
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<TTheme>("system");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as typeof currentTheme;
    setCurrentTheme(savedTheme);
  }, []);

  React.useEffect(() => {
    if (currentTheme !== "auto") return;

    const updateAutoTheme = (): void => {
      const date = new Date();
      const isDay = date.getHours() >= 6 && date.getHours() < 18;
      setTheme(isDay ? "light" : "dark");
    };

    updateAutoTheme();

    const now = new Date();
    const secondsUntilNextMinute = 60 - now.getSeconds();

    const initialTimeout = setTimeout(() => {
      updateAutoTheme();

      const interval = setInterval(updateAutoTheme, 60000);

      return () => clearInterval(interval);
    }, secondsUntilNextMinute * 1000);

    return () => clearTimeout(initialTimeout);
  }, [currentTheme, setTheme]);

  const handleThemeChange = (theme: TTheme): void => {
    if (theme !== "auto") setTheme(theme);

    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const themes = [
    {
      value: "light",
      label: t("light"),
      icon: <Icons.Light className="h-4 w-4 mr-2" />,
    },
    {
      value: "dark",
      label: t("dark"),
      icon: <Icons.Dark className="h-4 w-4 mr-2" />,
    },
    {
      value: "auto",
      label: t("auto"),
      icon: <Icons.Auto className="h-4 w-4 mr-2" />,
    },
    {
      value: "system",
      label: t("system"),
      icon: <Icons.System className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <Select value={currentTheme} onValueChange={handleThemeChange}>
      <SelectTrigger className="w-max">
        <SelectValue>
          {themes.find(t => t.value === currentTheme)?.icon}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {themes.map(theme => (
          <SelectItem key={theme.value} value={theme.value}>
            <div className="flex items-center gap-2">
              {theme.icon}
              {theme.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
