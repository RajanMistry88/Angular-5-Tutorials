import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: []
})
export class ValidationManagerProvider {

    account_validation_messages: any;

    constructor() {
        console.log('Validation Manager Provider');
    }

    mobileNo_check(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            var re = new RegExp("^[6-9][0-9]{9}$");
            let input = control.value;
            let isValid = re.test(input);
            if (!isValid)
                return { 'pattern': { isValid } }
            else
                return null;
        };
    }

    email_check(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            var re = new RegExp("^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
            let input = control.value;
            let isValid = re.test(input);
            if (!isValid)
                return { 'pattern': { isValid } }
            else
                return null;
        };
    }

    password_check(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
            //var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*0-9)(?=.*[$@$!%*?&])[A-Za-z0-9$@$!%*?&]{8}");
            let input = control.value;
            let isValid = re.test(input);
            if (!isValid)
                return { 'pattern': { isValid } }
            else
                return null;
        };
    }

    checkNotequal(field_name): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          let input = control.value;
          let isValid = control.root.value[field_name] != input
          if (!isValid)
            return { 'pattern': { isValid } }
          else
            return null;
        };
      }
      
      checkEqual(field_name): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          let input = control.value;
          let isValid = control.root.value[field_name] == input
          if (!isValid)
            return { 'pattern': { isValid } }
          else
            return null;
        };
      }

    number_check(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            var re = new RegExp("^(\d+)$");
            let input = control.value;
            let isValid = re.test(input);
            if (!isValid)
                return { 'pattern': { isValid } }
            else
                return null;
        };
    }

    URL_check(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            var re = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
            let input = control.value;
            let isValid = re.test(input);
            if (!isValid)
                return { 'pattern': { isValid } }
            else
                return null;
        };
    }


    validationMessage() {
        this.account_validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters' },
                { type: 'validUsername', message: 'Username has already been taken' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' },
                { type: 'validEmail', message: 'Email has already been taken' }
            ],
            'mobile_number': [
                { type: 'required', message: 'Mobile Number is required' },
                { type: 'pattern', message: 'Enter a valid Mobile Number' },
                { type: 'minlength', message: 'Mobile Number must be at least 10 digit long' },
                { type: 'maxlength', message: 'Mobile Number must be at least 10 digit long' },
                { type: 'validEmail', message: 'Mobile Number has already been taken' }
            ],
            'address': [
                { type: 'required', message: 'Address is required' },
                { type: 'pattern', message: 'Enter a valid Mobile Number' },
                { type: 'minlength', message: 'Address must be at least 10 characters long' },
                { type: 'maxlength', message: 'Address must be at least 500 characters long' },
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'pattern', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 8 characters long' },
                { type: 'pattern', message: 'Password must contain: Minimum 8 characters atleast 1 UpperCase Alphabet, 1 LowerCase Alphabet, 1 Number and 1 Special Character' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions' }
            ]
        }
        return this.account_validation_messages;
    }
}

