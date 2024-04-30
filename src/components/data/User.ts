export type User = {
  username: string;
  userToken: string;
};

export type Address = {
  username: number;
  first_name: String;
  second_name: String;
  address: String;
  city: String;
  state: String;
  zip: String;
  phone: String;
};

export type PaymentCard = {
  username: number;
  card_type: number;
  card_name: String;
  card_num: String;
  exp_mon: String;
  exp_date: String;
  cvv: String;
};
