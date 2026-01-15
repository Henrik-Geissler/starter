import { Component, Prop, State, Element, h } from '@stencil/core';
import { getConfig } from '../../utils/config-scope';
import { density } from '../../design-tokens';

/**
 * @component lux-tabs
 * @experimental
 * 
 * A tabs component for organizing content into multiple panels.
 * 
 * @example
 * ```html
 * <lux-tabs>
 *   <lux-tab label="Tab 1">Content 1</lux-tab>
 *   <lux-tab label="Tab 2">Content 2</lux-tab>
 * </lux-tabs>
 * ```
 * 
 * @slot - Tab elements (lux-tab)
 */
@Component({
  tag: 'lux-tabs',
  styleUrl: 'lux-tabs.scss',
  shadow: false, // No shadow to allow querying child lux-tab elements
})
export class LuxTabs {
  /**
   * Active tab index
   * @experimental
   */
  @Prop({ mutable: true }) activeIndex = 0;

  @State() private tabs: Array<{ label: string }> = [];

  private config = { density: 'comfortable' as const };

  @Element() el!: HTMLElement;

  componentWillLoad() {
    this.updateConfig();
  }

  componentDidLoad() {
    this.collectTabs();
  }

  componentWillUpdate() {
    this.updateConfig();
  }

  componentDidUpdate() {
    this.collectTabs();
  }

  private updateConfig() {
    this.config = getConfig(this.el);
  }

  private collectTabs() {
    // Collect tabs from light DOM (outside shadow)
    const tabElements = Array.from(this.el.querySelectorAll('lux-tab'));
    this.tabs = tabElements.map((tab, index) => {
      const label = (tab as any).label || `Tab ${index + 1}`;
      return { label };
    });
  }

  private handleTabClick = (index: number) => {
    this.activeIndex = index;
  };

  render() {
    const densityConfig = density[this.config.density];
    const tabElements = Array.from(this.el.querySelectorAll('lux-tab'));
    
    return (
      <div
        class="lux-tabs"
        style={{
          '--lux-tabs-padding': densityConfig.spacing.component,
        }}
      >
        <div class="lux-tabs__list" role="tablist">
          {this.tabs.map((tab, index) => (
            <button
              class={{
                'lux-tabs__tab': true,
                'lux-tabs__tab--active': index === this.activeIndex,
              }}
              role="tab"
              aria-selected={index === this.activeIndex}
              aria-controls={`lux-tab-panel-${index}`}
              id={`lux-tab-${index}`}
              onClick={() => this.handleTabClick(index)}
              style={{
                '--lux-tab-padding': densityConfig.spacing.component,
                '--lux-tab-font-size': densityConfig.fontSize,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div class="lux-tabs__panels">
          {tabElements.map((tabElement, index) => (
            <div
              key={index}
              class={{
                'lux-tabs__panel': true,
                'lux-tabs__panel--active': index === this.activeIndex,
              }}
              role="tabpanel"
              aria-labelledby={`lux-tab-${index}`}
              id={`lux-tab-panel-${index}`}
              hidden={index !== this.activeIndex}
            >
              {index === this.activeIndex && (
                <div innerHTML={tabElement.innerHTML} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
