import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

@Input("nombre") name:string="";
@Input("apellido") lastname:string="";
@Input("edad") age:number=0;

  constructor() { }

  ngOnInit() {
  }


showModal(){
  Swal.fire({
    title: "Te llamas: "+this.name+" "+this.lastname,
    text: "Tu edad es: "+this.age,
    icon: "success"
  });

}


}
