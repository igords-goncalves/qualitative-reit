import LayoutDefault from "@/components/layout/LayoutDefault";
import TableTSView from "@/components/TableTS.view copy";

export default async function Home() {
  // Gettting data on server side
  const urlFinal = "http://localhost:3000/api/proxy/?search=%7B%7D&page=20&take=20&CategoryType=2";
  const data = await fetch(urlFinal);
  const reits = await data.json();

  return (
    <div className="w-full bg-[#f1f1f1]">
      <LayoutDefault title="Triagem de Fundos Imobiliários">
        {/* <TableView reits={reits.list} /> */}
        <TableTSView reits={reits.list} />
      </LayoutDefault>
    </div>
  );
}
  