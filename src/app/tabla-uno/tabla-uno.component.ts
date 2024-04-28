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

  public recursoHumano1:Array<RRHH> = new Array<RRHH>()
  public masJoven1: number=0

  ngOnInit(): void {
    this.recursoHumano1=rrhh1

  }

}
