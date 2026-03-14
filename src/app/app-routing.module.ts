import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JournalsComponent } from './journals/journals.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerQueryComponent } from './customer-query/customer-query.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'AboutUs',component:AboutComponent},
     { path: 'journals', component: JournalsComponent },
     {path:'login', component: AdminLoginComponent},
      {path:'admindash', component: AdminDashboardComponent,canActivate:[AuthGuard]},
      {path:'contact',component:ContactComponent},
      {path:'customerQuery',component:CustomerQueryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
