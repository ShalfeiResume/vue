import axios from "@/api/axios";
import * as qs from "query-string";

interface IHTTPGet<T> {
  path: string;
  data?: T;
}

interface IHTTPPost<T> {
  path: string;
  data?: T;
}

interface IHTTPPut<T> {
  path: string;
  data?: T;
}

interface IHTTPDelete {
  path?: string;
}

export class HTTPCLient {
  static get = <T>({ path, data }: IHTTPGet<T>) => {
    const url = data ? `?${qs.stringify(data)}` : "";
    return axios.get(`${path}${url}`).then((data) => {
      if (200 <= data.status && data.status >= 300) {
        return data;
      } else {
        throw new Error();
      }
    });
  };

  static post = <T>({ path, data }: IHTTPPost<T>) => {
    const url = data ? `?${qs.stringify(data)}` : "";
    return axios
      .post(`${path}${url}`, null, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((data) => {
        if (200 <= data.status && data.status >= 300) {
          return data;
        } else {
          throw new Error();
        }
      });
  };

  static put = <T>({ path, data }: IHTTPPut<T>) => {
    const url = data ? `?${qs.stringify(data)}` : "";
    return axios
      .put(`${path}${url}`, null, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((data) => {
        if (200 <= data.status && data.status >= 300) {
          return data;
        } else {
          throw new Error();
        }
      });
  };

  static delete = ({ path }: IHTTPDelete) => {
    return axios.delete(`${path}`).then((data) => {
      if (200 <= data.status && data.status >= 300) {
        return data;
      } else {
        throw new Error();
      }
    });
  };
}
