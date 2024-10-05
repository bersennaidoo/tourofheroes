import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Hero } from "../../models/Hero/Hero";

export class HookService {
  private getItem = (route: string) => {
    return axios({
      method: "GET",
      baseURL: `${route}`,
    })
      .then((res) => res.data)
      .catch((err) => {
        throw Error(`There was a problem fetching data: ${err}`);
      });
  };

  public useAxios = (url: string) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("idle");

    const getItemCb = useCallback((route: string) => {
      return this.getItem(route);
    }, []);

    useEffect((): any => {
      let doUpdate = true;

      setData(undefined);
      setError(null);
      setStatus("loading");

      getItemCb(url)
        .then((data) => {
          if (doUpdate) {
            setData(data);
            setStatus("success");
          }
        })
        .catch((error) => {
          if (doUpdate) {
            setError(error);
            setStatus("error");
          }
        });
      return () => (doUpdate = false);
    }, [url]);

    return { data, status, error };
  };

  public useEntityParams = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const description = searchParams.get("description");

    return { name, description };
  };
}
