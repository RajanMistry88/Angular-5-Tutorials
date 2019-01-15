import { Component } from '@angular/core';
import { GlobalManagerProvider } from '../../providers/GlobalManager.module';
import { HttpClient } from '@angular/common/http';
import { HttpManagerProvider } from '../../providers/HttpManager.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  successMessage: any;
  errorMessage: any;
  validationMessages: any;
  data: any;
  path: any;
  responseData: any;

  productList: any;
  productJsonList: string[];

  constructor(
    public httpClient: HttpClient,
    public http: HttpManagerProvider,
    public global: GlobalManagerProvider,
  ) {
    this.GetProductList();
    this.fnProductList();
    global.fnCheckSession('home');
    console.log('Home constructor called')
  }

  ngOnInit() {
    console.log('Home OnInit method called')
  }

  //Read Data From API
  fnProductList() {
    this.path = '/User/ProductList';
    this.http.GET(this.path).then(data => {
      this.responseData = data;
      if (this.responseData.statusCode == 200) {
        console.log(JSON.stringify(this.responseData.response))
        this.productList = this.responseData.response;
      }
    }, err => {
      this.errorMessage = this.responseData.error.response
    })
  }

  //Read Data from JSON File 
  GetProductList() {
    this.httpClient.get('./assets/Product.json').subscribe(
      data => {
        this.productJsonList = data as string[];	 // FILL THE ARRAY WITH DATA.
        console.log(JSON.stringify(this.productList));
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

}