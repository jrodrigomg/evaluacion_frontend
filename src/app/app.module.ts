import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ClienteItemComponent } from './cliente-item/cliente-item.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ClienteService } from './cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CuerpoComponent,
    ClienteItemComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
