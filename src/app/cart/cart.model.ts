  export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface CartState {
    items: CartItem[];
    totalAmount: number;
  }
  
  export const initialCartState: CartState = {
    items: [],
    totalAmount: 0,
  };
