/**
 * @fileoverview Angular component wrapper for lux-card
 * @experimental
 */

import { Component, Input } from '@angular/core';

/**
 * @experimental
 */
@Component({
  selector: 'lux-card',
  template: `
    <lux-card [variant]="variant">
      <div slot="header"><ng-content select="[slot=header]"></ng-content></div>
      <ng-content></ng-content>
      <div slot="footer"><ng-content select="[slot=footer]"></ng-content></div>
    </lux-card>
  `,
  styles: [':host { display: block; }'],
})
export class LuxCardComponent {
  @Input() variant?: 'default' | 'outlined' | 'elevated';
}
