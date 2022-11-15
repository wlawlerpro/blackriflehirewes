import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product'
import { BehaviorSubject, Observable,of } from 'rxjs';

import{ catchError, map, tap} from 'rxjs/operators';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private catalogURL = 'https://my-json-server.typicode.com/wlawlerpro/db/products'; 
constructor(
  private http: HttpClient
) {}

private total = 0; 
private totalSubject$ = new BehaviorSubject<number>(this.total); 
public totalOberservable = this.totalSubject$.asObservable(); 
private  items : Product[] = []; 

private itemList$ = new BehaviorSubject<Product[]>(this.items); 
public itemsObservable1 = this.itemList$.asObservable();

  

  
  

  addToCart(item: Product): void {
    this.items.push(item);
    this.itemList$.next(this.items); 
    this.total = this.calculateTotal(); 
    this.totalSubject$.next(this.total); 
    
    
  }
  
  removeFromCart(index: number){
    this.items.splice(index,1)
    this.total = this.calculateTotal(); 
    this.totalSubject$.next(this.total)

  }
  
  getItems() {
    return this.itemList$.asObservable(); 
  }
/*
getItems(): Observable<Product> {
  return this.http.get<items>(this.catalogURL)

}
*/ 
  clearCart() {
    this.items = []; 
    return this.items;
  }
  

  private calculateTotal(): number {
    let total = 0; 
    this.items.forEach(
      (item: { price: number}) =>
      (total += item.price * 1)
    ); 
    return total; 
  }
 //Product List 
 getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.catalogURL)
  .pipe(
    tap(), 
  );
 }

 
}
