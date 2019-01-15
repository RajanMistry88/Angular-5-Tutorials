import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
// Service Provider List  
import { GlobalManagerProvider } from '../providers/GlobalManager.module';
import { HttpManagerProvider } from '../providers/HttpManager.module';
import { RoutingManagerModule } from '../providers/RoutingManager.module';
import { ValidationManagerProvider } from '../providers/ValidationManager.module';
// Components List
import { AppComponent } from './app.component';
import { HeaderComponent } from '../pages/Header/Header.component';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingManagerModule,
  ],
  //All Your angular pages Component Declare here
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    ContactComponent,
    AboutComponent,
    DocsComponent,
    DesignComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProfileActivationComponent,
    ProfileComponent,
    ChangePasswordComponent,
    NewPasswordComponent,
    AccountComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GlobalManagerProvider,
    HttpManagerProvider,
    ValidationManagerProvider,
  ]
})
export class AppModule { }
