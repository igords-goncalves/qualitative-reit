"use client"

import { Input } from "./ui/input";
import { Reit } from "./models/Reit";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type TableViewProps = {
  reits: Reit[];
};

const columnHelper = createColumnHelper<Reit>();

const columns = [
  columnHelper.accessor("ticker", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Ticker</span>,
  }),
];

const TableTSView = ({ reits }: TableViewProps) => {
  const [data] = useState(() => [...reits]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!reits || !Array.isArray(reits)) {
    return <div>Nenhum dado disponível.</div>;
  }

  return (
    <>
      <Input
        placeholder="Empresa / Ticker / Setor ..."
        className="w-1/2 bg-white"
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
      <div className="bg-white rounded-md border mt-6 shadow-sm"></div>
    </>
  );
};

export default TableTSView;
