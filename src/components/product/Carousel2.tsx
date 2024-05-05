import { ImageSlide } from "../data/Product";

const Carousel2 = ({
  images,
  width,
  padding,
}: {
  images: ImageSlide[];
  width: string;
  padding: string;
}) => {
  return (
    <div className=" flex overflow-x-scroll w-full ">
      {images.map((slide, index) => (
        <img
          src={slide.src}
          alt={slide.alt}
          className={`${width} object-cover ${padding}`}
          key={index}
        />
      ))}
    </div>
  );
};

export default Carousel2;
