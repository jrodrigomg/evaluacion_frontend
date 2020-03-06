import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(protected http: HttpClient) { 
  }

  getClientes()
  {
    return this.http.get('http://localhost:3000/clientes');
  }
  crearCliente(cliente)
  {
    return this.http.post('http://localhost:3000/clientes',cliente);
  }
  editarCliente(cliente)
  {
    return this.http.put('http://localhost:3000/clientes/'+cliente.id,cliente);
  }
  deleteCliente(clienteId)
  {
    return this.http.delete('http://localhost:3000/clientes/'+clienteId);
  }
}
