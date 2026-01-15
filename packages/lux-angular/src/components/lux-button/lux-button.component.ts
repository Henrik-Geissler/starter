/**
 * @fileoverview Angular component wrapper for lux-button
 * @experimental
 */

import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

/**
 * @experimental
 */
@Component({
  selector: 'lux-button',
  template:
    '<lux-button [variant]="variant" [disabled]="disabled" [type]="type" (luxClick)="onClick.emit($event)"><ng-content></ng-content></lux-button>',
  styles: [':host { display: inline-block; }'],
})
export class LuxButtonComponent {
  @Input() variant?: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() onClick = new EventEmitter<CustomEvent<MouseEvent>>();

  constructor(private elementRef: ElementRef) {}
}
