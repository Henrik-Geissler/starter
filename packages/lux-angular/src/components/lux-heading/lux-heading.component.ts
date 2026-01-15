/**
 * @fileoverview Angular component wrapper for lux-heading
 * @experimental
 */

import { Component, Input } from '@angular/core';

/**
 * @experimental
 */
@Component({
  selector: 'lux-heading',
  template: '<lux-heading [level]="level"><ng-content></ng-content></lux-heading>',
  styles: [':host { display: block; }'],
})
export class LuxHeadingComponent {
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
}
