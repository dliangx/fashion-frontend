import { Category } from "../data/Category";
import CategoryList from "./CategoryList";

function CategoryRoot({name,level,collapse,sub}: Category) {
  const handRootClick = () => {
    if ((collapse = true)) {
    } else {
    }
  };

  return (
    <div onClick={handRootClick}>
      <CategoryList name={name} level={level} collapse={collapse} sub={sub}  ></CategoryList>
    </div>
  );
}

export default CategoryRoot;
