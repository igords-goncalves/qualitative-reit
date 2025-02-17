import { PropsWithChildren } from "react";
import { SidebarTrigger } from "../ui/sidebar";
import AppSidebarView from "../AppSidebar.view";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type SideBarProps = PropsWithChildren;

const SideBar = ({ children }: SideBarProps) => {
  return (
    <>
      <AppSidebarView />
      <main className={"pt-3 flex justify-center border-none"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger />
          </TooltipTrigger>
          <TooltipContent>
            <p>Abrir/Fechar menu lateral</p>
          </TooltipContent>
        </Tooltip>
        {children}
      </main>
    </>
  );
};

export default SideBar;
