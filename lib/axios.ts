import { getTranslations } from "next-intl/server";
import type { Method } from "axios";
import axios, { AxiosError } from "axios";

interface IParams {
  offset?: number;
  limit?: number;
  sort?: string;
  order?: string;
  [key: string]: unknown;
}

interface ICallAPI {
  url: string;
  method?: Extract<
    Method,
    "get" | "head" | "post" | "put" | "patch" | "delete"
  >;
  body?: unknown;
  isFormData?: boolean;
  params?: IParams;
  timeout?: number;
}

export default async function callAPI({
  method = "get",
  url,
  body,
  isFormData,
  params,
  timeout = 3000,
}: ICallAPI): Promise<IDataResponse<unknown> | undefined> {
  const t = await getTranslations("lib.axios");

  try {
    const response: IAxiosResponse<unknown> = await axios({
      method,
      url: process.env.NEXT_PUBLIC_API_URL + url,
      data: body,
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      },
      params,
      timeout,
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const response: IAxiosResponse<null> = error.response;
        return response.data;
      } else {
        if (process.env.NODE_ENV === "development")
          console.error(t("axios"), error.message);

        return {
          data: null,
          errors: [t("unknown")],
        };
      }
    }
  }
}
