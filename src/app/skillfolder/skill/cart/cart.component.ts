import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../product';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  total : number; 
  items : Product[] = [];
  
  cartForm = this.fb.group({
    cartStock: this.fb.array([])
    })
    

  constructor(
    private cartService: CartService,
    private fb: FormBuilder, 
    
  ) { }
  
  ngOnItit(): void{
    this.cartService.itermsObservable.subscribe((res) => {
      this.items = res;
    }); 
    this.cartService.totalOberservable.subscribe((res) => {
      this.total = res; 
    }); 
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert('Thank you for viewing my Demo');
   
  }
}
  


