import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * @experimental
 */
const meta: Meta = {
  title: 'Components/lux-table',
  component: 'lux-table',
  tags: ['autodocs', 'experimental'],
  parameters: {
    docs: {
      description: {
        component: `
# Getting Started

The \`lux-table\` component is a powerful data table built on top of ag-Grid with custom Lux styling. It provides a consistent, accessible, and feature-rich table experience that integrates seamlessly with the Lux design system.

## Installation

Before using \`lux-table\`, you need to install ag-Grid as a peer dependency:

\`\`\`bash
npm install ag-grid-community
\`\`\`

For framework-specific integrations, you may also need:
- \`ag-grid-react\` for React applications
- \`ag-grid-angular\` for Angular applications

## Basic Usage

The component accepts column definitions and row data as JSON strings:

\`\`\`html
<lux-table
  column-defs='[{"field": "name", "headerName": "Name"}, {"field": "age", "headerName": "Age"}]'
  row-data='[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]'
></lux-table>
\`\`\`

## Properties

- **column-defs**: JSON string defining table columns
- **row-data**: JSON string containing the data rows
- **grid-options**: Optional JSON string for advanced ag-Grid configuration

## Integration with lux-scope

The table automatically inherits density and color settings from parent \`lux-scope\` components:

\`\`\`html
<lux-scope density="compact" main-color="#0ea5e9">
  <lux-table
    column-defs='[{"field": "name"}]'
    row-data='[{"name": "John"}]'
  ></lux-table>
</lux-scope>
\`\`\`

---

# Design Konzepts

## Design Philosophy

The \`lux-table\` component follows Lux design principles to provide a consistent, accessible, and performant data table experience. It combines the power of ag-Grid with Lux design tokens for seamless integration.

## Design Tokens Integration

The component uses Lux design tokens for all styling:

- **Typography**: Inherits from \`--lux-font-family-sans\` and \`--lux-font-size-base\`
- **Colors**: Uses Lux color palette for borders, backgrounds, and text
- **Spacing**: Follows Lux spacing scale for consistent padding and margins
- **Border Radius**: Uses \`--lux-border-radius-base\` for rounded corners

## Accessibility

The component is built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support for navigation and interaction
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Clear focus indicators for keyboard users

## Responsive Design

The table is fully responsive and adapts to different screen sizes:

- **Mobile**: Optimized touch interactions and scrollable tables
- **Tablet**: Balanced layout with appropriate column widths
- **Desktop**: Full feature set with optimal space utilization

## Performance Considerations

- **Virtual Scrolling**: Handles large datasets efficiently
- **Lazy Loading**: Supports server-side data loading
- **Tree Shaking**: Only includes necessary ag-Grid features
- **Dynamic Imports**: ag-Grid is loaded asynchronously to reduce initial bundle size

## Styling Customization

While the component uses Lux design tokens by default, you can customize the appearance:

- **CSS Custom Properties**: Override Lux tokens for specific use cases
- **ag-Grid Themes**: Compatible with ag-Grid theme system
- **Scoped Styling**: Use \`lux-scope\` for contextual styling

## Data Handling

The component supports various data patterns:

- **Static Data**: Pass data directly via \`row-data\` attribute
- **Dynamic Updates**: Update \`row-data\` to refresh table content
- **Server-Side**: Integrate with backend APIs using \`grid-options\`
- **Real-time**: Support for live data updates

## Best Practices

1. **Column Definitions**: Define clear, semantic column headers
2. **Data Format**: Ensure data matches column field names
3. **Performance**: Use pagination or virtual scrolling for large datasets
4. **Accessibility**: Always provide meaningful column headers
5. **Responsive**: Test table behavior on different screen sizes
        `,
      },
    },
  },
  argTypes: {
    columnDefs: {
      control: 'text',
      description: 'Column definitions as JSON string',
    },
    rowData: {
      control: 'text',
      description: 'Row data as JSON string',
    },
    gridOptions: {
      control: 'text',
      description: 'Grid options as JSON string',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => html`
    <lux-table
      column-defs='[
        {"field": "name", "headerName": "Name", "sortable": true, "filter": true},
        {"field": "age", "headerName": "Age", "sortable": true, "filter": true},
        {"field": "email", "headerName": "Email", "sortable": true, "filter": true}
      ]'
      row-data='[
        {"name": "John Doe", "age": 30, "email": "john@example.com"},
        {"name": "Jane Smith", "age": 25, "email": "jane@example.com"},
        {"name": "Bob Johnson", "age": 35, "email": "bob@example.com"}
      ]'
    ></lux-table>
  `,
};

export const WithCustomOptions: Story = {
  render: () => html`
    <lux-table
      column-defs='[
        {"field": "product", "headerName": "Product"},
        {"field": "price", "headerName": "Price", "type": "numericColumn"},
        {"field": "stock", "headerName": "Stock", "type": "numericColumn"}
      ]'
      row-data='[
        {"product": "Widget A", "price": 19.99, "stock": 100},
        {"product": "Widget B", "price": 29.99, "stock": 50},
        {"product": "Widget C", "price": 39.99, "stock": 25}
      ]'
      grid-options='{
        "pagination": true,
        "paginationPageSize": 10,
        "rowSelection": "multiple"
      }'
    ></lux-table>
  `,
};

export const WithScope: Story = {
  render: () => html`
    <lux-scope density="compact" main-color="#0ea5e9">
      <lux-table
        column-defs='[
          {"field": "id", "headerName": "ID"},
          {"field": "name", "headerName": "Name"},
          {"field": "status", "headerName": "Status"}
        ]'
        row-data='[
          {"id": 1, "name": "Item 1", "status": "Active"},
          {"id": 2, "name": "Item 2", "status": "Inactive"},
          {"id": 3, "name": "Item 3", "status": "Active"}
        ]'
      ></lux-table>
    </lux-scope>
  `,
};

export const EmptyState: Story = {
  render: () => html`
    <lux-table
      column-defs='[
        {"field": "name", "headerName": "Name"},
        {"field": "value", "headerName": "Value"}
      ]'
      row-data='[]'
    ></lux-table>
  `,
};
