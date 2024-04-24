import { ImageSlide } from "../data/Product";
import Carousel from "../product/Carousel";

const images: ImageSlide[] = [
  { src: "/assets/p0.png", alt: "Image 1" },
  { src: "/assets/p1.png", alt: "Image 2" },
  { src: "/assets/p2.png", alt: "Image 3" },
  { src: "/assets/p3.png", alt: "Image 4" },
  { src: "/assets/p4.png", alt: "Image 5" },
  { src: "/assets/p5.png", alt: "Image 6" },
  // 更多图片...
];

const Recommend = () => {
  return (
    <div className=" w-1/2 ">
      <Carousel images={images} />
    </div>
  );
};

export default Recommend;
