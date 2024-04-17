import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  const handListClick = (_: React.PointerEvent) => {};
  function renderCategoryList(params: Category[]) {
    return (
      <>
        {params.map((param) => {
          <CategoryItem props={param} onclick={handListClick}></CategoryItem>;
          if (param.sub.length > 0) {
            renderCategoryList(param.sub);
          }
        })}
      </>
    );
  }
  return <>{renderCategoryList(props.sub)}</>;
}

export default CategoryList;
