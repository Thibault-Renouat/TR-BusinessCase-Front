import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnnonceDetailleeComponent } from './components/annonce-detaillee/annonce-detaillee.component';
import { CguComponent } from './components/cgu/cgu.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';
import { PolitiqueConfComponent } from './components/politique-conf/politique-conf.component';
import {RouterModule} from '@angular/router';
import {listLazyRoutes} from '@angular/compiler/src/aot/lazy_routes';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    HeaderComponent,
    FooterComponent,
    AnnonceDetailleeComponent,
    CguComponent,
    MentionsLegalesComponent,
    PolitiqueConfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
