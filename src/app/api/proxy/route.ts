function createQueryString(req: Request) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const take = searchParams.get("take");
  const CategoryType = searchParams.get("CategoryType");

  if (!search || !page || !take || !CategoryType)
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
    });
    
  const queryString = new URLSearchParams({
    search,
    page,
    take,
    CategoryType,
  }).toString();

  return queryString;
}

export async function GET(req: Request) {
  const queryString = createQueryString(req);
  try {
    const response = await fetch(
      `https://statusinvest.com.br/category/advancedsearchresultpaginated?${queryString}`
    );

    if (!response.ok) {
      throw new Error("Request error on proxy API.");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return new Response(JSON.stringify({ error: "Error fetching data." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

