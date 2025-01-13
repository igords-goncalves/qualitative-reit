import { PropsWithChildren } from "react";
import SideBar from "../template/SideBar";
import Content from "../template/Content";
import Header from "../template/Header";

type LayoutDefaultProps = PropsWithChildren<{
  title: string;
}>;

const LayoutDefault = ({ children, title }: LayoutDefaultProps) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <Header title={title} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default LayoutDefault;
