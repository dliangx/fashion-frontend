import { Category } from "../data/Category";
import {Down,Up} from "../common/Icon"

const CategoryItem = (props: Category) => {

  return (
    <div >
      {props.name}
      <Collapse collapse = {props.collapse}></Collapse>
    </div>
  )
};

const Collapse = (collapse:boolean)=>{
  if(collapse) {
    return <Down/>
  }else{
    return <Up />
  }
}
export default CategoryItem;
