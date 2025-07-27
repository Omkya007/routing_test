import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { ProductDashComponent } from './shared/components/product-dash/product-dash.component';
import { FairsDashComponent } from './shared/components/fairs-dash/fairs-dash.component';
import { HomeComponent } from './shared/components/home/home.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from './shared/material/material.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { ToggleNavbarDirective } from './shared/directive/dropdown.directive';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsComponent } from './shared/components/user-dash/user-details/user-details.component';
import { UserFormComponent } from './shared/components/user-dash/user-form/user-form.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BackComponent } from './shared/components/back/back.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDashComponent,
    ProductDashComponent,
    FairsDashComponent,
    HomeComponent,
    ToggleNavbarDirective,
    UserDetailsComponent,
    UserFormComponent,
    BackComponent,
    GetConfirmComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
      MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
