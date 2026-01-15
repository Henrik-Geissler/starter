// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, Element, h } from '@stencil/core';

/**
 * @component lux-table
 * @experimental
 *
 * A data table component built on ag-Grid with custom Lux styling.
 * Requires ag-grid-community (and optionally ag-grid-angular or ag-grid-react)
 * as a peer dependency.
 *
 * This component wraps ag-Grid and applies Lux design tokens for consistent
 * styling across the component library.
 *
 * @example
 * ```html
 * <lux-table
 *   column-defs='[{"field": "name"}, {"field": "age"}]'
 *   row-data='[{"name": "John", "age": 30}]'
 * ></lux-table>
 * ```
 */
@Component({
  tag: 'lux-table',
  styleUrl: 'lux-table.scss',
  shadow: false, // No shadow to allow ag-Grid to work properly
})
export class LuxTable {
  @Element() el!: HTMLElement;

  /**
   * Column definitions as JSON string
   * @experimental
   */
  @Prop() columnDefs?: string;

  /**
   * Row data as JSON string
   * @experimental
   */
  @Prop() rowData?: string;

  /**
   * Grid options as JSON string
   * @experimental
   */
  @Prop() gridOptions?: string;

  private gridApi: {
    setColumnDefs: (defs: unknown[]) => void;
    setRowData: (data: unknown[]) => void;
  } | null = null;

  componentDidLoad() {
    this.initGrid();
  }

  componentDidUpdate() {
    if (this.gridApi) {
      this.updateGrid();
    }
  }

  private async initGrid() {
    try {
      // Dynamically import ag-Grid
      const agGrid = await import('ag-grid-community');

      const columnDefs = this.columnDefs ? JSON.parse(this.columnDefs) : [];
      const rowData = this.rowData ? JSON.parse(this.rowData) : [];
      const gridOptions = this.gridOptions ? JSON.parse(this.gridOptions) : {};

      const gridDiv = this.el.querySelector('.lux-table__grid');
      if (!gridDiv) return;

      const gridOptionsWithDefaults = {
        columnDefs,
        rowData,
        defaultColDef: {
          sortable: true,
          filter: true,
          resizable: true,
        },
        ...gridOptions,
        onGridReady: (params: {
          api: {
            setColumnDefs: (defs: unknown[]) => void;
            setRowData: (data: unknown[]) => void;
          };
        }) => {
          this.gridApi = params.api;
          if (gridOptions.onGridReady) {
            gridOptions.onGridReady(params);
          }
        },
      };

      new agGrid.Grid(gridDiv as HTMLElement, gridOptionsWithDefaults);
    } catch (error) {
      console.error(
        'Failed to initialize ag-Grid. Make sure ag-grid-community is installed as a peer dependency.',
        error
      );
    }
  }

  private updateGrid() {
    if (!this.gridApi) return;

    if (this.columnDefs) {
      this.gridApi.setColumnDefs(JSON.parse(this.columnDefs));
    }
    if (this.rowData) {
      this.gridApi.setRowData(JSON.parse(this.rowData));
    }
  }

  render() {
    return (
      <div class="lux-table">
        <div class="lux-table__grid"></div>
      </div>
    );
  }
}
