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
    selector: 'app-Account',
    templateUrl: './Account.component.html',
    styleUrls: ['./Account.component.css']
})
export class AccountComponent {

    successMessage: any;
    errorMessage: any;
    validationMessages: any;
    data: any;
    path: any;
    responseData: any;
    UserID: any = localStorage.getItem('UserID');

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public http: HttpManagerProvider,
        public validationModule: ValidationManagerProvider,
        public global: GlobalManagerProvider,
    ) {
        global.fnCheckSession('account');
        console.log('Account constructor called')
    }

    // toggleTitle() {
    //     swal("Success", "You have Login Successfully", "success");
    //     $('.title').slideToggle();
    // }


    fnDeactivateAccount() {
        swal({
            icon: "warning",
            title: "Are you sure?",
            text: "You want to Deactivate Your Account.",
            buttons: {
                cancel: {
                    text: "Cancel",
                    visible: true,
                    handler: () => {

                    }
                },
                confirm: {
                    text: "Yes",
                    handler: () => {
                        this.fnDelete()
                    }
                }
            }
        });
    }

    fnDeleteAccount() {
        swal({
            icon: "warning",
            title: "Are you sure?",
            text: "You want to Delete Your Account.",
            buttons: {
                cancel: {
                    text: "Cancel",
                    visible: true,
                    handler: () => {

                    }
                },
                confirm: {
                    text: "Yes",
                    handler: () => {
                        this.fnDelete()
                    }
                }
            }
        });
    }


    fnDeactivateProfile() {
        this.path = '/User/DeactivateAccount/' + this.UserID;
        this.http.GET(this.path).then(data => {
            //this.http.hideLoader();
            this.responseData = data;
            if (this.responseData.statusCode == 200) {
                swal({
                    title: "Success",
                    text: this.responseData.response,
                    icon: "success",
                });
                this.successMessage = this.responseData.response;
                this.global.fnClearSession('login');
            }
        }, err => {
            swal({
                title: "Error",
                text: this.responseData.error.response,
                icon: "error",
            });
        })
    }



    fnDeleteProfile() {
        //ActivateAccount
        this.path = '/User/DeleteAccount/' + this.UserID;
        this.http.DELETE(this.path).then(data => {
            //this.http.hideLoader();
            this.responseData = data;
            if (this.responseData.statusCode == 200) {
                swal({
                    title: "Success",
                    text: this.responseData.response,
                    icon: "success",
                    button: "Oops!",
                });
                this.successMessage = this.responseData.response
                this.global.fnClearSession('login');

            }
        }, err => {
            swal({
                title: "Error",
                text: this.responseData.error.response,
                icon: "error",
                button: "Oops!",
            });
        })
    }

    fnDelete() {
        return confirm('Are you sure you want to Delete your Account? It will Delete Your Recode From the DataBase.')

    }
}
