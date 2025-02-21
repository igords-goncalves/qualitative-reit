"use client";

import { Input } from "./ui/input";
import { Reit } from "./models/Reit";
import { useState } from "react";
import COLUMNS from "./ui/columns";
import {
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type TableViewProps = {
  reits: Reit[];
};

const TableTSView = ({ reits }: TableViewProps) => {
  const [data] = useState(() => [...reits]);

  const table = useReactTable({
    data,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });

  // Acces to headers
  // console.log(table.getHeaderGroups()[0].headers.map((id) => id.id));

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
                  <TableCell className="text-gray-600 text-md" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default TableTSView;
