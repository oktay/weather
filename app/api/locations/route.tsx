import { getLocations } from "@/lib/api";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("query");
  if (!query) return Response.error();
  return Response.json(await getLocations({ query }));
}
