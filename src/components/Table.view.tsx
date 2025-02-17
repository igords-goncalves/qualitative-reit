import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { Input } from "./ui/input";
import { Reit } from "./models/Reit";

type TableViewProps = {
  reits: Reit[];
};

const TableView = ({ reits }: TableViewProps) => {
  if (!reits || !Array.isArray(reits)) {
    return <div>Nenhum dado disponível.</div>;
  }

  return (
    <>
      <Input
        placeholder="Empresa / Ticker / Setor ..."
        className="w-1/2 bg-white"
      />

      <div className="bg-white rounded-md border mt-6 shadow-sm">
        <Table>
          <TableCaption className="py-3">
            Lista de fundos cadastrados na B3.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead colSpan={2} className="font-bold">
                Empresa
              </TableHead>
              <TableHead className="font-bold">Ticker</TableHead>
              <TableHead className="text-center font-bold">Setor</TableHead>
              <TableHead className="font-bold text-center">P/VP</TableHead>
              <TableHead className="font-bold text-center">DY</TableHead>
              <TableHead className="font- text-center font-bold">
                Liquidez Diária
              </TableHead>
              <TableHead className="text-right font-bold">Seguimento</TableHead>
            </TableRow>
          </TableHeader>
          {reits.map((reit: Reit) => (
            <TableBody key={reit.companyid}>
              <TableRow>
                <TableCell colSpan={2} className="text-gray-600 text-xs">
                  {reit.companyname.toUpperCase()}
                </TableCell>
                <TableCell className="font-semibold text-gray-900">
                  {reit.ticker}
                </TableCell>
                <TableCell className="text-center">
                  <span
                    className={`${
                      reit.sectorname === "Fundo de Tijolo"
                        ? "bg-green-300 text-green-600"
                        : reit.sectorname === "Fundo de Papel"
                        ? "bg-blue-300 text-blue-600"
                        : "bg-amber-300 text-amber-600"
                    } p-1 rounded-lg font-bold text-[11px]`}
                  >
                    {reit.sectorname}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600 text-xs text-center">
                  {reit.p_vp ?? 0.0}
                </TableCell>
                <TableCell className="text-gray-600 text-xs text-center">
                  {reit.dy}
                </TableCell>
                <TableCell className="text-gray-600 text-center text-xs">
                  R$ {reit.liquidezmediadiaria ?? 0}
                </TableCell>
                <TableCell className="text-right text-gray-600 text-xs">
                  {reit.segment}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default TableView;
