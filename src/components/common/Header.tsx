import { Link } from "react-router-dom";
import { MenuIcon, Search, ShoppingBag } from "./Icon";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <div className="flex h-10 mt-2 items-end w-full">
      <Link to="/menu">
        <MenuIcon className="ml-4" />
      </Link>

      <Logo className="h-8 m-auto" />

      <Link to="/search">
        <Search className="mr-4" />
      </Link>
      <Link to="/cart">
        <ShoppingBag className="mr-4" />
      </Link>
    </div>
  );
};

export default Header;
