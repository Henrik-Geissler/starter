import { Component, Prop, Element, h } from '@stencil/core';
import type { Density } from '../../utils/config-scope';

/**
 * @component lux-scope
 * @experimental
 *
 * A configuration scoping component that applies density and color settings
 * to all descendant Lux components via CSS custom properties.
 *
 * This component does not render any visual element, but provides configuration
 * context through the DOM hierarchy.
 *
 * @example
 * ```html
 * <lux-scope density="compact" main-color="#ff0000">
 *   <lux-button>Button</lux-button>
 *   <lux-card>Card content</lux-card>
 * </lux-scope>
 * ```
 */
@Component({
  tag: 'lux-scope',
  styleUrl: 'lux-scope.scss',
  shadow: false, // No shadow DOM to allow CSS custom properties to cascade
})
export class LuxScope {
  @Element() el!: HTMLElement;

  /**
   * Density setting for child components
   * @experimental
   */
  @Prop() density?: Density;

  /**
   * Main color for child components
   * @experimental
   */
  @Prop() mainColor?: string;

  componentWillLoad() {
    this.updateCSSProperties();
  }

  componentWillUpdate() {
    this.updateCSSProperties();
  }

  private updateCSSProperties() {
    if (this.density) {
      this.el.style.setProperty('--lux-density', this.density);
    }

    if (this.mainColor) {
      this.el.style.setProperty('--lux-main-color', this.mainColor);
    }
  }

  render() {
    return (
      <div
        style={{
          '--lux-density': this.density || 'var(--lux-density, comfortable)',
          '--lux-main-color':
            this.mainColor || 'var(--lux-main-color, var(--lux-color-primary-500))',
        }}
      >
        <slot />
      </div>
    );
  }
}
