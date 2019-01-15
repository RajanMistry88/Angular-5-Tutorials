import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ValidationManagerProvider } from '../../providers/ValidationManager.module';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
import { GlobalManagerProvider } from '../../providers/GlobalManager.module';
declare var swal: any;


@Component({
    selector: 'app-ChangePassword',
    templateUrl: './ChangePassword.component.html',
    styleUrls: ['./ChangePassword.component.css']
})
export class ChangePasswordComponent implements OnInit {

    changepasswordForm: FormGroup;
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
        public global: GlobalManagerProvider,
    ) {
        // global.fnCheckSession('changepassword');
        console.log('ChangePassword constructor called')
    }

    ngOnInit() {
        this.validationMessages = this.validationModule.validationMessage();
        this.changepasswordForm = this.formBuilder.group({
            OldPassword: ['', Validators.compose([Validators.required])],
            NewPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), this.validationModule.password_check()])],
            ConfirmPassword: ['', Validators.compose([Validators.required, this.validationModule.checkEqual('NewPassword')])]
        })


    }

    fnchangepassword() {
        let requestmodel =
        {
            UserID: localStorage.getItem("UserID"),
            OldPassword: this.changepasswordForm.value.OldPassword,
            NewPassword: this.changepasswordForm.value.NewPassword,
            ConfirmPassword: this.changepasswordForm.value.ConfirmPassword,
        }
        this.path = '/User/ChangePassword';
        this.http.POST(requestmodel, this.path).then(data => {
            this.responseData = data;
            if (this.responseData.statusCode == 200) {
                //alert(this.responseData.response)
                swal('Success', this.responseData.response, 'success');
                this.successMessage = this.responseData.response
                this.global.fnClearSession('about')
                console.log('change ' + JSON.stringify(this.responseData.response))
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
