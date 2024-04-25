import { useEffect, useState } from "react";
import { ProductInfo } from "../data/Product";
import Products from "./Products";
import { useLocation } from "react-router-dom";

const CategoryView = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [viewOption, setViewOption] = useState<number>(1);
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/get_product_by_category", {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setViewOption(1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [category]);

  return (
    <>
      <Products products={products} option={viewOption}></Products>
    </>
  );
};

export default CategoryView;
