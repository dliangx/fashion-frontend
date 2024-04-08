import { Category } from "../data/Category";

function CategoryList(children: React.ReactNode, category: Category) {
  const handListClick = () => {};
  alert(category);
  return <div onClick={handListClick}>{children}</div>;
}

export default CategoryList;
