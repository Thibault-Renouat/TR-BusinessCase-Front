import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from "./components/acceuil/acceuil.component";
import {CguComponent} from './components/cgu/cgu.component';
import {MentionsLegalesComponent} from './components/mentions-legales/mentions-legales.component';
import {PolitiqueConfComponent} from './components/politique-conf/politique-conf.component';
import {AnnonceDetailleeComponent} from './components/annonce-detaillee/annonce-detaillee.component';


const routes: Routes = [
  { path: '', redirectTo:'acceuil', pathMatch:'full'},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'cgu', component: CguComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent},
  { path: 'confidientialite', component: PolitiqueConfComponent},
  { path: 'annonce-detaillee', component: AnnonceDetailleeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
