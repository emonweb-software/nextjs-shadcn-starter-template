import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/services/locale";
export default getRequestConfig(async () => {
  console.log("tttt2223");
  const locale = await getUserLocale();
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
