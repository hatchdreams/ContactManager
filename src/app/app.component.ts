import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contact Manager';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://my.api.mockaroo.com/customers.json?key=03c46990').subscribe({
      next: response => console.log(response),
      error: error=> console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statement');
      }
    })
  }
}
