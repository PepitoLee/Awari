export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  colors: string[];
  dimensions: string;
  shadowColor: string; // New property for the pastel shadow effect
}

export interface CartItem extends Product {
  quantity: number;
}

export enum ViewingState {
  LIST = 'LIST',
  DETAIL = 'DETAIL'
}