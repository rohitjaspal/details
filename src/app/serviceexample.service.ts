import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ServiceexampleService {
  datas: any;

  constructor(private http: HttpClient) { }

getdata() {
const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
console.log('hello');
this.http.get('https://daymet.ornl.gov/single-pixel/api/data', {headers}).subscribe(
      ((res) => {
        // this.datas = JSON.parse(JSON.stringify(res));
        // console.log(this.datas);
        console.log(res);
      })
    );
  }
}
