interface IDataResponse<T> {
  message?: string;
  data: T | null;
  errors?: string[];
}

interface IAxiosResponse<T> {
  status: number;
  data: IDataResponse<T>;
}
