export type TCategory = {
  name: string;
  image: string;
};


export type TProduct = {
  _id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface TProductResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct;
}
