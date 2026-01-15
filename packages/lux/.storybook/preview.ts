import type { Preview } from '@storybook/html';
import { defineCustomElements } from '../loader/index.js';

// Define custom elements for Storybook
defineCustomElements();

// Note: custom-elements.json will be loaded automatically if available
// after running the build command

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'keyboard-navigation',
            enabled: true,
          },
        ],
      },
    },
  },
  tags: ['autodocs', 'experimental'],
};

export default preview;
