import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
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
  );
}

export default App;
