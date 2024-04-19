import { CategoryItemProps } from "../data/Category";
import { Down, Forward } from "../common/Icon";
import { useContext } from "react";
import { CollapseContext } from "./Menu";

const CategoryItem = ({ props, onclick }: CategoryItemProps) => {
  const { collapseMap } = useContext(CollapseContext);
  function calcDepStr(level: number) {
    const width = level * 2;
    if (level <= 4) {
      return "w-[" + width.toString() + "rem]";
    } else {
      return "w-[10rem]";
    }
  }
  const Collapse = () => {
    return (
      <>
        {props.sub.length > 0 && collapseMap.get(props.id) && <Down />}
        {props.sub.length > 0 && !collapseMap.get(props.id) && <Forward />}
      </>
    );
  };

  return (
    <div
      onClick={() => {
        onclick();
      }}
    >
      <div className="h-4" />

      <div className="flex">
        <div className={calcDepStr(props.level)}></div>
        <div className=" flex-grow">{props.name}</div>

        <div className="mr-6 flex-grow-0">
          <Collapse />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
