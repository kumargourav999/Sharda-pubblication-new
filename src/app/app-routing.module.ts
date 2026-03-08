import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JournalsComponent } from './journals/journals.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
     { path: 'journals', component: JournalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
