import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ValidationManagerProvider } from '../../providers/ValidationManager.module';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
import { GlobalManagerProvider } from '../../providers/GlobalManager.module';
declare var swal: any;

@Component({
    selector: 'app-Profile',
    templateUrl: './Profile.component.html',
    styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    successMessage: any;
    errorMessage: any;
    validationMessages: any;
    data: any;
    path: any;
    responseData: any;
    UserID: any;

    // profileForms: any = {
    //     UserName: null,
    //     EmailAddress: null,
    //     MobileNo: null,
    //     Address: null
    // }

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public http: HttpManagerProvider,
        public validationModule: ValidationManagerProvider,
        public global: GlobalManagerProvider,
    ) {
        global.fnCheckSession('profile');
        this.UserID = localStorage.getItem('UserID');
        if (this.UserID != null) {
            this.fuGetProfile();
        }

        this.validationMessages = this.validationModule.validationMessage();
        //  if(this.profileForm != null){
        // this.profileForm = this.formBuilder.group({
        //     UserName: ['', Validators.compose([Validators.required])],
        //     MobileNo: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), this.validationModule.mobileNo_check()])],
        //     EmailAddress: ['', Validators.compose([Validators.required, this.validationModule.email_check()])],
        //     Address: ['', Validators.required],
        // })
        //}
        console.log('Profile constructor called')
    }


    ngOnInit() {
        this.profileForm = this.formBuilder.group({
            UserName: [this.data.UserName, Validators.compose([Validators.required])],
            MobileNo: [this.data.MobileNo, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), this.validationModule.mobileNo_check()])],
            EmailAddress: [this.data.EmailAddress, Validators.compose([Validators.required, this.validationModule.email_check()])],
            Address: [this.data.Address, Validators.required],
        })
        console.log('Profile OnInit method called')
    }


    fuGetProfile() {
        this.path = '/User/ProfileInfo/' + this.UserID;
        this.http.GET(this.path).then(data => {
            //this.http.hideLoader();
            this.responseData = data;
            if (this.responseData.statusCode == 200) {
                this.UserID = this.responseData.response.UserID;
                this.profileForm = this.formBuilder.group({
                    UserName: [this.responseData.response.UserName, Validators.compose([Validators.required,])],
                    MobileNo: [this.responseData.response.MobileNo, Validators.compose([Validators.required])],
                    EmailAddress: [this.responseData.response.EmailAddress, Validators.compose([Validators.required])],
                    Address: [this.responseData.response.Address, Validators.compose([Validators.required])],
                });
                ////Other way to add value
                // this.profileForm= this.responseData.response;
                // this.profileForm.value.UserName = this.responseData.response.UserName;
                // this.profileForm.value.MobileNo = this.responseData.response.MobileNo;
                // this.profileForm.value.EmailAddress = this.responseData.response.EmailAddress;
                // this.profileForm.value.Address = this.responseData.response.Address;
            }
        }, err => {

        })

    }

    fnProfileUpdate() {

        let requestmodel =
        {
            UserID: this.UserID,
            UserName: this.profileForm.value.UserName,
            EmailAddress: this.profileForm.value.EmailAddress,
            MobileNo: this.profileForm.value.MobileNo,
            Address: this.profileForm.value.Address,
        }
        console.log(JSON.stringify(requestmodel));
        this.path = '/User/ProfileInfo';
        this.http.PUT(requestmodel, this.path).then(data => {
            this.responseData = data;
            //this.http.hideLoader();
            if (this.responseData.statusCode == 200) {
                //alert(this.responseData.response)
                this.successMessage = this.responseData.response;
                swal("Success", this.responseData.response, "success");
                //swal("Success", "Profile Details Updated Successfully", "success");
            } else {
                this.errorMessage = this.responseData.error.response;
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