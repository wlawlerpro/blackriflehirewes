import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './mefolder/me/me.component';
import { SkillComponent } from './skillfolder/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
   // BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
