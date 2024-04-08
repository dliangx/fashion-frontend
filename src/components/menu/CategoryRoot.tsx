import { Category } from "../data/Category";
import CategoryList from "./CategoryList";

function CategoryRoot(children: React.ReactNode, category: Category) {
  const handRootClick = () => {};
  alert(category);
  return (
    <div onClick={handRootClick}>
      <CategoryList category={category} children={children}></CategoryList>
    </div>
  );
}

export default CategoryRoot;
