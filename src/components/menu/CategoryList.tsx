import { Category } from "../data/Category";

function CategoryList(props:Category, children: React.ReactNode) {
  const handListClick = () => {};
  alert(props);
  return <div onClick={handListClick}>{children}</div>;
}

export default CategoryList;
