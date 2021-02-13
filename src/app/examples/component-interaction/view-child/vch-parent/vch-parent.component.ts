import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VchChildComponent } from './vch-child/vch-child.component';

@Component({
  selector: 'app-vch-parent',
  template: `
    <p>vch-parent works!</p>
    <input
      type="text"
      #message
      (change)="sendMessage()"
      class="form-control"
      placeholder="Write message..."
    />
    <button class="btn btn-primary" (click)="count()">Count!!</button>
    <hr />
    <app-vch-child></app-vch-child>
  `,
  styles: [],
})
export class VchParentComponent implements OnInit {
  @ViewChild(VchChildComponent, { static: false })
  private childComponent: VchChildComponent;

  @ViewChild('message', { static: false })
  private messageRef: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  count() {
    this.childComponent.count();
  }
  sendMessage() {
    const message = this.messageRef.nativeElement.value;
    this.childComponent.getMessage(message);
  }
}

/**
  * In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

Instead of:

@ViewChild('serverContentInput') serverContentInput: ElementRef;
use

@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.
  */

/**
 * 5 -> 12. @ViewChild() in Angular 8+.html
 */
