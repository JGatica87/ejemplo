import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

@Input("nombre") name:string="";
@Input("apellido") lastname:string="";
@Input("edad") age:number=0;

@Output() print = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

//Funcion onPrint
onPrint(event:any)
{
this.print.emit("Hola")
}


}
