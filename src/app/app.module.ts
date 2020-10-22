import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HabilityComponent } from './hability/hability.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConocimientoComponent } from './conocimiento/conocimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutMeComponent,
    ProjectsComponent,
    HabilityComponent,
    ExperienceComponent,
    ConocimientoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
