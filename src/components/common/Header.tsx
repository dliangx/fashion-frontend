import { MenuIcon, Search, ShoppingBag } from "./Icon";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <div className="flex h-10 mt-2 items-end">
      <MenuIcon className="ml-4" />
      <Logo className="h-8 m-auto" />
      <Search className="mr-4" />
      <ShoppingBag className="mr-4" />
    </div>
  );
};

export default Header;
