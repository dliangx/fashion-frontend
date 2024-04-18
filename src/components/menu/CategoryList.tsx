import { useState } from "react";
import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  return (
    <>
      {props.sub.map((param) => {
        const [collapse, setCollapse] = useState<boolean>();
        const handListClick = (_: React.MouseEvent) => {
          setCollapse(collapse ? false : true);
        };
        return (
          <div>
            <CategoryItem
              props={param}
              onclick={handListClick}
              key={param.id}
            ></CategoryItem>
            {param.sub.length > 0 ? (
              collapse && (
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
