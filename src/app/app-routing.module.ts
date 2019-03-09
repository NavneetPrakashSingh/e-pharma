import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DemoCheckComponent } from './demo-check/demo-check.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [

  { 
    path: '', component: HomeComponent
   },
   {
     path : 'login', component:LoginComponent
   },
   {
     path :'register',component:RegisterComponent
   },
  
   {
      path : 'demo-check', component : DemoCheckComponent
    },     
    {
      path : 'signup-page', component : SignupPageComponent 
    }

];
=======
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductComponent }];
>>>>>>> home

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
