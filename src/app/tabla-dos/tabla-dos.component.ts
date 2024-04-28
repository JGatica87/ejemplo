import { Component, OnInit } from '@angular/core';
import { rrhh2 } from './rrhh2';
import { RRHH } from '../rrhh-to';

@Component({
  selector: 'app-tabla-dos',
  templateUrl: './tabla-dos.component.html',
  styleUrls: ['./tabla-dos.component.css']
})
export class TablaDosComponent implements OnInit {


  constructor() { }

  recursoHumano2:Array<RRHH> = []
  masJoven2:string=""

  ngOnInit(): void {
    this.recursoHumano2=rrhh2
    const mJoven=this.recursoHumano2.reduce((previous,current)=>{
      return current.edad < previous.edad ? current : previous;
    })

this.masJoven2=mJoven.nombre+" "+mJoven.apellido

  }

}
