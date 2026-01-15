import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * @experimental
 */
const meta: Meta = {
  title: 'Components/lux-heading',
  component: 'lux-heading',
  tags: ['autodocs', 'experimental'],
};

export default meta;
type Story = StoryObj;

export const Levels: Story = {
  render: () => html`
    <lux-heading level="1">Heading Level 1</lux-heading>
    <lux-heading level="2">Heading Level 2</lux-heading>
    <lux-heading level="3">Heading Level 3</lux-heading>
    <lux-heading level="4">Heading Level 4</lux-heading>
    <lux-heading level="5">Heading Level 5</lux-heading>
    <lux-heading level="6">Heading Level 6</lux-heading>
  `,
};
