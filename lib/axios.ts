import APP from "@/app/constants/app";
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
  method?: 'get' | 'post' | 'put' | 'delete';
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
  try {
    const response: IAxiosResponse<unknown> = await axios({
      method,
      url: APP.BACKEND + url,
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
        console.error("Error calling API:", error.message);
        return {
          data: null,
          errors: ["Lỗi không xác định. Liên hệ admin để được hỗ trợ!"],
        };
      }
    }
  }
};