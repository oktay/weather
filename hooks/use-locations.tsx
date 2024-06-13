"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { Location } from "@/types";

export const useLocations = () => {
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Location[]>([]);
  const [query] = useDebounce(value, 1000);

  useEffect(() => {
    if (value === "") {
      setLoading(false);
      setResults([]);
    } else {
      setLoading(true);
    }
  }, [value]);

  useEffect(() => {
    const getLocations = async () => {
      const resp = await fetch(`/api/locations?query=${query}`);
      if (!resp.ok) return setResults([]);
      return await resp.json();
    };

    if (!query) return setResults([]);

    getLocations()
      .then((data) => setResults(data))
      .finally(() => setLoading(false));
  }, [query]);

  return { results, loading, value, setValue };
};
