import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Year = (new Date()).getFullYear();
  Page: any;
  
  constructor(elem: ElementRef, private router: Router) {
    this.Page = elem.nativeElement.tagName.toLowerCase();
    console.log(this.Page)
    localStorage.clear();
    this.PageLoad();
    console.log('App component constructor Call')
  }

  PageLoad() {
    if (this.Page == 'app-root') {
      console.log(this.Page)
      setTimeout(() => {
        this.router.navigate(['information']);
      }, 1000);  //5s
    }
  }

}
