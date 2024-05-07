import { Close } from "../common/Icon";

const ProductFullView = (props: { content: string; onClose: any }) => {
  return (
    <div className=" modal">
      <Close className="m-4" onClick={props.onClose} color="white" />

      {props.content}
    </div>
  );
};

export default ProductFullView;
