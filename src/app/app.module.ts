import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { DefaultComponent } from './users/detail/default.component';
import { UserDetailFoldersComponent } from './users/detail/user-detail-folders.component';
import { NotFoundComponent } from './not-found.component';
import { MaterialModules } from './material-modules';
import { UserDetailGroupsComponent } from './users/detail/user-detail-groups.component';
import { UsersComponent } from './users/users.component';
import { DetailComponent } from './users/detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    DetailComponent,
    DefaultComponent,
    UserDetailFoldersComponent,
    NotFoundComponent,
    UserDetailGroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ].concat(MaterialModules),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
