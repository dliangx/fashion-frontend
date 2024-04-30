import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import OurStory from "./components/about/OurStory";
import { Menu } from "./components/menu/Menu";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";
import Blog from "./components/blog/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import ProductDetailView from "./components/product/ProductDetailView";
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
import CategoryView from "./components/product/CategoryView";
import Login from "./components/login/Login";
import { CollectionInfo, ProductInfo } from "./components/data/Product";
import RequireAuth from "./components/login/RequireAuth";
import Register from "./components/login/Register";

type AppContextType = {
  theme: string;
  category: Category[];
  collapseMap: Map<number, boolean>;
  setCollapseMap: any;
  brandCollections: CollectionInfo[];
  setBrandCollections: any;
  newProducts: ProductInfo[];
  setNewProducts: any;
  recommendProducts: ProductInfo[];
  setRecommendProducts: any;
  tabIndex: number;
  setTabIndex: any;
};

const AppContext = createContext<AppContextType>({
  theme: "light",
  category: [],
  collapseMap: new Map(),
  setCollapseMap: null,
  brandCollections: [],
  setBrandCollections: null,
  newProducts: [],
  setNewProducts: null,
  recommendProducts: [],
  setRecommendProducts: null,
  tabIndex: 0,
  setTabIndex: null,
});

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [category, setCategory] = useState<Category[]>([]);
  const [collapseMap, setCollapseMap] = useState<Map<number, boolean>>(
    new Map()
  );
  const [brandCollections, setBrandCollections] = useState<CollectionInfo[]>(
    []
  );
  const [newProducts, setNewProducts] = useState<ProductInfo[]>([]);
  const [recommendProducts, setRecommendProducts] = useState<ProductInfo[]>([]);
  const [tabIndex, setTabIndex] = useState<number>(1);

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
    fetch(import.meta.env.VITE_API_URL + "/get_categorys", {
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const theme = mediaQuery.matches ? "dark" : "light";
    setTheme(theme);

    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        category,
        collapseMap,
        setCollapseMap,
        brandCollections,
        setBrandCollections,
        newProducts,
        setNewProducts,
        recommendProducts,
        setRecommendProducts,
        tabIndex,
        setTabIndex,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our_story" element={<OurStory />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:context" element={<SearchView />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<CollectionDetail />} />
          <Route path="/product" element={<CategoryView />} />
          <Route path="/product/:id" element={<ProductDetailView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route
            path="/add_new_address"
            element={
              <RequireAuth>
                <AddNewAddress />
              </RequireAuth>
            }
          />
          <Route
            path="/add_new_card"
            element={
              <RequireAuth>
                <AddNewCard />
              </RequireAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {error}
    </AppContext.Provider>
  );
}

export { AppContext };
export default App;
