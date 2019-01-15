import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ValidationManagerProvider } from '../../providers/ValidationManager.module';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
declare var swal: any;

@Component({
  selector: 'app-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordForm: FormGroup;
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
    console.log('ForgotPassword constructor called')
  }

  ngOnInit() {
    this.validationMessages = this.validationModule.validationMessage();
    this.forgotpasswordForm = this.formBuilder.group({
      MobileNo: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), this.validationModule.mobileNo_check()])],
    })
    // Validation Message take from Global Message list
    // let msg = this.validationModule.validationMessage();
    // console.log('ValidationData: '+JSON.stringify(msg))


    console.log('ForgotPassword OnInit method called')
  }

  fnforgotpassword() {
    let requestmodel =
    {
      MobileNo: this.forgotpasswordForm.value.MobileNo,
    }
    this.path = "/User/ForgotPassword"
    this.http.POST(requestmodel, this.path).then(data => {
      this.responseData = data;
      //this.http.hideLoader();
      if (this.responseData.statusCode == 200) {

        this.router.navigate(['newpassword', this.responseData.response]);

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

    })

  }
}