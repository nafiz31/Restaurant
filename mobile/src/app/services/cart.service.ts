import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export  interface Product {
  id: number;
  name: string;
  price: number;
  amount: number; 
} 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    {id: 0, name: 'Nasi Goreng', price: 7, amount: 1 },
    {id: 1, name: 'Nasi USA', price: 7, amount: 1 },
    {id: 2, name: 'Milo Ais', price: 2, amount: 1 },
    {id: 3, name: 'Sirap Limau', price: 2, amount: 1 }
  ];

private cart = [];
private cartItemCount= new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product){

  }

  decreaseProduct(product){
    
  }

  removeProduct(product){
    
  }
}
