import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jquery: any;
declare var swal: any;
declare var $: any;

@Component({
    selector: 'app-Docs',
    templateUrl: './Docs.component.html',
    styleUrls: ['./Docs.component.css']
})
export class DocsComponent {

    title: string;
    city: string;
    currentTime: string;
    modelProperty: string;
    showStatus: boolean;
    cities: string[];
    isPrimary: boolean;
    today: Date;
    productJsonList: any;

    constructor(public httpClient: HttpClient,
    ) {
        this.title = 'Angular-5';
        this.city = 'Gujarat';
        this.showCurrentTime();
        this.modelProperty = 'Initial Value ';
        this.showStatus = true;
        this.cities = ['Gujarat', 'Mumbai', 'Pune'];
        this.isPrimary = false;
        this.today = new Date();
        console.log('Docs constructor called')
    }

    ngOnInit() {
        console.log('Docs Initialized');
        this.fnJsonList();
    }

    //Get Data from JSON List
    fnJsonList() {
        this.httpClient.get('./assets/Product.json').subscribe(
            data => {
                this.productJsonList = data as string[];	 // FILL THE ARRAY WITH DATA.
                console.log(JSON.stringify(this.productJsonList));
            },
            (err) => {
                console.log(err.message);
            });
    }

    //Get CurrentTime 
    showCurrentTime() {
        this.currentTime = new Date().toLocaleTimeString();
    }

    //Show Hide Toggle
    toggleStatus() {
        this.showStatus = !this.showStatus;
    }

    //JQuery
    Jquerytoggle() {
        $('.title').slideToggle();
    }

    //Sweet Alert
    SweetAlertSuccess(){
        swal("Success", "Your Success Message", "success");
    }

    SweetAlertError(){
        swal("Error", "Your Error Message", "error");
    }

    SweetAlertWarning(){
        swal("Warning", "Your Warning Message", "warning");
    }
}