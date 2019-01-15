import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var swal: any;

@Injectable()
export class GlobalManagerProvider {

    UserID: any;
    constructor(public http: HttpClient, public router: Router, ) {

        console.log('Hello GlobalManagerProvider Provider');
    }


    fnCheckSession(Page) {
        this.UserID = localStorage.getItem("UserID");
        console.log('Session Check: ' + this.UserID)
        if (this.UserID == null) {
            swal({
                title: "Error",
                text: "Session Timeout!",
                icon: "error",
            });
            this.router.navigate(['login']);
            console.log('Sessions')
        } else {
            this.router.navigate([Page]);
        }
    }

    fnClearSession(Page) {
        localStorage.clear();
        this.router.navigate([Page]);
        console.log('Sessions')

    }
}
