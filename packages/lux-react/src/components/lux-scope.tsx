/**
 * @fileoverview React wrapper for lux-scope
 * @experimental
 */

import React from 'react';

export interface LuxScopeProps extends React.HTMLAttributes<HTMLLuxScopeElement> {
  density?: 'compact' | 'comfortable' | 'spacious';
  mainColor?: string;
}

/**
 * @experimental
 */
export const LuxScope = React.forwardRef<HTMLLuxScopeElement, LuxScopeProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('lux-scope', { ...props, ref }, children);
  }
);

LuxScope.displayName = 'LuxScope';
