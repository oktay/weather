import { Coord } from "@/types";

import { API_KEY, API_URL } from "./constants";

const API_ENDPOINTS = {
  forecast: ({ lat, lon }: Coord) =>
    `${API_URL}/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  location: ({ query }: Record<string, string>) =>
    `${API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
};

export default API_ENDPOINTS;
