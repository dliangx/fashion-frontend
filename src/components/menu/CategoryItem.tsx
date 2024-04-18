import { CategoryItemProps } from "../data/Category";
import { Down, Up } from "../common/Icon";
import { useState } from "react";

const CategoryItem = ({ props, onclick }: CategoryItemProps) => {
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

  return (
    <div className="">
      <div className="h-4" />

      <div className={calcDepStr(props.level)}>
        <div className=" flex-grow">{props.name}</div>

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
