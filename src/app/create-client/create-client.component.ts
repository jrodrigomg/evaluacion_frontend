import { Component, OnInit , Output, EventEmitter,Input} from '@angular/core';
import { Cliente } from '../models/cliente';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  cliente:Cliente = new Cliente();
  @Output("getClientes") getClientes: EventEmitter<any> = new EventEmitter();
  accion = 1;
  constructor(protected clienteService: ClienteService) {
   
   }

  ngOnInit(): void
  {
  }

  inicializar(cliente,accion)
  {
    this.cliente = cliente;
    this.accion = accion;
  }

  MyInit()
  {
    this.accion = 1;
    this.cliente= new Cliente();
  }

  crearCliente()
  {
    if(this.accion===1)
    {
      this.clienteService.crearCliente(this.cliente)
      .subscribe(
        (data:any) => { // Success
          this.getClientes.emit();
        },
        (error) => {
          console.error(error);
        }
      );
    }else
    {
      this.clienteService.editarCliente(this.cliente)
      .subscribe(
        (data:any) => { // Success
          this.getClientes.emit();
        },
        (error) => {
          console.error(error);
        }
      );
    }
    this.MyInit();
  }


}
