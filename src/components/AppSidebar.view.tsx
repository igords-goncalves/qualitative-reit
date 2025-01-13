import { PropsWithChildren } from "react";
import { Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar";

type AppSidebarViewProps = PropsWithChildren;

const AppSidebarView = ({}: AppSidebarViewProps) => {
  return (
    <Sidebar>
      <SidebarHeader about="Strings"/>
      <SidebarContent />
    </Sidebar>
  );
};
export default AppSidebarView;
