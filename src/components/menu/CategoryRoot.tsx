import { Category } from "../data/Category";
import CategoryList from "./CategoryList";

function CategoryRoot(category: Category) {
  const handRootClick = () => {};
  alert(category);
  return (
    <div onClick={handRootClick}>
      <CategoryList {...category.sub[0]}></CategoryList>
    </div>
  );
}

export default CategoryRoot;
