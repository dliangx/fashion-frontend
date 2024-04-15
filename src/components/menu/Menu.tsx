import { useCallback, useEffect, useState } from "react";
// import { CategoryResp } from "../data/Category";
import { Router, Route, Link } from "react-router-dom";
import { Category } from "../data/Category";
import CategoryRoot from "./CategoryRoot";
import { MenuIcon } from "../common/Icon";

const Menu = () => {
  const [category, setCategory] = useState<[Category]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     const fetchData = async ()=>{
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/get_categorys');
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setCategory(jsonData);

      } catch (err:any) {
        setError(err.message);
      }finally{
        setIsLoading(false);
      }
     }

     fetchData();

     alert(category);
  }, []);

  const handleMenuCloseClick = useCallback(() => {
    category?.map((item, index) => {
      alert(item);
      alert(index);
    });
    setCategory(category);
  }, []);

  category?.map((item) => {
    alert(item);
  });

  return (
    <>
      <div>
        <MenuIcon onClick={handleMenuCloseClick} />
      </div>
      <div>
        <CategoryRoot
          name={"WOMEN"}
          level={0}
          collapse={true}
          sub={[]}
        ></CategoryRoot>
        <CategoryRoot
          name={"MEN"}
          level={0}
          collapse={true}
          sub={[]}
        ></CategoryRoot>
        <CategoryRoot
          name={"KIDS"}
          level={0}
          collapse={true}
          sub={[]}
        ></CategoryRoot>
      </div>
    </>
  );
};

export default Menu;
