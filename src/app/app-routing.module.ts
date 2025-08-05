import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductDashComponent } from './shared/components/product-dash/product-dash.component';
import { FairsDashComponent } from './shared/components/fairs-dash/fairs-dash.component';
import { UserDetailsComponent } from './shared/components/user-dash/user-details/user-details.component';
import { UserFormComponent } from './shared/components/user-dash/user-form/user-form.component';
import { ProductFormComponent } from './shared/components/product-dash/product-form/product-form.component';
import { ProductDetailsComponent } from './shared/components/product-dash/product-details/product-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

// http://localhost:4200/#
const routes:Routes=[
  {
    path:'',//http://localhost:4200/#
    redirectTo:'home',
    pathMatch:'full',
    
  },
  {
    path:'home',//http://localhost:4200/#
    component:HomeComponent,
    title:'DashBoard'
  },{
    path:'users',//http://localhost:4200/users
    component:UserDashComponent,
    title:'User-DashBoard',
    children:[
       {
    path:'addUser',//http://localhost:4200/users
    component:UserFormComponent
  },
  {
    path:':userId',//http://localhost:4200/users
    component:UserDetailsComponent
  },
  
   
   {
    path:':userId/edit',//http://localhost:4200/users
    component:UserFormComponent
  },
    ]
  },
 
  {
    path:'products',//http://localhost:4200/products
    component:ProductDashComponent,
    title:'Product-DashBoard',
    children: [
      {
        path: 'addProduct', //http://localhost:4200/users
        component: ProductFormComponent
      },
      {
        path: ':pid', //http://localhost:4200/users
        component: ProductDetailsComponent
      },


      {
        path: ':pid/edit', //http://localhost:4200/users
        component: ProductFormComponent
      },
    ]
  },
  
  {
    path:'fairs',
    component:FairsDashComponent,
    title:'Fair-DashBoard'
  },
   {
    path:'page-not-found',//http://localhost:4200/#
    component:PageNotFoundComponent
  },{
    path:'**',
    redirectTo:'page-not-found'
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
