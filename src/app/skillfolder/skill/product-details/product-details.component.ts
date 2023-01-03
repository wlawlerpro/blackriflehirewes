import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, productss } from '../../product'; 
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; 
  producturl = 'https://my-json-server.typicode.com/wlawlerpro/db/products'

  
  SKILL_ROUTE = '/skill'
  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService, 
    
    ) { }

  ngOnInit(): void  {
   this.getProduct();
    
  
  /*const id = Number(this.route.snapshot.paramMap.get('id')); 
  if (id) {
    this.getProduct(id);
  }
  */
   

  
  }

  getProduct(): void {
  const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); 
  this.cartService.getProduct(id)
  .subscribe(product => this.product = product);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!'); 
  }
  
 
  
  onBuy() {
    window.alert('Thank you for viewing my Demo');
  }
}
