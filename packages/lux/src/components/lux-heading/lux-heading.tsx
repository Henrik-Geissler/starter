import { Component, Prop, Element, h } from '@stencil/core';

/**
 * @component lux-heading
 * @experimental
 *
 * A heading component with semantic HTML and automatic styling.
 *
 * @example
 * ```html
 * <lux-heading level="1">Main Heading</lux-heading>
 * <lux-heading level="2">Subheading</lux-heading>
 * ```
 *
 * @slot - Heading content
 */
@Component({
  tag: 'lux-heading',
  styleUrl: 'lux-heading.scss',
  shadow: true,
})
export class LuxHeading {
  /**
   * Heading level (1-6)
   * @experimental
   */
  @Prop() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  @Element() el!: HTMLElement;

  render() {
    const Tag = `h${this.level}` as keyof JSX.IntrinsicElements;

    return (
      <Tag
        class={{
          'lux-heading': true,
          [`lux-heading--level-${this.level}`]: true,
        }}
      >
        <slot />
      </Tag>
    );
  }
}
