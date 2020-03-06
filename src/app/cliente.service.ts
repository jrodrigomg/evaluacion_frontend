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
    return this.http.get('http://192.168.0.49:1638/api/Cliente');
  }
  crearCliente(cliente)
  {
    return this.http.post('http://192.168.0.49:1638/api/Cliente',cliente);
  }
  editarCliente(cliente)
  {
    return this.http.put('http://192.168.0.49:1638/api/Cliente/'+cliente.id,cliente);
  }
  deleteCliente(clienteId)
  {
    return this.http.delete('http://192.168.0.49:1638/api/Cliente/'+clienteId);
  }
}
