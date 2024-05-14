export type Order = {
  order_sn: String;
  user_name: String;
  total_amount: number;
  pay_amount: number;
  freight_amount: number;
  pay_type: number;
  source_type: String;
  delivery_sn: String;
  receiver_name: String;
  receiver_zip_code: String;
  receiver_city: String;
  receiver_state: String;
  receiver_address: String;
  receiver_phone: String;
  items: Array<OrderItem>;
};

export type OrderItem = {
  order_id: number;
  order_sn: String;
  product_id: number;
  product_pic: String;
  product_name: String;
  product_sn: String;
  product_price: number;
  product_quantity: number;
  product_sku_id: number;
  product_category_id: number;
  product_attr: String;
};
