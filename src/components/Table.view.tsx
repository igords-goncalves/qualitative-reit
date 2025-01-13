import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type TableViewProps = {
  reits: any
}

const TableView = ({reits}: TableViewProps) => {
  return (

    // Input search
    // Line view 10 / 25 / 50
    // Pagination

    <Table>
        <TableCaption>A list of reits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Empresa</TableHead>
            <TableHead>Ticker</TableHead>
            <TableHead>P/VP</TableHead>
            <TableHead className="text-right">Seguimento</TableHead>
          </TableRow>
        </TableHeader>
        {reits.map((fii: any) => {
          return (
            <TableBody key={fii.companyid}>
              <TableRow>
                <TableCell className="font-medium">{fii.companyname}</TableCell>
                <TableCell>{fii.ticker}</TableCell>
                <TableCell>{fii.p_vp}</TableCell>
                <TableCell className="text-right">{fii.segment}</TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
  )
};

export default TableView;