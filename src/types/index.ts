export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string;
}

export interface CartItem extends Product {
  quantity: number;
}