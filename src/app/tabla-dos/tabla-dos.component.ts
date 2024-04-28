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

  recursoHumano2:Array<RRHH> = new Array<RRHH>()
  public masJoven2: number=0

  ngOnInit(): void {
    this.recursoHumano2=rrhh2

  }

}
