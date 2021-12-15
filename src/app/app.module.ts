import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { SubscriptionComponentComponent } from './subscription-component/subscription-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FAQComponent,
    ContactComponentComponent,
    SubscriptionComponentComponent,
    ServiceComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
