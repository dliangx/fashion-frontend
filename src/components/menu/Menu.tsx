import { useCallback, useState } from "react";
// import { CategoryResp } from "../data/Category";
import { version } from "react-dom/server";
import { Category } from "../data/Category";
import CategoryRoot from "./CategoryRoot";

const Menu = () => {
  const [category, setCategory] = useState<[Category]>();

  useCallback(() => {
    category?.push({ name: "WOMEN", level: 0, collapse: true, sub: [] });
    category?.push({ name: "MEN", level: 0, collapse: true, sub: [] });
    category?.push({ name: "KIDS", level: 0, collapse: true, sub: [] });
    setCategory(category);
  }, [version]);

  category?.map((item) => {
    alert(item);
  });

  return (
    <>
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
    </>
  );
};

export default Menu;
