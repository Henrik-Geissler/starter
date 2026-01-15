/**
 * @fileoverview Configuration scoping utilities
 * @experimental
 * 
 * Provides utilities for reading config values from the DOM hierarchy
 * without prop drilling. Components read from CSS custom properties
 * set by lux-scope components.
 */

/**
 * Density options
 * @experimental
 */
export type Density = 'compact' | 'comfortable' | 'spacious';

/**
 * Configuration context interface
 * @experimental
 */
export interface LuxConfig {
  density?: Density;
  mainColor?: string;
}

/**
 * Get the effective density from the closest lux-scope ancestor
 * @param element - The element to get config for
 * @returns The density value or 'comfortable' as default
 * @experimental
 */
export function getDensity(element: HTMLElement): Density {
  const scope = element.closest('lux-scope');
  if (scope) {
    const densityAttr = scope.getAttribute('density');
    if (densityAttr && ['compact', 'comfortable', 'spacious'].includes(densityAttr)) {
      return densityAttr as Density;
    }
  }
  
  // Fallback to CSS custom property or default
  const computed = getComputedStyle(element);
  const densityValue = computed.getPropertyValue('--lux-density').trim();
  if (densityValue && ['compact', 'comfortable', 'spacious'].includes(densityValue)) {
    return densityValue as Density;
  }
  
  return 'comfortable';
}

/**
 * Get the effective main color from the closest lux-scope ancestor
 * @param element - The element to get config for
 * @returns The main color value or default primary color
 * @experimental
 */
export function getMainColor(element: HTMLElement): string {
  const scope = element.closest('lux-scope');
  if (scope) {
    const colorAttr = scope.getAttribute('main-color');
    if (colorAttr) {
      return colorAttr;
    }
  }
  
  // Fallback to CSS custom property or default
  const computed = getComputedStyle(element);
  const colorValue = computed.getPropertyValue('--lux-main-color').trim();
  return colorValue || 'var(--lux-color-primary-500)';
}

/**
 * Get all config values from the closest lux-scope ancestor
 * @param element - The element to get config for
 * @returns The configuration object
 * @experimental
 */
export function getConfig(element: HTMLElement): LuxConfig {
  return {
    density: getDensity(element),
    mainColor: getMainColor(element),
  };
}
