import { Category ,CategoryItemProps} from "../data/Category";
import {Down,Up} from "../common/Icon"



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
  onclick:(event: React.PointerEvent,props: Category)=>void
}

const Collapse = ({isCollapse}:CollapseProps)=>{
  if(isCollapse) {
    return <Down/>
  }else{
    return <Up />
  }
}
export default CategoryItem;
