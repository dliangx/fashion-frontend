import { Category, CategoryItemProps } from "../data/Category";
import { Down, Up } from "../common/Icon";

const CategoryItem = ({ props, onclick }: CategoryItemProps) => {
  return (
    <div>
      <div className="h-6" />
      <div className="flex ">
        <div className="ml-6 flex-grow">{props.name}</div>
        <div className="mr-6 flex-grow-0">
          <Collapse isCollapse={props.collapse} onclick={onclick}></Collapse>
        </div>
      </div>
    </div>
  );
};

type CollapseProps = {
  isCollapse: boolean;
  onclick: (event: React.PointerEvent) => void;
};

const Collapse = ({ isCollapse }: CollapseProps) => {
  if (isCollapse) {
    return <Down />;
  } else {
    return <Up />;
  }
};
export default CategoryItem;
