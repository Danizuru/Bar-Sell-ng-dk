import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, clearCart } from './cart.actions';
import { CartState, initialCartState } from './cart.model';

export const cartReducer = createReducer(
  initialCartState,
  on(addItem, (state, { item }) => {
    const existingItem = state.items.find(i => i.id === item.id);

    let updatedItems;

    if (existingItem) {
      updatedItems = state.items.map(i =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
    } else {
      updatedItems = [...state.items, item];
    }

    const updatedTotalAmount = state.totalAmount + item.price * item.quantity;

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }),
  on(removeItem, (state, { itemId }) => {
    const item = state.items.find(i => i.id === itemId);

    if (!item) {
      return state;
    }

    const updatedItems = state.items.filter(i => i.id !== itemId);
    const updatedTotalAmount = state.totalAmount - item.price * item.quantity;

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }),
  on(clearCart, state => ({
    ...state,
    items: [],
    totalAmount: 0
  }))
);
