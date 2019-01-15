import { Component } from '@angular/core';
import { HttpManagerProvider } from '../../providers/HttpManager.module';
@Component({
    selector: 'app-Design',
    templateUrl: './Design.component.html',
    styleUrls: ['./Design.component.css']
})
export class DesignComponent {

    successMessage: any;
    errorMessage: any;
    validationMessages: any;
    data: any;
    path: any;
    responseData: any;
    
    constructor(
    ) {
        console.log('Design constructor called')
    }
}