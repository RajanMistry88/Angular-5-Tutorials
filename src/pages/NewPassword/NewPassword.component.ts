import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ValidationManagerProvider } from '../../providers/ValidationManager.module';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
declare var swal: any;

@Component({
    selector: 'app-NewPassword',
    templateUrl: './NewPassword.component.html',
    styleUrls: ['./NewPassword.component.css']
})
export class NewPasswordComponent implements OnInit {

    newpasswordForm: FormGroup;
    successMessage: any;
    errorMessage: any;
    validationMessages: any;
    data: any;
    path: any;
    responseData: any;
    UserID: any;
    routedata: any;
    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        private activatedRoute: ActivatedRoute,
        public validationModule: ValidationManagerProvider,
        public http: HttpManagerProvider,
    ) {
        this.fnVerify()
    }

    ngOnInit() {
        this.validationMessages = this.validationModule.validationMessage();
        this.newpasswordForm = this.formBuilder.group({
            NewPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), this.validationModule.password_check()])],
            ConfirmPassword: ['', Validators.compose([Validators.required, this.validationModule.checkEqual('NewPassword')])]
        })
        console.log('Login OnInit method called');
    }


    fnVerify() {
        this.activatedRoute.params.subscribe(params => { this.UserID = params['id']; });
        console.log('id' + this.UserID)
        if (this.UserID == 0) {
            this.router.navigate(['forgotpassword']);
        }
    }


    fnCreateNewPassword() {
        let requestmodel =
        {
            UserID: this.UserID,
            NewPassword: this.newpasswordForm.value.NewPassword,
            ConfirmPassword: this.newpasswordForm.value.ConfirmPassword,
        }
        console.log(JSON.stringify(requestmodel))
        this.path = '/User/CreateNewPassword';
        this.http.POST(requestmodel, this.path).then(data => {
            this.responseData = data;
            if (this.responseData.statusCode == 200) {
                this.successMessage = this.responseData.response
                swal('Success', this.responseData.response, 'success');
                this.router.navigate(['login']);
            } else {
                this.errorMessage = this.responseData.error.response
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