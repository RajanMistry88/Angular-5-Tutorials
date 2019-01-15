import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpManagerProvider {
    loader: any;
    URL: string = "http://localhost:62952/api";

    constructor(
        public http: HttpClient,
    ) {
        console.log('Hello HttpManagerProvider Provider');
    }

    POST(requestmodel, path) {
        if (requestmodel != '' || path != '') {
            return new Promise(resolve => {
                this.http.post(this.URL + path, requestmodel)
                    .subscribe(res => {
                        resolve(res);
                    }, err => {
                        resolve(err);
                    })
            });
        } else {
            console.log('POST request is invalid');
        }
    }

    GET(path) {
        if (path != '') {
            return new Promise(resolve => {
                this.http.get(this.URL + path)
                    .subscribe(res => {
                        resolve(res);
                    }, err => {
                        resolve(err);
                    })
            });
        } else {
            console.log('GET request is invalid');
        }
    }

    PUT(requestmodel, path) {
        if (requestmodel != '' || path != '') {
            return new Promise(resolve => {
                this.http.put(this.URL + path, requestmodel)
                    .subscribe(res => {
                        resolve(res);
                    }, err => {
                        resolve(err);
                    })
            });
        } else {
            console.log('PUT request is invalid');
        }
    }


    DELETE(path) {
        if (path != '') {
            return new Promise(resolve => {
                this.http.delete(this.URL + path)
                    .subscribe(res => {
                        resolve(res);
                    }, err => {
                        resolve(err);
                    })
            });
        } else {
            console.log('DELETE request is invalid');
        }
    }

}