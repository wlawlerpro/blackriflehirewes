import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillComponent } from './skillfolder/skill/skill.component'
import { NgbdCarouselBasic} from './slideshow/carousel-basic'

const routes: Routes = [
  {path: 'home', component: AppComponent, pathMatch: 'full'},
  {path: 'me', component: NgbdCarouselBasic},
  {path: 'skill', component:SkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
