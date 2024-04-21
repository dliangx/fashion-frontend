import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0  h-16 pt-4 text-center  border-t  ">
      <div className="flex">
        <div className="w-1/4 grid place-items-center">
          <Link to="/">
            <img src="/icon/home.svg" className="h-8 " />
          </Link>
        </div>
        <div className="w-1/4 grid place-items-center">
          <Link to="/blog">
            <img src="/icon/blog.svg" className="h-8 " />
          </Link>
        </div>
        <div className="w-1/4 grid place-items-center">
          <Link to="/product">
            <img src="/icon/shopping.svg" className="h-8 " />
          </Link>
        </div>
        <div className="w-1/4 grid place-items-center">
          <Link to="/our_story">
            <img src="/icon/user.svg" className="h-8 " />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
