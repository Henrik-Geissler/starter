/**
 * @fileoverview Angular component wrapper for lux-data-table
 * @experimental
 */

import { Component, Input } from '@angular/core';

/**
 * @experimental
 */
@Component({
  selector: 'lux-data-table',
  template: '<lux-data-table [columnDefs]="columnDefs" [rowData]="rowData" [gridOptions]="gridOptions"></lux-data-table>',
  styles: [':host { display: block; }'],
})
export class LuxDataTableComponent {
  @Input() columnDefs?: string;
  @Input() rowData?: string;
  @Input() gridOptions?: string;
}
