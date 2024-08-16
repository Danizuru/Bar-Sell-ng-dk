import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { CartState, CartItem } from '../../cart/cart.model';
import { selectCartItems, selectCartTotalAmount } from '../../cart/cart.selectors';
import { addItem, removeItem, clearCart } from '../../cart/cart.actions';

@Component({
  selector: 'app-cartc',
  templateUrl: './cartc.component.html',
  styleUrls: ['./cartc.component.css']
})
export class CartcComponent {

  items$: Observable<CartItem[] | null>;
  totalAmount$: Observable<number>;

  constructor(private store: Store<CartState>) {
    this.items$ = this.store.select(selectCartItems);
    this.totalAmount$ = this.store.select(selectCartTotalAmount);
  }

  onAddItem(item: CartItem) {
    this.store.dispatch(addItem({ item }));
  }

  onRemoveItem(itemId: string) {
    this.store.dispatch(removeItem({ itemId }));
  }

  onClearCart() {
    this.store.dispatch(clearCart());
  }
  

}
