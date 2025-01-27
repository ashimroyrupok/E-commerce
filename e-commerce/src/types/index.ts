export type TCategory = {
  name: string;
  image: string;
};

export type TProducts = {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  category: string;
};

export type TProductResponse = {
  success: boolean;
  message: string;
  data: TProducts;
};
