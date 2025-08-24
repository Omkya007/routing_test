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
import { AuthGuard } from './shared/services/auth.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { FairDetailsComponent } from './shared/components/fairs-dash/fair-details/fair-details.component';
import { UserRoleGuard } from './shared/services/user-role.guard';
import { CanDeactivateGuard } from './shared/services/can-deactivate.guard';
import { ProductResolver } from './shared/services/product.reslover';
import { SingleProductResolver } from './shared/services/single-product.resolver';
import { NewProdResolver } from './shared/services/new-prod.resolver';

// http://localhost:4200/#
const routes:Routes=[
  {
    path:'',//http://localhost:4200/#
    component:AuthComponent
    
  },
  {
    path:'home',//http://localhost:4200/#
    component:HomeComponent,
    title:'DashBoard',
     canActivate:[AuthGuard],
     data:{
      userRole:['buyer','admin','superAdmin']
     }
  },{
    path:'users',//http://localhost:4200/users
    component:UserDashComponent,
    title:'User-DashBoard',
    canActivate:[AuthGuard,UserRoleGuard],
    data:{
      userRole:['admin','superAdmin']
     },
    canActivateChild:[AuthGuard],
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
    component:UserFormComponent,
    canDeactivate:[CanDeactivateGuard]

  },
    ]
  },
 
  {
    path:'products',//http://localhost:4200/products
    component:ProductDashComponent,
    title:'Product-DashBoard',
     canActivate:[AuthGuard,UserRoleGuard],
     data:{
      userRole:['buyer','admin','superAdmin']
     },
     resolve:{
      productObj:NewProdResolver
      // products:ProductResolver
     },
    //  canActivateChild:[AuthGuard],
    children: [
      {
        path: 'addProduct', //http://localhost:4200/users
        component: ProductFormComponent
      },
      {
        path: ':pid', //http://localhost:4200/users
        component: ProductDetailsComponent,
        resolve:{
          productObj:NewProdResolver
          // productObj:SingleProductResolver
        }
      },


      {
        path: ':pid/edit', //http://localhost:4200/users
        component: ProductFormComponent,
         canDeactivate:[CanDeactivateGuard]
      },
    ]
  },
  
  {
    path:'fairs',
    component:FairsDashComponent,
    title:'Fair-DashBoard',
    data:{
      userRole:['superAdmin']
     },
    canActivate:[AuthGuard,UserRoleGuard],
    children:[
      {
        path:':fairId',
        component:FairDetailsComponent
      }
    ]
  },
   {
    path:'page-not-found',//http://localhost:4200/#
    component:PageNotFoundComponent,
    data:{
      msg:"Page not Found"
    }
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
