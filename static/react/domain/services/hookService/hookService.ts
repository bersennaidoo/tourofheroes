import axios, { Method } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient, QueryClient } from "react-query";
import { Hero } from "../../models/Hero/Hero";

//export type CrudType = "GET" | "POST" | "PUT" | "DELETE";
export type CrudOptions = { item?: Hero | object; config?: object };

export class HookService {
  public client = (route: string, method: Method, item?: Hero | object) => {
    return axios({
      method: method,
      baseURL: `${route}`,
      data: method === "POST" || method === "PUT" ? item : undefined,
    })
      .then((res) => res.data)
      .catch((err) => {
        throw Error(`There was a problem fetching data: ${err}`);
      });
  };

  public clientPut = async (route: string, item?: Hero | object) => {
    const reqOpts = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };
    const res = await fetch(route, reqOpts);
    const data = await res.json();

    return data;
  };
  public createItem = (route: string, item: Hero | object) =>
    this.client(route, "POST", item);

  public editItem = (route: string, item: Hero | object) =>
    this.clientPut(route, item);

  public deleteItem = (route: string) => this.client(route, "DELETE");

  public getItem = (route: string) => this.client(route, "GET");

  public usePostHero = (route: string) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation((item: Hero) => this.createItem(route, item), {
      onSuccess: (newData: Hero) => {
        queryClient.invalidateQueries({ queryKey: ["heroes"]})
        queryClient.setQueryData(["heroes"], (oldData: Hero[] | undefined) => [
          ...(oldData || []),
          newData,
        ]);
        return navigate("/tourofheroes/heroes");
      },
    });
  };

  public useGetHeroes = (url: string) => {
    const { data, status, error, refetch } = useQuery(
      "heroes",
      () => this.getItem(url),
      {
        refetchOnWindowFocus: true,
      }
    );

    return {
      heroes: data,
      status: status,
      getError: error,
      refetch: refetch,
    };
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

  public usePutHero = (route: string) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    const mutation = useMutation((item: Hero) => this.editItem(route, item), {
      onSuccess: (updatedHero: Hero) => {
        console.log(updatedHero);
        queryClient.invalidateQueries({ queryKey: ["heroes"]})
        this.updateHeroesCache(updatedHero, queryClient)
        navigate("tourofheroes/heroes");
      },
    });

    return {
      mutate: mutation.mutate,
      isLoading: mutation.isLoading,
      isError: mutation.isError,
      updateError: mutation.error,
    };
  };

  public useDeleteHero = (route: string) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const mutation = useMutation(
      (item: Hero) => this.deleteItem(route), {
        onSuccess: (_, deletedHero: Hero) => {
          const heroes: Hero[] | undefined = queryClient.getQueryData(["heroes"] || [])

          queryClient.setQueryData(
            ["heroes"],
            heroes?.filter((h) => h.id !== deletedHero.id)
          )

          navigate("/tourofheroes/heroes")
        }
      }
    )

    return {
      deleteHero: mutation.mutate,
      isDeleting: mutation.isLoading,
      isDeleteError: mutation.isError,
      deleteError: mutation.error
    }
  }

  public useEntityParams = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const description = searchParams.get("description");

    return { name, description };
  };

  public updateHeroesCache = (updatedHero: Hero, queryClient: QueryClient) => {
1
    let heroesCache: Hero[] = queryClient.getQueryData("heroes") || []

    const heroIndex = heroesCache.findIndex((h) => h.id === updatedHero.id)

    if (heroIndex !== -1) {

      heroesCache = heroesCache.map((preEditedHero) => preEditedHero.id === updatedHero.id ? updatedHero : preEditedHero)

      return queryClient.setQueryData(["heroes"], heroesCache)
    } else {
      return null
    }
  }
}
