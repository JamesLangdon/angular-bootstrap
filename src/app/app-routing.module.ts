import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MedicalDetailComponent } from './pages/medical-detail/medical-detail.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'medical', component: MedicalDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
