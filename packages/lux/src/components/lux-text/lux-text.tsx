import { Component, Prop, Element, h } from '@stencil/core';
import { getConfig, Density } from '../../utils/config-scope';
import { density } from '../../design-tokens';

/**
 * @component lux-text
 * @experimental
 *
 * A text component that displays text content with automatic density adaptation.
 *
 * @example
 * ```html
 * <lux-text>Regular text</lux-text>
 * <lux-text size="lg" weight="bold">Large bold text</lux-text>
 * ```
 *
 * @slot - Text content
 */
@Component({
  tag: 'lux-text',
  styleUrl: 'lux-text.scss',
  shadow: true,
})
export class LuxText {
  /**
   * Text size
   * @experimental
   */
  @Prop() size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';

  /**
   * Font weight
   * @experimental
   */
  @Prop() weight?: 'normal' | 'medium' | 'semibold' | 'bold';

  /**
   * Text color variant
   * @experimental
   */
  @Prop() color?: 'default' | 'muted' | 'primary' | 'error' | 'success';

  @Element() el!: HTMLElement;

  private config: { density: Density } = { density: 'comfortable' };

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
    const fontSize = this.size ? `var(--lux-font-size-${this.size})` : densityConfig.fontSize;

    return (
      <span
        class={{
          'lux-text': true,
          [`lux-text--${this.size || 'base'}`]: true,
          [`lux-text--${this.weight || 'normal'}`]: true,
          [`lux-text--${this.color || 'default'}`]: true,
        }}
        style={{
          '--lux-text-font-size': fontSize,
        }}
      >
        <slot />
      </span>
    );
  }
}
