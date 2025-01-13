import { PropsWithChildren } from "react";

type ContentProps = PropsWithChildren;

const Content = ({ children }: ContentProps) => {
  return <div>{children}</div>;
};

export default Content;
