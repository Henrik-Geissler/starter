import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * @experimental
 */
const meta: Meta = {
  title: 'Components/lux-text',
  component: 'lux-text',
  tags: ['autodocs', 'experimental'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<lux-text>Default text</lux-text>`,
};

export const Sizes: Story = {
  render: () => html`
    <lux-text size="xs">Extra small text</lux-text><br>
    <lux-text size="sm">Small text</lux-text><br>
    <lux-text size="base">Base text</lux-text><br>
    <lux-text size="lg">Large text</lux-text><br>
    <lux-text size="xl">Extra large text</lux-text>
  `,
};

export const Weights: Story = {
  render: () => html`
    <lux-text weight="normal">Normal weight</lux-text><br>
    <lux-text weight="medium">Medium weight</lux-text><br>
    <lux-text weight="semibold">Semibold weight</lux-text><br>
    <lux-text weight="bold">Bold weight</lux-text>
  `,
};

export const Colors: Story = {
  render: () => html`
    <lux-text color="default">Default color</lux-text><br>
    <lux-text color="muted">Muted color</lux-text><br>
    <lux-text color="primary">Primary color</lux-text><br>
    <lux-text color="error">Error color</lux-text><br>
    <lux-text color="success">Success color</lux-text>
  `,
};
