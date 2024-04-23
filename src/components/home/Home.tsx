import Footer from "../common/Footer";
import Header from "../common/Header";
import Collections from "./Collections";

const Home = () => {
  return (
    <div className="h-full">
      <Header />
      <Collections></Collections>
      <Footer />
    </div>
  );
};

export default Home;
