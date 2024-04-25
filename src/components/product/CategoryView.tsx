import { useEffect, useState } from "react";
import { ProductInfo } from "../data/Product";
import Products from "./Products";
import { useLocation } from "react-router-dom";
import Header from "../common/Header";
import { Down, Filter, Gallery, GridView, ListView, Up } from "../common/Icon";
import Footer from "../common/Footer";

const CategoryView = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [viewOption, setViewOption] = useState<number>(1);
  const [newOption, setNewOption] = useState<boolean>(true);
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
      <Header />
      <div className="flex m-4 mt-8 h-8">
        <div>{products.length} APPAREL</div>
        <div className="m-auto"></div>
        <button
          className="mr-4 rounded-full bg-gray-200 w-20 flex   items-center justify-center"
          onClick={() => {
            setNewOption(newOption ? false : true);
          }}
        >
          <div>New</div>
          {newOption && <Down></Down>}
          {!newOption && <Up></Up>}
        </button>
        <button
          className="mr-4 rounded-full bg-gray-200 w-8 flex items-center justify-center"
          onClick={() => {
            if (viewOption == 3) {
              setViewOption(1);
            } else {
              setViewOption(viewOption + 1);
            }
          }}
        >
          {viewOption == 1 && <GridView />}
          {viewOption == 2 && <ListView />}
          {viewOption == 3 && <Gallery />}
        </button>
        <button className="rounded-full bg-gray-200 w-8 flex items-center justify-center ">
          <Filter />
        </button>
      </div>
      <Products products={products} option={viewOption}></Products>
      <Footer></Footer>
    </>
  );
};

export default CategoryView;
