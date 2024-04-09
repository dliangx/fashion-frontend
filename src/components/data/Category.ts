export interface Category {
  name: String;
  level: number;
  collapse: true;
  sub: Category[];
}

export interface CategoryResp {
  id: number;
  name: String;
  level: number;
  parent_id: number;
  sort: number;
}
