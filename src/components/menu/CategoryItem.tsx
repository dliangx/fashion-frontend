import { Category } from "../data/Category";
import {Down,Up} from "../common/Icon"

type CategoryItemProps = {
  props: Category;
  onclick:(event: React.PointerEvent)=>void 
}

const CategoryItem = ({props,onclick}:CategoryItemProps) => {

  return (
    <div >
      {props.name}
      <Collapse isCollapse={props.collapse} onclick = {onclick}></Collapse>
    </div>
  )
};

type CollapseProps = {
  isCollapse: boolean;
  onclick:(event: React.PointerEvent)=>void
}

const Collapse = ({isCollapse}:CollapseProps)=>{
  if(isCollapse) {
    return <Down/>
  }else{
    return <Up />
  }
}
export default CategoryItem;
