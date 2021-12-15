import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';

const routes: Routes = [  
  { path: 'AboutComponent', component: AboutComponent },
  { path: 'FAQComponent', component: FAQComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
