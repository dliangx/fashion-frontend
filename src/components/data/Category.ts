export interface Category {
  name: String;
  level: String;
  collapse: true;
  sub: Category[];
}

export interface CategoryResp {
  id: BigInt;
  name: String;
  level: String;
  parent_id: BigInt;
  sort: BigInt;
}
