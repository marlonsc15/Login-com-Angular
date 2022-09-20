import { HomeComponent } from './../../../components/admin/pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignComponent
  },
  {
    path: 'dashboard',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
