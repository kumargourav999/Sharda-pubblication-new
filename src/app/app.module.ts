import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JournalsComponent } from './journals/journals.component';
import { LeadPopupComponent } from './lead-popup/lead-popup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoaderInterceptor } from './loader.interceptor';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerQueryComponent } from './customer-query/customer-query.component';
import { AboutComponent} from './about/about.component';
import { SubmitArticleComponent } from './submit-article/submit-article.component';
import { CustomerArticleComponent } from './customer-article/customer-article.component';
import { ResearchPulicationComponent } from './research-pulication/research-pulication.component';
import { DOIComponent } from './doi/doi.component';
import { OJSComponent } from './ojs/ojs.component';
import { CopyeditingComponent } from './copyediting/copyediting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JournalsComponent,
    LeadPopupComponent,
    NavbarComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    GlobalLoaderComponent,
    FooterComponent,
    ContactComponent,
    CustomerQueryComponent,
    AboutComponent,
    SubmitArticleComponent,
    CustomerArticleComponent,
    ResearchPulicationComponent,
    DOIComponent,
    OJSComponent,
    CopyeditingComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }