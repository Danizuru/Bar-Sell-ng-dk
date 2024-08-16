import { CartState, initialCartState } from './cart/cart.model';
// import { UserState, initialUserState } from './cart/userModel';

export interface AppState {
   cart: CartState;
   // user: UserState;
   // Add other state slices here as needed
 }

export const initialAppState: AppState = {

   cart: initialCartState,
   // user: initialUserState,

}