import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkillComponent } from './skill/skill.component';
import { TopBarComponent } from './skill/top-bar/top-bar.component';

@NgModule({
  imports: [BrowserModule, NgbModule, CommonModule ],
  declarations: [
   SkillComponent,
    TopBarComponent],
  exports: [SkillComponent, TopBarComponent],
  bootstrap: [SkillComponent]
})
export class skillModule {}
