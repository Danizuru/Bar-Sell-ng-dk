import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.model';

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCart,
  (state: CartState) => state.items
);

export const selectCartTotalAmount = createSelector(
  selectCart,
  (state: CartState) => state.totalAmount
);

export const selectCartTotalQuantity = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);
