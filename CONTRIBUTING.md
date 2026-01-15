# Contributing to Lux

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Build the library:

```bash
npm run build
```

3. Run Storybook:

```bash
npm run storybook
```

## Component Development

### Creating a New Component

1. Create component directory: `packages/lux/src/components/lux-my-component/`
2. Create component files:

   - `lux-my-component.tsx` - Component logic
   - `lux-my-component.scss` - Component styles
   - `lux-my-component.stories.ts` - Storybook stories

3. Add to `packages/lux/src/index.ts`

4. Update React and Angular wrappers

### Design Principles

- **SSOT (Single Source of Truth)**: Design tokens are the source of truth
- **Config Scoping**: Use `lux-scope` for density/color, not props
- **Touch-Friendly**: All interactive elements meet 44px minimum touch target
- **Accessibility**: WCAG AA compliant by default
- **No Framework-Specific Code**: Components work in any framework

### Testing

- Unit tests: `npm test`
- E2E tests: `npm run test:e2e`
- Accessibility: `npm run test:a11y`
- Screenshots: `npm run test:screenshot` (review changes before committing)

## Code Style

- Strict TypeScript
- JSDoc for all public APIs
- Mark everything as `@experimental`
- ESLint for web component standards
- SCSS for styling

## Experimental Status

All components are marked as experimental and subject to change.
