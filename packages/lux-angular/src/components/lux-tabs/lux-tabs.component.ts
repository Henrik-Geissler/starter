/**
 * @fileoverview Angular component wrappers for lux-tabs
 * @experimental
 */

import { Component, Input } from '@angular/core';

/**
 * @experimental
 */
@Component({
  selector: 'lux-tabs',
  template: '<lux-tabs [activeIndex]="activeIndex"><ng-content></ng-content></lux-tabs>',
  styles: [':host { display: block; }'],
})
export class LuxTabsComponent {
  @Input() activeIndex = 0;
}

/**
 * @experimental
 */
@Component({
  selector: 'lux-tab',
  template: '<lux-tab [label]="label"><ng-content></ng-content></lux-tab>',
  styles: [':host { display: block; }'],
})
export class LuxTabComponent {
  @Input() label!: string;
}
