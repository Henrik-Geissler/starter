/**
 * @fileoverview Angular module for Lux components
 * @experimental
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Lux components
import { defineCustomElements } from '@lux/components/loader';

// Define custom elements
defineCustomElements();

/**
 * @experimental
 */
@NgModule({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class LuxModule {
  constructor() {
    // Module initialization
  }
}
