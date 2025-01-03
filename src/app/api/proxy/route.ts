export async function GET() {
  try {
      const response = await fetch('https://statusinvest.com.br/category/advancedsearchresultpaginated?search=%7B%7D&page=37&take=10&CategoryType=2');
      const data = await response.json();
      return new Response(JSON.stringify(data), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
      });
  } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return new Response(JSON.stringify({ error: 'Erro ao buscar dados.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
      });
  }
}

