import { PropsWithChildren } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type HeaderProps = PropsWithChildren<{
  title: string;
}>;

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex w-full justify-between px-6 py-4">
      <h1 className="text-gray-600 font-bold text-lg">{title}</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
