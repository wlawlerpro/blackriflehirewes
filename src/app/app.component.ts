import { Component, OnInit } from '@angular/core';

import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Welcome to Black Rifle Hire Wes.com';
  mainMenu = true;
  name = 'Wes Lawler'; 
  eaddress= 'wes.lawler2@gmail.com';
  phone ='502 938 5281'

  constructor(private router: Router) {}
/*
prepareRoute(outlet: RouterOutlet) {
  return outlet && OutletContext.activatedRouteData && OutletContext.activatedRouteData['animation'];

}*/

ngOnInit () {

}

menuToggle() {
  this.mainMenu = !this.mainMenu;
  this.router.navigate(['./me']);
}
}
