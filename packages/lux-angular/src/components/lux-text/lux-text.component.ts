/**
 * @fileoverview Angular component wrapper for lux-text
 * @experimental
 */

import { Component, Input } from '@angular/core';

/**
 * @experimental
 */
@Component({
  selector: 'lux-text',
  template: '<lux-text [size]="size" [weight]="weight" [color]="color"><ng-content></ng-content></lux-text>',
  styles: [':host { display: inline; }'],
})
export class LuxTextComponent {
  @Input() size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  @Input() weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  @Input() color?: 'default' | 'muted' | 'primary' | 'error' | 'success';
}
