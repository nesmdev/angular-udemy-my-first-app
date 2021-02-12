import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import { Vendedor } from '../vendedor';

@Component({
  selector: 'app-vendedor',
  template: `
    <p>vendedor works!</p>
    <p>
      Name:
      <input class="form-control" type="text" [(ngModel)]="vendedor.name" />
      <br />
      Age:
      <input
        class="form-control"
        type="number"
        [(ngModel)]="vendedor.age"
      /><br />
      Message:
      <textarea
        class="form-control"
        [(ngModel)]="vendedor.message"
        name=""
        id=""
        cols="30"
        rows="3"
      ></textarea>
      <button class="btn btn-success" (click)="sendToParent()">
        Send to Parent
      </button>
      <button class="btn btn-secondary" (click)="sendToCliente()">
        Send to Cliente
      </button>
    </p>
  `,
  styles: [``],
  providers: [
    // MessageService
  ],
})
export class VendedorComponent implements OnInit, OnDestroy {
  @Input() vendedor: Vendedor;
  @Output() sent = new EventEmitter<string>();

  subscription: Subscription;

  constructor(private messageSrv: MessageService) {}

  ngOnInit(): void {
    this.subscription = this.messageSrv.message$.subscribe((msg: string) => {
      this.vendedor.message = msg;
    });
  }
  sendToParent() {
    this.sent.emit(this.vendedor.message);
  }

  sendToCliente() {
    this.messageSrv.sendMessage(
      'Mensaje del Vendedor.... ' + this.vendedor.message
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Vendedor destroyed...');
  }
}
