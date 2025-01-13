import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

type ProviderProps = PropsWithChildren;

const Provider = ({ children }: ProviderProps) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default Provider;
