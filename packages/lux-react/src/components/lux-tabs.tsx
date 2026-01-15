/**
 * @fileoverview React wrappers for lux-tabs
 * @experimental
 */

import React from 'react';

export interface LuxTabsProps extends React.HTMLAttributes<HTMLLuxTabsElement> {
  activeIndex?: number;
}

export interface LuxTabProps extends React.HTMLAttributes<HTMLLuxTabElement> {
  label: string;
}

/**
 * @experimental
 */
export const LuxTabs = React.forwardRef<HTMLLuxTabsElement, LuxTabsProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('lux-tabs', { ...props, ref }, children);
  }
);

LuxTabs.displayName = 'LuxTabs';

/**
 * @experimental
 */
export const LuxTab = React.forwardRef<HTMLLuxTabElement, LuxTabProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('lux-tab', { ...props, ref }, children);
  }
);

LuxTab.displayName = 'LuxTab';
