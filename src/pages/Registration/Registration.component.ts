import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ValidationManagerProvider } from '../../providers/ValidationManager.module';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
declare var swal: any;

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  successMessage: any;
  errorMessage: any;
  validationMessages: any;
  data: any;
  path: any;
  responseData: any;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public http: HttpManagerProvider,
    public validationModule: ValidationManagerProvider,
  ) {
    console.log('Registration constructor called')
  }

  ngOnInit() {

    this.validationMessages = this.validationModule.validationMessage();
    this.registrationForm = this.formBuilder.group({
      UserName: ['', Validators.compose([Validators.required])],
      MobileNo: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), this.validationModule.mobileNo_check()])],
      EmailAddress: ['', Validators.compose([Validators.required, this.validationModule.email_check()])],
      Address: ['', Validators.required],
      Password: ['', Validators.compose([Validators.required, Validators.minLength(8), this.validationModule.password_check()])],
      ConfirmPassword: ['', Validators.compose([Validators.required, this.validationModule.checkEqual('Password')])]
    })

    console.log('Registration OnInit method called')
  }



  fnregistration() {
    let requestmodel =
    {
      UserName: this.registrationForm.value.UserName,
      EmailAddress: this.registrationForm.value.EmailAddress,
      MobileNo: this.registrationForm.value.MobileNo,
      Password: this.registrationForm.value.Password,
      ConfirmPassword: this.registrationForm.value.ConfirmPassword,
      Address: this.registrationForm.value.Address,
    }
    this.path = '/User/Registration';
    this.http.POST(requestmodel, this.path).then(data => {
      this.responseData = data;
      //this.http.hideLoader();
      if (this.responseData.statusCode == 200) {
        //alert(this.responseData.response)
        this.successMessage = this.responseData.response
        swal("Success", this.responseData.response, "success");
        //swal("Success", "Account Created Successfully", "success");
        this.router.navigate(['login']);
        // this.viewCtrl.dismiss();  
        //  this.http.tost(this.responseData.message);
      } else {
        this.errorMessage = this.responseData.error.response
        //alert(this.responseData.error.response)
        swal({
          title: "Error",
          text: this.responseData.error.response,
          icon: "error",
          button: "Oops!",
        });
      }
    }, err => {
      swal({
        title: "Error",
        text: "Something went wrong!",
        icon: "error",
        button: "OK!",
      });
    })

  }


}