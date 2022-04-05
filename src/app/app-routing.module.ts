import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skillfolder/skill/skill.component'
import { NgbdCarouselBasic} from './slideshow/carousel-basic'


const approutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'me', component: NgbdCarouselBasic},
  {path: 'skill', component:SkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
