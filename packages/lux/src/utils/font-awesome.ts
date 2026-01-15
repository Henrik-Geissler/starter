/**
 * @fileoverview Font Awesome integration with tree-shaking support
 * @experimental
 * 
 * This utility provides tree-shakable Font Awesome icon imports.
 * Consumers should import only the icons they need.
 */

/**
 * Icon name type
 * @experimental
 */
export type IconName = string;

/**
 * Load a Font Awesome icon dynamically
 * @param iconName - Name of the icon (e.g., 'fa-check', 'fa-user')
 * @returns Promise that resolves when icon is loaded
 * @experimental
 */
export async function loadIcon(iconName: IconName): Promise<void> {
  // In a real implementation, this would dynamically import the specific icon
  // For now, this is a placeholder that shows the pattern
  try {
    // Dynamic import pattern for tree-shaking
    const iconModule = await import(`@fortawesome/fontawesome-free/svgs/${iconName}.svg`);
    return iconModule;
  } catch (error) {
    console.warn(`Failed to load icon: ${iconName}`, error);
  }
}

/**
 * Preload common icons
 * @param iconNames - Array of icon names to preload
 * @experimental
 */
export async function preloadIcons(iconNames: IconName[]): Promise<void> {
  await Promise.all(iconNames.map(loadIcon));
}
