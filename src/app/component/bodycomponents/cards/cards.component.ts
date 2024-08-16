import { Component } from '@angular/core';
import { addItem } from '../../../cart/cart.actions';
import { CartItem } from '../../../cart/cart.model';
import { Store } from '@ngrx/store';
import { PeticionService } from '../../../servicios/peticion.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor (
    private peticion:PeticionService,
    private store: Store,

  ){}

  ngOnInit(): void {
    
    this.cargarTodas()
  }

  datos:any[] = []
  estado:number = 1


  cargarTodas(){

    let post = {
      host:this.peticion.urlHost,
      path:"/productos/listar",
      payload:{
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.datos = res.data
    }
  )
  }

  Comprar(product: any) {
    const item: CartItem = {
      id: product.id,
      name: product.nombre,
      price: product.precio,
      quantity: 1  // Default quantity, adjust as needed
    };

    this.store.dispatch(addItem({ item }));
  }

}
