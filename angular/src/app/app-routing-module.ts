import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'app/component/page-not-found/page-not-found.component';
import { WebsiteComponent } from 'app/component/website/website.component';
import { LoginComponent } from 'app/component/login/login.component';
import { HomeComponent } from 'app/component/home/home.component';


const routes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }