/**
 * @fileoverview Angular component wrapper for lux-scope
 * @experimental
 */

import { Component, Input } from '@angular/core';

/**
 * @experimental
 */
@Component({
  selector: 'lux-scope',
  template:
    '<lux-scope [density]="density" [mainColor]="mainColor"><ng-content></ng-content></lux-scope>',
  styles: [':host { display: contents; }'],
})
export class LuxScopeComponent {
  @Input() density?: 'compact' | 'comfortable' | 'spacious';
  @Input() mainColor?: string;
}
