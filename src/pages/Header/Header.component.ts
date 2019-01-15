import { Component } from '@angular/core';
import { GlobalManagerProvider } from '../../providers/GlobalManager.module';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent {

  UserID: any = localStorage.getItem("UserID");
  UserName: any = localStorage.getItem("UserName");

  constructor(
    public global: GlobalManagerProvider,
  ) {
    console.log('Header constructor called')
  }

  ngOnInit() {
    console.log('Header OnInit method called')
  }

  fnLogout() {
    this.global.fnClearSession('login')
  }
}