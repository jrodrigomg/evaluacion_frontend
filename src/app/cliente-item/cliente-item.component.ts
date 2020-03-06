import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import {Cliente} from '../models/cliente'

@Component({
  selector: '[app-cliente-item]',
  templateUrl: './cliente-item.component.html',
  styleUrls: ['./cliente-item.component.css']
})
export class ClienteItemComponent implements OnInit {
  @Input('app-cliente-item') cliente:Cliente;
  @Output("setCliente") setCliente: EventEmitter<any> = new EventEmitter();
  @Output("deleteCliente") deleteCliente: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editCliente()
  {
    this.setCliente.emit(this.cliente);
  }

  removeCliente()
  {
    this.deleteCliente.emit(this.cliente.id);
  }

}
