import { Close } from "../common/Icon";
import { ImageSlide } from "../data/Product";

const ProductFullView = (props: { pics: ImageSlide[]; onClose: any }) => {
  return (
    <div className=" modal">
      <Close className="m-4" onClick={props.onClose} color="white" />
      {props.pics.map((pic) => {
        return <img src={pic.src} alt={pic.alt} />;
      })}
    </div>
  );
};

export default ProductFullView;
