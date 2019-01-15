import { Component } from '@angular/core';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent {

  constructor(){ 
    console.log('About constructor called')
  }
  
  ngOnInit(){
    console.log('About OnInit method called')
  }
}