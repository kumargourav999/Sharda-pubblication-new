import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JournalsComponent } from './journals/journals.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerQueryComponent } from './customer-query/customer-query.component';
import { AboutComponent } from './about/about.component';
import { SubmitArticleComponent } from './submit-article/submit-article.component';
import { CustomerArticleComponent } from './customer-article/customer-article.component';
import { AuthGuard} from './auth.guard';
import { ResearchPulicationComponent } from './research-pulication/research-pulication.component';
import { DOIComponent } from './doi/doi.component';
import { OJSComponent } from './ojs/ojs.component';
import { CopyeditingComponent } from './copyediting/copyediting.component';
import { ResearchArticeComponent } from './research-artice/research-artice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParaphesingComponent } from './paraphesing/paraphesing.component';
import { RefundComponent } from './refund/refund.component';
import { ThesisWritingComponent } from './thesis-writing/thesis-writing.component';
import { DessertationWritingComponent } from './dessertation-writing/dessertation-writing.component';
import { ThesisEditingComponent } from './thesis-editing/thesis-editing.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'navbar',component:NavbarComponent},
  {path:'paraphrasing',component:ParaphesingComponent},
  {path:'AboutUs',component:AboutComponent},
    { path: 'journals', component: JournalsComponent },
     {path:'login', component: AdminLoginComponent},
      {path:'admindash', component: AdminDashboardComponent,canActivate:[AuthGuard]},
      {path:'contact',component:ContactComponent},
      {path:'customerQuery',component:CustomerQueryComponent},
      {path:"submitArticle",component:SubmitArticleComponent},
      {path:"customersArticle",component:CustomerArticleComponent},
       {path:"research-pubication",component:ResearchPulicationComponent},
        {path:"D-O-I",component:DOIComponent},
        {path:"O-J-S",component:OJSComponent},
        {path:"copyediting-formating",component:CopyeditingComponent},
          {path:"research-article",component:ResearchArticeComponent},
           {path:"refund-policy",component:RefundComponent},
           {path:"thesis-writing",component:ThesisWritingComponent},
           {path:"dessertation-writing",component:DessertationWritingComponent},
           {path:"thesis-editing",component:ThesisEditingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
  scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
