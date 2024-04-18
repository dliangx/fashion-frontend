import { CategoryItemProps } from "../data/Category";
import { Down, Up } from "../common/Icon";
import { useState } from "react";

const CategoryItem = ({ props, onclick }: CategoryItemProps) => {
  const [collapse, setCollapse] = useState<boolean>();
  const handClick = (_: React.MouseEvent) => {
    setCollapse(collapse ? false : true);
  };
  function calcDepStr(level: number) {
    if (level == 0) {
      return "flex ml-6";
    } else if (level == 1) {
      return "flex ml-6";
    } else if (level == 2) {
      return "flex ml-12";
    } else if (level == 3) {
      return "flex ml-16";
    } else if (level == 4) {
      return "flex ml-28";
    }
  }
  const Collapse = () => {
    return (
      <>
        {props.sub.length > 0 && collapse && <Up />}
        {props.sub.length > 0 && !collapse && <Down />}
      </>
    );
  };

  return (
    <div onClick={onclick} onMouseUp={handClick}>
      <div className="h-4" />

      <div className={calcDepStr(props.level)}>
        <div className=" flex-grow">{props.name}</div>

        <div className="mr-6 flex-grow-0">
          <Collapse />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
