import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ValidationManagerProvider } from '../../providers/ValidationManager.module';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
declare var swal: any;

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  successMessage: any;
  errorMessage: any;
  validationMessages: any;
  data: any;
  path: any;
  responseData: any;
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public validationModule: ValidationManagerProvider,
    public http: HttpManagerProvider,
  ) {
    console.log('Login constructor called')
  }

  ngOnInit() {
    this.validationMessages = this.validationModule.validationMessage();
    this.loginForm = this.formBuilder.group({
      MobileNumber: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), this.validationModule.mobileNo_check()])],
      Password: ['', Validators.required]
    })
    console.log('Login OnInit method called');
  }

  fnlogin() {
    let requestmodel =
    {
      MobileNo: this.loginForm.value.MobileNumber,
      Password: this.loginForm.value.Password,
    }
    this.path = '/User/Login';
    console.log(JSON.stringify(requestmodel));
    this.http.POST(requestmodel, this.path).then(data => {
      this.responseData = data;
      //this.http.hideLoader();
      if (this.responseData.statusCode == 200) {
        console.log('final' + JSON.stringify(this.responseData.response))
        localStorage.setItem("UserID", this.responseData.response.UserID)
        localStorage.setItem("UserName", this.responseData.response.UserName);
        swal("Success", "You have Login Successfully", "success");
        this.successMessage = this.responseData.response
        this.router.navigate(['home']);
        // this.viewCtrl.dismiss();  
        //  this.http.tost(this.responseData.message);
      } else {
        this.errorMessage = this.responseData.error.response
        //alert(this.responseData.Error.response)
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