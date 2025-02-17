import { Reit } from "@/components/models/Reit";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Reit>();

const COLUMNS = [
  columnHelper.accessor("companyname", {
    cell: (info) => info.getValue(),
    header: () => "Empresa",
  }),
  columnHelper.accessor("ticker", {
    cell: (info) => info.getValue(),
    header: () => "Ticker",
  }),
  columnHelper.accessor("sectorname", {
    cell: (info) => info.getValue(),
    header: () => "Setor",
  }),
  columnHelper.accessor("p_vp", {
    cell: (info) => info.getValue(),
    header: () => "P/VP",
  }),
  columnHelper.accessor("dy", {
    cell: (info) => info.getValue(),
    header: () => "DY",
  }),
  columnHelper.accessor("liquidezmediadiaria", {
    cell: (info) => info.getValue(),
    header: () => "Liquidez Diária",
  }),
  columnHelper.accessor("segment", {
    cell: (info) => info.getValue(),
    header: () => "Seguimento",
  }),
]

export default COLUMNS;