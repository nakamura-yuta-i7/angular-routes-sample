import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DefaultComponent } from './users/detail/default.component';
import { UserDetailFoldersComponent } from './users/detail/user-detail-folders.component';
import { NotFoundComponent } from './not-found.component';
import { UserDetailGroupsComponent } from './users/detail/user-detail-groups.component';
import { UsersComponent } from './users/users.component';
import { DetailComponent } from './users/detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: 'detail/:id', component: DetailComponent, children: [
      { path: '', redirectTo: "default", pathMatch: 'full' },
      { path: 'default', component: DefaultComponent },
      { path: 'folders', component: UserDetailFoldersComponent },
      { path: 'groups', component: UserDetailGroupsComponent },
    ] },
  ] },
  
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
