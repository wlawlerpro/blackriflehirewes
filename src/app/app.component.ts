import { Component, OnInit } from '@angular/core';

import { OutletContext, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
 // animation: [ ''],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Welcome to Black Rifle Hire Wes';
  mainMenu = true;

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
