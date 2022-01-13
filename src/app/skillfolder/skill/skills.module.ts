import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkillComponent } from './skill.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [SkillComponent],
  exports: [SkillComponent],
  bootstrap: [SkillComponent]
})
export class NgbdCarouselBasicModule {}
