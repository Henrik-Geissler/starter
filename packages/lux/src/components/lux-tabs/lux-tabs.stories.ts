import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * @experimental
 */
const meta: Meta = {
  title: 'Components/lux-tabs',
  component: 'lux-tabs',
  tags: ['autodocs', 'experimental'],
  parameters: {
    docs: {
      description: {
        component: 'A tabs component for organizing content into multiple panels.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <lux-tabs>
      <lux-tab label="Tab 1">
        <lux-text>Content for tab 1</lux-text>
      </lux-tab>
      <lux-tab label="Tab 2">
        <lux-text>Content for tab 2</lux-text>
      </lux-tab>
      <lux-tab label="Tab 3">
        <lux-text>Content for tab 3</lux-text>
      </lux-tab>
    </lux-tabs>
  `,
};
