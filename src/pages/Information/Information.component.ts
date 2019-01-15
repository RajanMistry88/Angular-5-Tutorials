import { Component } from '@angular/core';

@Component({
  selector: 'app-Information',
  templateUrl: './Information.component.html',
  styleUrls: ['./Information.component.css']
})
export class InformationComponent {

  constructor(){ 
    console.log('Information constructor called')
  }
  
  ngOnInit(){
    
    console.log('Information OnInit method called')
  }

  
}