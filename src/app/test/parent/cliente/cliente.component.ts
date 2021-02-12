import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Cliente } from '../cliente';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cliente',
  template: `
    <p>cliente works!</p>
    <p>
      Name:
      <input class="form-control" type="text" [(ngModel)]="cliente.name" />
      <br />
      Age:
      <input
        class="form-control"
        type="number"
        [(ngModel)]="cliente.age"
      /><br />
      Message:
      <textarea
        class="form-control"
        [(ngModel)]="cliente.message"
        name=""
        id=""
        cols="30"
        rows="3"
      ></textarea>
      <button class="btn btn-success" (click)="sendToParent()">
        Send to Parent
      </button>
      <button class="btn btn-secondary" (click)="sendToVendedor()">
        Send to Vendedor
      </button>
    </p>
  `,
  styles: [],
  providers: [
    // MessageService
  ],
})
export class ClienteComponent implements OnInit, OnDestroy {
  @Input() cliente: Cliente;
  @Output() sent = new EventEmitter<string>();
  subscription: Subscription;

  constructor(private messageSrv: MessageService) {
    this.subscription = this.messageSrv.message$.subscribe((msg) => {
      this.cliente.message = msg;
      // console.log('Cliente recibió mensaje... ' + msg);
    });
  }

  ngOnInit(): void {}
  sendToParent() {
    this.sent.emit(this.cliente.message);
  }

  sendToVendedor() {
    this.messageSrv.sendMessage(
      'Mensaje del cliente... ' + this.cliente.message
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Clinte destroyed...');
  }
}
