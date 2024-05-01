import { ImageSlide } from "../data/Product";
import Carousel from "../product/Carousel";

const images: ImageSlide[] = [
  { src: "/assets/2-3.jpg", alt: "Image 0" },
  { src: "/assets/2-3-1.jpg", alt: "Image 1" },
  { src: "/assets/2-3-2.jpg", alt: "Image 2" },
  { src: "/assets/2-3-3.jpg", alt: "Image 3" },
  { src: "/assets/2-3-4.jpg", alt: "Image 4" },
  { src: "/assets/2-3-5.jpg", alt: "Image 5" },
  { src: "/assets/2-3-6.jpg", alt: "Image 6" },
  { src: "/assets/2-3-7.jpg", alt: "Image 7" },
  { src: "/assets/2-3-8.jpg", alt: "Image 8" },
  { src: "/assets/2-3-9.jpg", alt: "Image 9" },
  { src: "/assets/2-3-10.jpg", alt: "Image 10" },
  // 更多图片...
];

const Recommend = () => {
  return (
    <div className="grid place-items-center mt-10 mb-8">
      <h1 className="text-center text-xl font-serif">JUST FOR YOU</h1>
      <img src="/assets/underline.svg"></img>
      <div className="mt-6">
        <Carousel images={images} isListButton={false} />
      </div>
    </div>
  );
};

export default Recommend;
