import { useState } from "react";
import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  const handListClick = (_: React.PointerEvent) => {
    alert();
  };

  return (
    <>
      {props.sub.map((param) => {
        return (
          <div>
            <CategoryItem
              props={param}
              onclick={handListClick}
              key={param.id}
            ></CategoryItem>
            {param.sub.length > 0 && param.collapse == false ? (
              <CategoryList {...param}></CategoryList>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
}

export default CategoryList;
