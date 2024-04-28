import { Component, OnInit } from '@angular/core';
import { rrhh1 } from './rrhh1';
import { RRHH } from '../rrhh-to';

@Component({
  selector: 'app-tabla-uno',
  templateUrl: './tabla-uno.component.html',
  styleUrls: ['./tabla-uno.component.css']
})
export class TablaUnoComponent implements OnInit {

  constructor() { }

recursoHumano1:Array<RRHH> = []
masJoven1:string=""

  ngOnInit(): void {
    this.recursoHumano1=rrhh1
    const mJoven=this.recursoHumano1.reduce((previous,current)=>{
      return current.edad < previous.edad ? current : previous;
    })

    this.masJoven1=mJoven.nombre+" "+mJoven.apellido
  }

}
