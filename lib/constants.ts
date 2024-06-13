export const API_KEY = process.env.API_KEY;

export const API_URL = "https://api.openweathermap.org/data/2.5";

export const DEFAULT_LOCATION: Record<string, any> = {
  city: "Istanbul",
  coords: {
    lat: 41.044,
    lon: 29.002,
  },
};

export const LOCATION_SUGGESTIONS = [
  {
    id: 0,
    city: "Istanbul",
    country: "TR",
    coords: {
      lat: 41.044,
      lon: 29.002,
    },
  },
  {
    id: 1,
    city: "Berlin",
    country: "DE",
    coords: {
      lat: 52.520008,
      lon: 13.404954,
    },
  },
  {
    id: 2,
    city: "New York",
    country: "US",
    coords: {
      lat: 40.769361,
      lon: -73.977655,
    },
  },
];
