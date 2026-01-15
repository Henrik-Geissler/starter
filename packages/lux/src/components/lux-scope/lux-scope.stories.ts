import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * @experimental
 */
const meta: Meta = {
  title: 'Components/lux-scope',
  component: 'lux-scope',
  tags: ['autodocs', 'experimental'],
  parameters: {
    docs: {
      description: {
        component: 'A configuration scoping component that applies density and color settings to all descendant Lux components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Compact: Story = {
  render: () => html`
    <lux-scope density="compact">
      <lux-button>Compact Button</lux-button>
      <lux-card>
        <lux-text>Compact card content</lux-text>
      </lux-card>
    </lux-scope>
  `,
};

export const Spacious: Story = {
  render: () => html`
    <lux-scope density="spacious">
      <lux-button>Spacious Button</lux-button>
      <lux-card>
        <lux-text>Spacious card content</lux-text>
      </lux-card>
    </lux-scope>
  `,
};

export const CustomColor: Story = {
  render: () => html`
    <lux-scope main-color="#ff0000">
      <lux-button>Red Button</lux-button>
      <lux-text color="primary">Red text</lux-text>
    </lux-scope>
  `,
};
