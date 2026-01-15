import { Component, Prop, Element, h } from '@stencil/core';
import { getConfig } from '../../utils/config-scope';
import { density } from '../../design-tokens';

/**
 * @component lux-card
 * @experimental
 * 
 * A card component for displaying content in a contained area.
 * 
 * @example
 * ```html
 * <lux-card>
 *   <lux-heading level="3">Card Title</lux-heading>
 *   <lux-text>Card content goes here</lux-text>
 * </lux-card>
 * ```
 * 
 * @slot - Card content
 * @slot header - Optional header content
 * @slot footer - Optional footer content
 */
@Component({
  tag: 'lux-card',
  styleUrl: 'lux-card.scss',
  shadow: true,
})
export class LuxCard {
  /**
   * Card variant
   * @experimental
   */
  @Prop() variant?: 'default' | 'outlined' | 'elevated';

  @Element() el!: HTMLElement;

  private config = { density: 'comfortable' as const };

  componentWillLoad() {
    this.updateConfig();
  }

  componentWillUpdate() {
    this.updateConfig();
  }

  private updateConfig() {
    this.config = getConfig(this.el);
  }

  render() {
    const densityConfig = density[this.config.density];
    
    return (
      <div
        class={{
          'lux-card': true,
          [`lux-card--${this.variant || 'default'}`]: true,
        }}
        style={{
          '--lux-card-padding': densityConfig.spacing.container,
        }}
      >
        <div class="lux-card__header">
          <slot name="header" />
        </div>
        <div class="lux-card__content">
          <slot />
        </div>
        <div class="lux-card__footer">
          <slot name="footer" />
        </div>
      </div>
    );
  }
}
