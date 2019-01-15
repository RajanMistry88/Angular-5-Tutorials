import { Component } from '@angular/core';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent {

  constructor(){ 
    console.log('Contact constructor called')
  }
  
  ngOnInit(){
    console.log('Contact OnInit method called')
  }
}