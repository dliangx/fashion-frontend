import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  const handListClick = () => {
    renderChildren(props.sub);
  };
  function renderChildren(params:Category[]) {
    return(
      params.map((param)=>{
        <CategoryItem props={param} onclick={handListClick} ></CategoryItem>
        if(!param.collapse){
          renderChildren(param.sub)
        }
      })
    )
  }

  return <div onClick={handListClick}></div>;
}

export default CategoryList;
