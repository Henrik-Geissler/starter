import { Component, Prop, Element, h, State } from '@stencil/core';

/**
 * @component lux-icon
 * @experimental
 * 
 * An icon component that uses Font Awesome icons with tree-shaking support.
 * 
 * @example
 * ```html
 * <lux-icon name="check"></lux-icon>
 * <lux-icon name="user" size="lg"></lux-icon>
 * ```
 */
@Component({
  tag: 'lux-icon',
  styleUrl: 'lux-icon.scss',
  shadow: true,
})
export class LuxIcon {
  @Element() el!: HTMLElement;

  /**
   * Icon name (Font Awesome icon name without 'fa-' prefix)
   * @experimental
   */
  @Prop() name!: string;

  /**
   * Icon size
   * @experimental
   */
  @Prop() size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

  @State() private iconSvg?: string;

  async componentWillLoad() {
    await this.loadIcon();
  }

  private async loadIcon() {
    try {
      // In production, this would use the tree-shakable Font Awesome loader
      // For now, we'll use a placeholder approach
      const iconPath = `@fortawesome/fontawesome-free/svgs/${this.name}.svg`;
      // This is a placeholder - actual implementation would load the SVG
      this.iconSvg = `<svg><use href="#fa-${this.name}"></use></svg>`;
    } catch (error) {
      console.warn(`Failed to load icon: ${this.name}`, error);
    }
  }

  render() {
    return (
      <span
        class={{
          'lux-icon': true,
          [`lux-icon--${this.size || 'base'}`]: true,
        }}
        innerHTML={this.iconSvg}
        aria-hidden="true"
      />
    );
  }
}
