import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursComponent } from './cours/cours.component'
import { ContactComponent } from './contact/contact.component'
import { AccueilComponent } from './accueil/accueil.component'
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  {
    path : 'cours', component: CoursComponent
  },
  {
    path: 'contact' , component: ContactComponent,
  },
  {
    path : 'accueil', component: AccueilComponent
  },
  {
    path : 'student/:name', component: StudentComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
