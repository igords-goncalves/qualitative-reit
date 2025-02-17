"use client";

import { Input } from "./ui/input";
import { Reit } from "./models/Reit";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type TableViewProps = {
  reits: Reit[];
};

const columnHelper = createColumnHelper<Reit>();

//TODO: Export it to a constant file
const columns = [
  columnHelper.accessor("companyname", {
    cell: (info) => info.getValue(),
    header: () => <span>Empresa</span>,
  }),
  columnHelper.accessor("ticker", {
    cell: (info) => info.getValue(),
    header: () => <span>Ticker</span>,
  }),
  columnHelper.accessor("sectorname", {
    cell: (info) => info.getValue(),
    header: () => <span>Setor</span>,
  }),
  columnHelper.accessor("p_vp", {
    cell: (info) => info.getValue(),
    header: () => <span>P/VP</span>,
  }),
  columnHelper.accessor("dy", {
    cell: (info) => info.getValue(),
    header: () => <span>DY</span>,
  }),
  columnHelper.accessor("liquidezmediadiaria", {
    cell: (info) => info.getValue(),
    header: () => <span>Liquidez Diária</span>,
  }),
  columnHelper.accessor("segment", {
    cell: (info) => info.getValue(),
    header: () => <span>Seguimento</span>,
  }),
];

const TableTSView = ({ reits }: TableViewProps) => {
  const [data] = useState(() => [...reits]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Acces to headers
  console.log(table.getHeaderGroups()[0].headers.map((id) => id.id));

  if (!reits || !Array.isArray(reits)) {
    return <div>Nenhum dado disponível.</div>;
  }

  return (
    <>
      <Input
        placeholder="Empresa / Ticker / Setor ..."
        className="w-1/2 bg-white"
      />
      <Table>
        <TableCaption>Lista de fundos cadastrados na B3.</TableCaption>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead className="font-bold text-lg" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  className="text-gray-600 text-md"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-white rounded-md border mt-6 shadow-sm"></div>
    </>
  );
};

export default TableTSView;
