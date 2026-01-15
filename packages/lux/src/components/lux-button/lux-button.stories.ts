import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * @experimental
 */
const meta: Meta = {
  title: 'Components/lux-button',
  component: 'lux-button',
  tags: ['autodocs', 'experimental'],
  parameters: {
    docs: {
      description: {
        component:
          'A button component that automatically adapts to density and color settings from the nearest lux-scope ancestor.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Button variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: args => html`
    <lux-button
      variant=${args.variant || 'primary'}
      ?disabled=${args.disabled}
      type=${args.type || 'button'}
    >
      Button
    </lux-button>
  `,
  args: {
    variant: 'primary',
    disabled: false,
    type: 'button',
  },
};

export const Secondary: Story = {
  render: () => html`<lux-button variant="secondary">Secondary</lux-button>`,
};

export const Outline: Story = {
  render: () => html`<lux-button variant="outline">Outline</lux-button>`,
};

export const Ghost: Story = {
  render: () => html`<lux-button variant="ghost">Ghost</lux-button>`,
};

export const Disabled: Story = {
  render: () => html`<lux-button disabled>Disabled</lux-button>`,
};

export const WithScope: Story = {
  render: () => html`
    <lux-scope density="compact" main-color="#ff0000">
      <lux-button>Compact Red Button</lux-button>
    </lux-scope>
  `,
};
