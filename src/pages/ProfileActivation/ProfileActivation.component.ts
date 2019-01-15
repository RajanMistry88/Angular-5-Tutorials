import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ValidationManagerProvider } from '../../providers/ValidationManager.module';
import { GlobalManagerProvider } from '../../providers/GlobalManager.module';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
declare var jquery: any;
declare var swal: any;
declare var $: any;

@Component({
    selector: 'app-ProfileActivation',
    templateUrl: './ProfileActivation.component.html',
    styleUrls: ['./ProfileActivation.component.css']
})
export class ProfileActivationComponent implements OnInit {

    mobilenoForm: FormGroup
    passwordForm: FormGroup
    successMessage: any;
    errorMessage: any;
    validationMessages: any;

    data: any;
    path: any;
    responseData: any;
    Password: any;
    UserID: any = localStorage.getItem('UserID');

    ShowForm: any = "MobileVerify";

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public http: HttpManagerProvider,
        public validationModule: ValidationManagerProvider,
        public global: GlobalManagerProvider,
    ) {
        console.log('ProfileActivation constructor called')
    }

    ngOnInit() {
        this.validationMessages = this.validationModule.validationMessage();
        this.mobilenoForm = this.formBuilder.group({
            MobileNo: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), this.validationModule.mobileNo_check()])],
        })

        this.passwordForm = this.formBuilder.group({
            Password: ['', Validators.required],
        })

    }



    fnProfileActive() {
        console.log(this.ShowForm)
        let requestmodel =
        {
            UserID: this.UserID,
            Action: this.ShowForm,
            MobileNo: this.mobilenoForm.value.MobileNo,
            Password: this.passwordForm.value.Password
        }

        this.path = "/User/ActivateAccount"
        this.http.POST(requestmodel, this.path).then(data => {
            this.responseData = data;
            if (this.responseData.statusCode == 200) {
                if (this.ShowForm == "MobileVerify") {
                    this.UserID = this.responseData.response;
                    this.ShowForm = "PasswordVerify"
                } else {
                    this.successMessage = this.responseData.response;
                    swal("Sucess", this.responseData.response, "success")
                    this.router.navigate(['login']);
                }
            } else {
                this.errorMessage = this.responseData.error.response;
                swal("Error", this.responseData.error.response, "error")
                //alert(this.responseData.error.response)
            }
        }, err => {
            this.errorMessage = this.responseData.error.response;
        })

    }
}