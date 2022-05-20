import { Injectable } from '@angular/core';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  goToggle = true; 

  goToggleBanner() {
    this.goToggle = !this.goToggle;
  }
  constructor() { }
}
