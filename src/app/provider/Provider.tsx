import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PropsWithChildren } from "react";

type ProviderProps = PropsWithChildren;

const Provider = ({ children }: ProviderProps) => {
  return (
    <TooltipProvider>
      <SidebarProvider>{children}</SidebarProvider>;
    </TooltipProvider>
  );
};

export default Provider;
