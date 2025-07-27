import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductDashComponent } from './shared/components/product-dash/product-dash.component';
import { FairsDashComponent } from './shared/components/fairs-dash/fairs-dash.component';
import { UserDetailsComponent } from './shared/components/user-dash/user-details/user-details.component';
import { UserFormComponent } from './shared/components/user-dash/user-form/user-form.component';

// http://localhost:4200/#
const routes:Routes=[
  {
    path:'',//http://localhost:4200/#
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',//http://localhost:4200/#
    component:HomeComponent
  },{
    path:'users',//http://localhost:4200/users
    component:UserDashComponent
  },
  {
    path:'users/addUser',//http://localhost:4200/users
    component:UserFormComponent
  },
  {
    path:'users/:userId',//http://localhost:4200/users
    component:UserDetailsComponent
  },
  
   
   {
    path:'users/:userId/edit',//http://localhost:4200/users
    component:UserFormComponent
  },
  {
    path:'products',//http://localhost:4200/products
    component:ProductDashComponent
  },
  {
    path:'fairs',
    component:FairsDashComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    
  ]
})
export class AppRoutingModule { }
