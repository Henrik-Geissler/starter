/**
 * @fileoverview React wrapper for lux-data-table
 * @experimental
 */

import React from 'react';

export interface LuxDataTableProps extends React.HTMLAttributes<HTMLLuxDataTableElement> {
  columnDefs?: string;
  rowData?: string;
  gridOptions?: string;
}

/**
 * @experimental
 */
export const LuxDataTable = React.forwardRef<HTMLLuxDataTableElement, LuxDataTableProps>(
  ({ ...props }, ref) => {
    return React.createElement('lux-data-table', { ...props, ref });
  }
);

LuxDataTable.displayName = 'LuxDataTable';
