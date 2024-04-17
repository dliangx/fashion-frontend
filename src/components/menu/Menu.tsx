import { useCallback, useEffect, useState } from "react";
// import { CategoryResp } from "../data/Category";
import { Router, Route, Link, json } from "react-router-dom";
import { Category } from "../data/Category";
import CategoryRoot from "./CategoryRoot";
import { Close } from "../common/Icon";

const Menu = () => {
  const [category, setCategory] = useState<[Category]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/get_categorys", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const roots = data
          .filter((ele: any) => {
            return ele["level"] === 0;
          })
          .map((ele: any) => {
            let cate: Category = {
              id: ele["id"],
              name: ele["name"],
              level: ele["level"],
              collapse: true,
              sub: [],
            };

            return cate;
          });

        setCategory(roots);
        console.log(roots);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div>
        <Close className="m-2"/>
        <div className="h-4"/>
        <div className="flex  space-x-4">
          {category?.map((one) => {
            return (
              <div className="w-2/3">
                <div className="grid place-items-center">{one.name}</div>
                <div className="grid place-items-center"> 
                  {one.collapse && (
                    <img
                      src="/assets/underline_orange.svg"  
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
