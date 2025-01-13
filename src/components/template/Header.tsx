import { PropsWithChildren } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type HeaderProps = PropsWithChildren<{
  title: string;
}>;

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex w-full justify-between">
      <h1>{title}</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
