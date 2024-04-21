import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultAge = 10;

  getPrint(event:string)
  {
    console.log(event)
  }

}
