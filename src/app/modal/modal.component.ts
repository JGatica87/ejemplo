import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  usuario = "Juan Pablo";

  showModal(nombre:string){
    Swal.fire({
      title: "SOY UN MODAL",
      text: "Lo lograste "+nombre+"!",
      icon: "success"
    });

  }


  constructor() { }

  ngOnInit(): void {
  }

}
