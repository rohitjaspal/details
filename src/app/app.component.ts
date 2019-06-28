import { Component } from '@angular/core';
import {ServiceexampleService} from './serviceexample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elementref';
  value = '';
  cityname = '';

  constructor(private data: ServiceexampleService) {}

  getall() {
    this.data.getdata();
  }
}
