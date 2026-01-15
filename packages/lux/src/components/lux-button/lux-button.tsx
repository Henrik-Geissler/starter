import { Component, Prop, Event, EventEmitter, Element, h } from '@stencil/core';
import { getConfig } from '../../utils/config-scope';
import { density } from '../../design-tokens';

/**
 * @component lux-button
 * @experimental
 * 
 * A button component that automatically adapts to density and color settings
 * from the nearest lux-scope ancestor.
 * 
 * @example
 * ```html
 * <lux-button>Click me</lux-button>
 * <lux-button variant="primary">Primary</lux-button>
 * <lux-button variant="secondary" disabled>Disabled</lux-button>
 * ```
 * 
 * @slot - Button content
 */
@Component({
  tag: 'lux-button',
  styleUrl: 'lux-button.scss',
  shadow: true,
})
export class LuxButton {
  /**
   * Button variant
   * @experimental
   */
  @Prop() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';

  /**
   * Disabled state
   * @experimental
   */
  @Prop() disabled = false;

  /**
   * Button type
   * @experimental
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Click event
   * @experimental
   */
  @Event() luxClick: EventEmitter<MouseEvent>;

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

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.luxClick.emit(event);
    }
  };

  render() {
    const densityConfig = density[this.config.density];
    const minHeight = densityConfig.spacing.component;
    
    return (
      <button
        class={{
          'lux-button': true,
          [`lux-button--${this.variant}`]: true,
          'lux-button--disabled': this.disabled,
        }}
        type={this.type}
        disabled={this.disabled}
        onClick={this.handleClick}
        style={{
          '--lux-button-min-height': minHeight,
          '--lux-button-font-size': densityConfig.fontSize,
          '--lux-button-padding': `0 ${densityConfig.spacing.component}`,
        }}
      >
        <slot />
      </button>
    );
  }
}
