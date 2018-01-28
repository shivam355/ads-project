import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'app/component/page-not-found/page-not-found.component';
import { LoginComponent } from 'app/component/login/login.component';
import { HomeComponent } from 'app/component/home/home.component';
import { ContactusComponent } from 'app/component/contactus/contactus.component';
import { BlogComponent } from 'app/component/blog/blog.component';
import { BlogPostComponent } from 'app/component/blog-post/blog-post.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogpost', component: BlogPostComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }