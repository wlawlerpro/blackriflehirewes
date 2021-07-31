import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MeComponent } from './mefolder/me/me.component';
import { SkillComponent } from './skillfolder/skill/skill.component';

const routes: Routes = [
  {path: 'home', component: AppComponent, pathMatch: 'full'},
  {path: 'me', component: MeComponent},
  {path: 'skill', component:SkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
