import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkillComponent } from './skill/skill.component';
import { TopBarComponent } from './skill/top-bar/top-bar.component';
import { ProductListComponent } from './skill/product-list/product.list.component';
import { ProductDetailsComponent } from './skill/product-details/product-details.component';

@NgModule({
  imports: [BrowserModule, NgbModule, CommonModule ],
  declarations: [
   SkillComponent,
  TopBarComponent, 
ProductListComponent,
ProductDetailsComponent],
  exports: [SkillComponent, TopBarComponent],
  bootstrap: [SkillComponent]
})
export class skillModule {}
