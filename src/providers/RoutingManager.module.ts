import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Component List
import { InformationComponent } from '../pages/Information/Information.component';
import { ContactComponent } from '../pages/Contact/Contact.component';
import { AboutComponent } from '../pages/About/About.component';
import { DocsComponent } from '../pages/Docs/Docs.component';
import { DesignComponent } from '../pages/Design/Design.component';
import { HomeComponent } from '../pages/Home/Home.component';
import { RegistrationComponent } from '../pages/Registration/Registration.component';
import { LoginComponent } from '../pages/Login/Login.component';
import { ForgotPasswordComponent } from '../pages/ForgotPassword/ForgotPassword.component';
import { ProfileActivationComponent } from '../pages/ProfileActivation/ProfileActivation.component';
import { ProfileComponent } from '../pages/Profile/Profile.component';
import { ChangePasswordComponent } from '../pages/ChangePassword/ChangePassword.component';
import { NewPasswordComponent } from '../pages/NewPassword/NewPassword.component';
import { AccountComponent } from '../pages/Account/Account.component';

export const routes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'designing', component: DesignComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'activeprofile', component: ProfileActivationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'newpassword/:id', component: NewPasswordComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingManagerModule {

  constructor() {
  }
}  