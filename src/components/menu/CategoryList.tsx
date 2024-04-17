import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {

  const handListClick = (_: React.PointerEvent,props: Category) => {
    
  };
return (
<CategoryItem props={props} onclick={handListClick} ></CategoryItem>
)

}

export default CategoryList;
