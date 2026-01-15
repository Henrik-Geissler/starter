import type { StorybookConfig } from '@storybook/html-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
