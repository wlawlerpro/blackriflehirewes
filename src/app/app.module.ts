import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic} from './slideshow/carousel-basic'
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skillfolder/skill/skill.component';
import { skillModule } from './skillfolder/skill.module';


@NgModule({
  declarations: [
    AppComponent,
     
    
   NgbdCarouselBasic,
    HomeComponent, 
  
  ],
  imports: [
    BrowserModule,
    skillModule,
   // BrowserAnimationsModule,
    AppRoutingModule,
   NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
