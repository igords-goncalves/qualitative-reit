import { PropsWithChildren } from "react";
import { SidebarTrigger } from "../ui/sidebar";
import AppSidebarView from "../AppSidebar.view";

type SideBarProps = PropsWithChildren;

const SideBar = ({ children }: SideBarProps) => {
  return (
    <>
      <AppSidebarView />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </>
  );
};

export default SideBar;
