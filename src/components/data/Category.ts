export interface Category {
  id: number;
  name: String;
  level: number;
  collapse: boolean;
  sub: Category[];
}



export type CategoryItemProps = {
  props: Category;
  onclick:(event: React.PointerEvent,props: Category)=>void 
}