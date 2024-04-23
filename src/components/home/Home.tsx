import Footer from "../common/Footer";
import Header from "../common/Header";
import Collections from "./Collections";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <div className="h-full">
      <Header />
      <Collections />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default Home;
