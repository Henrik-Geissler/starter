import { Component, Prop, h } from '@stencil/core';

/**
 * @component lux-tab
 * @experimental
 * 
 * A single tab panel for use within lux-tabs.
 * 
 * @example
 * ```html
 * <lux-tab label="Settings">Tab content</lux-tab>
 * ```
 * 
 * @slot - Tab panel content
 */
@Component({
  tag: 'lux-tab',
  styleUrl: 'lux-tab.scss',
  shadow: true,
})
export class LuxTab {
  /**
   * Tab label
   * @experimental
   */
  @Prop() label!: string;

  render() {
    return (
      <div class="lux-tab">
        <slot />
      </div>
    );
  }
}
