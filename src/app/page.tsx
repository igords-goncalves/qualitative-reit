import LayoutDefault from "@/components/layout/LayoutDefault";
import TableView from "@/components/Table.view";

export default async function Home() {
  // Gettting data on server side
  const urlFinal = "http://localhost:3000/api/proxy";
  const data = await fetch(urlFinal);
  const reits = await data.json();

  return (
    <div className="w-full">
      <LayoutDefault title="Triagem de FIIs">
        <TableView reits={reits.list} />
      </LayoutDefault>
    </div>
  );
}
