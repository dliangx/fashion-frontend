import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  const handListClick = (props:Category) => {
    renderChildren(props.sub);
  };
  function renderChildren(params:Category[]) {
    return(
      params.map((param)=>{
        <CategoryItem {...param}></CategoryItem>
        if(!param.collapse){
          renderChildren(param.sub)
        }
      })
    )
  }

  return <div onClick={handListClick(props)}></div>;
}

export default CategoryList;
