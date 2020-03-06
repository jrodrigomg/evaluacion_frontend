import { Component, OnInit, ViewChild } from '@angular/core';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente';
import { CreateClientComponent } from '../create-client/create-client.component';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],

})
export class TablaComponent implements OnInit {
  clientes = [
    {
      id:1,
      nombre:"Rodrigo Mérida",
      cui:"222302828282",
      url_imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTZ3pNAOXUwViziImFeDWVaikrc7HXxprS3Fpd4WYucuoJWscN"
    },
    {
      id:2,
      nombre:"Carlos Salguero",
      cui:"232928282828",
      url_imagen:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/07/elon-musk.jpg?itok=8tWjadE3"
    },
  ]
  CONST_ACCION_CREAR = 1;
  selectedCliente=new Cliente();

  @ViewChild(CreateClientComponent) child:CreateClientComponent;
  constructor(protected clienteService: ClienteService) { 
   
  }

  ngOnInit(): void {
    this.getClientes();
  }

  crearCliente()
  {
    this.child.inicializar(new Cliente(),1);
  }

  setCliente(cliente:any)
  {
    this.selectedCliente = cliente;
    this.child.inicializar(cliente,2);
  }

  getClientes()
  {
    this.clienteService.getClientes()
    .subscribe(
      (data:any) => { // Success
        this.clientes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCliente(clienteId)
  {
    this.clienteService.deleteCliente(clienteId)
    .subscribe(
      (data:any) => { // Success
        this.getClientes();
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
