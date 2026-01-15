# @lux/components

**🚧 Experimental** - All components in this library are experimental and subject to change.

A Stencil-based component library with design tokens, config scoping, and comprehensive testing.

## Features

- **Design Tokens**: Hardcoded Figma-style design tokens as code
- **Config Scoping**: Use `<lux-scope>` to apply density and color settings to all child components
- **Framework Agnostic**: Works with React, Angular, Vue, or vanilla JavaScript
- **TypeScript**: Strict TypeScript with comprehensive JSDoc
- **Tree-Shakable**: Modular exports for optimal bundle size

## Installation

```bash
npm install @lux/components
```

## Usage

### Basic Example

```html
<lux-scope density="comfortable" main-color="#0ea5e9">
  <lux-button>Click me</lux-button>
  <lux-card>
    <lux-heading level="3">Card Title</lux-heading>
    <lux-text>Card content</lux-text>
  </lux-card>
</lux-scope>
```

### React

```tsx
import { defineCustomElements } from '@lux/components/loader';
import { LuxButton, LuxCard, LuxScope } from '@lux/components/react';

// Register custom elements
defineCustomElements();

function App() {
  return (
    <LuxScope density="comfortable" mainColor="#0ea5e9">
      <LuxButton>Click me</LuxButton>
      <LuxCard>Content</LuxCard>
    </LuxScope>
  );
}
```

### Angular

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LuxModule } from '@lux/components/angular';

@NgModule({
  imports: [LuxModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // ...
})
```

## Components

- `lux-button` - Button component with variants
- `lux-text` - Text component with size and weight options
- `lux-heading` - Semantic heading component
- `lux-card` - Card container component
- `lux-tabs` - Tabs component with `lux-tab` children
- `lux-scope` - Configuration scoping component
- `lux-table` - Data table built on ag-Grid (requires peer dependency)
- `lux-icon` - Icon component with Font Awesome (requires peer dependency)

## Config Scoping

The `lux-scope` component allows you to set density and color for all child components without prop drilling:

```html
<lux-scope density="compact" main-color="#ff0000">
  <lux-button>Compact Red Button</lux-button>
  <lux-card>Card inherits compact density and red color</lux-card>
</lux-scope>
```

## Design Tokens

Design tokens are available as TypeScript exports:

```typescript
import { colors, spacing, typography, density } from '@lux/components';
```

## Development

```bash
npm run build
npm run test
npm run storybook
```

## Testing

- Unit tests: `npm test`
