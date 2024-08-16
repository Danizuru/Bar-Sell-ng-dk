import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../cart.model';
import { selectCartTotalQuantity } from '../cart.selectors';

@Component({
  selector: 'app-art-icon',
  templateUrl: './art-icon.component.ts.component.html',
  styleUrls: ['./art-icon.component.ts.component.css']
})
export class ArtIconComponentTsComponent {
  totalQuantity$: Observable<number> | null;

  constructor(private store: Store<CartState>) {
    this.totalQuantity$ = this.store.select(selectCartTotalQuantity);
  }

}
