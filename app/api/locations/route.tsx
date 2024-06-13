import { getLocations } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) return Response.error();

  const locations = await getLocations({ query });

  return Response.json(
    locations.map(
      (
        location: { name: string; country: string; lat: number; lon: number },
        index: number,
      ) => ({
        id: index,
        city: location.name,
        country: location.country,
        coords: {
          lat: location.lat,
          lon: location.lon,
        },
      }),
    ),
  );
}
