import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultAge = 10;

  tabla:boolean=true

  fun1="active"
  fun2=""

handleCambio(opc:boolean)
{
this.tabla=opc
if(opc==true)
  {
    this.fun1="active"
    this.fun2=""
  }
  else
  {
    this.fun2="active"
    this.fun1=""
  }
}

}
