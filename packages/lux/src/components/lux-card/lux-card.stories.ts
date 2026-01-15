import { Meta, StoryObj } from '@storybook/web-components';

/**
 * @experimental
 */
const meta: Meta = {
  title: 'Components/lux-card',
  component: 'lux-card',
  tags: ['autodocs', 'experimental'],
  parameters: {
    docs: {
      description: {
        component: 'A card component for displaying content in a contained area.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <lux-card>
      <lux-heading level="3">Card Title</lux-heading>
      <lux-text>Card content goes here</lux-text>
    </lux-card>
  `,
};

export const Outlined: Story = {
  render: () => `
    <lux-card variant="outlined">
      <lux-heading level="3">Outlined Card</lux-heading>
      <lux-text>This card has an outline border.</lux-text>
    </lux-card>
  `,
};

export const Elevated: Story = {
  render: () => `
    <lux-card variant="elevated">
      <lux-heading level="3">Elevated Card</lux-heading>
      <lux-text>This card has an elevated shadow.</lux-text>
    </lux-card>
  `,
};

export const WithSlots: Story = {
  render: () => `
    <lux-card>
      <lux-heading level="3" slot="header">Card Header</lux-heading>
      <lux-text>Card body content</lux-text>
      <lux-button slot="footer">Action</lux-button>
    </lux-card>
  `,
};
