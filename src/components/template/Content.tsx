import { PropsWithChildren } from "react";

type ContentProps = PropsWithChildren;

const Content = ({ children }: ContentProps) => {
  return <div className="px-6 my-6">{children}</div>;
};

export default Content;
