import { useState } from "react";
import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  const [clickIndex, setClickIndex] = useState<number>();

  const handClickItem = (index: number) => {
    setClickIndex(index);
  };

  return (
    <>
      {props.sub !== undefined &&
        props.sub.map((param, index) => {
          return (
            <div>
              <CategoryItem
                props={param}
                index={index}
                onclick={() => handClickItem(index)}
                key={param.id}
              ></CategoryItem>
              {param.sub.length > 0 ? (
                index === clickIndex && (
                  <CategoryList {...param} key={900 + param.id}></CategoryList>
                )
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
