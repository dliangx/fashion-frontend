import { useState } from "react";
import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  const [category,setCategory] = useState<Category>();
  setCategory(props);
  const handListClick = (_: React.PointerEvent,props: Category) => {
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
  if(category){
    return <div>renderChildren(category.sub)</div> ;
  }else {
    return <div></div>
  }
  
}

export default CategoryList;
