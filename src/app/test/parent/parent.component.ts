import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { MessageService } from './message.service';
import { Vendedor } from './vendedor';

@Component({
  selector: 'app-tienda',
  template: `
    <div class="row">
      <div class="col-md-6">
        <p>parent works!</p>
        <textarea
          [(ngModel)]="message"
          name=""
          id=""
          cols="30"
          rows="3"
          class="form-control"
        ></textarea>

        <button class="btn btn-primary" (click)="sendData()">Send Data</button>
        <button class="btn btn-secondary" (click)="send()">Send</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <app-vendedor
          [vendedor]="vendedor"
          (sent)="onVendedorSent($event)"
        ></app-vendedor>
      </div>
      <div class="col-md-6">
        <app-cliente
          [cliente]="cliente"
          (sent)="onClienteSent($event)"
        ></app-cliente>
      </div>
    </div>
  `,
  styles: [
    `
      button {
        margin-top: 2px;
      }
    `,
  ],
  providers: [MessageService],
})
export class ParentComponent implements OnInit {
  constructor(private messageSrv: MessageService) {}

  cliente: Cliente = {
    name: 'Jane Doe',
    age: 33,
  };

  vendedor: Vendedor = {
    name: 'Juan Pérez',
    age: 31,
  };

  message: string;
  ngOnInit(): void {}
  sendData() {
    this.vendedor.message = this.message;
    this.cliente.message = this.message;
  }

  onClienteSent(msg: string) {
    console.log('message', msg);
    console.log('cliente-msg', this.cliente.message);
    this.message = msg;
  }

  onVendedorSent(msg: string) {
    console.log('message', msg);
    console.log('vendedor-msg', this.vendedor.message);
    this.message = msg;
  }

  send() {
    this.messageSrv.sendMessage(this.message);
  }
}
