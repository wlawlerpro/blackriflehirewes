import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product'
import { BehaviorSubject } from 'rxjs';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private total = 0; 
private totalSubject$ = new BehaviorSubject<number>(this.total); 
public totalOberservable = this.totalSubject$.asObservable(); 
private  items : Product[] = []; 

private itemList$ = new BehaviorSubject<Product[]>(this.items); 
public itermsObservable = this.itemList$.asObservable();

  

  
  

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
  
 
}
