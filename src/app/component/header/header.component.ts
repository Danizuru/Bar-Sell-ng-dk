import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { CartState, CartItem } from '../../cart/cart.model';
import { selectCartItems, selectCartTotalAmount } from '../../cart/cart.selectors';
import { addItem, removeItem, clearCart } from '../../cart/cart.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


}
