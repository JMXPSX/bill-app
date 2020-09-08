import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent } from './views/login/login.component';
// import { DashboardComponent } from './views/dashboard/dashboard.component';
// import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component'
// import { LogoutComponent } from './views/logout/logout.component';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const itemsModule = () => import('./items/items.module').then(x => x.ItemsModule);
const clerksModule = () => import('./clerks/clerks.module').then(x => x.ClerksModule);
const billsModule = () => import('./bill/bills.module').then(x => x.BillsModule);

// const routes: Routes = [
  
//   {path: '', component: LoginComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'dashboard', component: DashboardComponent},
//   {path: 'employees', component: EmployeeCrudComponent},
//   {path: 'logout', component: LogoutComponent},

// ];

const routes: Routes = [
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'items', loadChildren: itemsModule, canActivate: [AuthGuard] },
  { path: 'clerks', loadChildren: clerksModule, canActivate: [AuthGuard] },
  { path: 'bills', loadChildren: billsModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  //otherwise rdirect to home
  { path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
