import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import OurStory from "./components/about/OurStory";
import { Menu } from "./components/menu/Menu";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";
import Blog from "./components/blog/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import Product from "./components/product/Product";
import ProductDetail from "./components/product/ProductDetail";
import Collection from "./components/collection/Collection";
import CollectionDetail from "./components/collection/CollectionDetail";
import SearchView from "./components/search/SearchView";
import ContactUs from "./components/about/ContactUs";
import NotFound from "./components/common/NotFound";
import Checkout from "./components/order/Checkout";
import AddNewAddress from "./components/order/AddNewAddress";
import AddNewCard from "./components/order/AddNewCard";
import { createContext, useEffect, useState } from "react";
import { Category, CategoryResp } from "./components/data/Category";
type CollapseContextType = {
  category: Category[];
  collapseMap: Map<number, boolean>;
  setCollapseMap: any;
};

const CollapseContext = createContext<CollapseContextType>({
  category: [],
  collapseMap: new Map(),
  setCollapseMap: null,
});

function App() {
  const [category, setCategory] = useState<Category[]>([]);
  const [collapseMap, setCollapseMap] = useState<Map<number, boolean>>(
    new Map()
  );
  const [error, setError] = useState(null);
  function buildTree(items: CategoryResp[], treeRoot: Category) {
    const map = new Map();
    const eleMap = new Map();
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      map.set(element.id, element.parent_id);
      eleMap.set(element.id, element);
    }
    function getKeysForValue<K, V>(map: Map<K, V>, valueToFind: V) {
      const keysWithMatchingValue = [];
      for (const [key, value] of map) {
        if (value === valueToFind) {
          keysWithMatchingValue.push(key);
        }
      }
      return keysWithMatchingValue;
    }
    function buildTreeRecursion(
      map: Map<number, number>,
      eleMap: Map<number, CategoryResp>,
      treeRoot: Category
    ) {
      if (map.has(treeRoot.id)) {
        const keys = getKeysForValue(map, treeRoot.id);
        keys.forEach((key) => {
          let item: Category = {
            id: eleMap.get(key)?.id || 0,
            name: eleMap.get(key)?.name || "",
            level: eleMap.get(key)?.level || 0,
            collapse: true,
            sub: [],
          };
          treeRoot.sub.push(item);
          buildTreeRecursion(map, eleMap, item);
        });
      }
    }

    buildTreeRecursion(map, eleMap, treeRoot);
  }

  useEffect(() => {
    fetch("http://localhost:8000/get_categorys", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const roots = data
          .filter((ele: any) => {
            return ele["level"] === 0;
          })
          .map((ele: any) => {
            let cate: Category = {
              id: ele["id"],
              name: ele["name"],
              level: ele["level"],
              collapse: false,
              sub: [],
            };

            return cate;
          });
        console.log(data);

        roots[0].collapse = true;
        console.log("build tree...");
        for (let index = 0; index < roots.length; index++) {
          buildTree(data, roots[index]);
        }

        setCategory(roots);

        console.log(roots);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  }, []);

  return (
    <CollapseContext.Provider value={{ category, collapseMap, setCollapseMap }}>
      {error}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/our_story" element={<OurStory />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:context" element={<SearchView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add_new_address" element={<AddNewAddress />} />
        <Route path="/add_new_card" element={<AddNewCard />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<CollectionDetail />} />
      </Routes>
    </CollapseContext.Provider>
  );
}

export { CollapseContext };
export default App;
