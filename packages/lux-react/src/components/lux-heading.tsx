/**
 * @fileoverview React wrapper for lux-heading
 * @experimental
 */

import React from 'react';

export interface LuxHeadingProps extends React.HTMLAttributes<HTMLLuxHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * @experimental
 */
export const LuxHeading = React.forwardRef<HTMLLuxHeadingElement, LuxHeadingProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('lux-heading', { ...props, ref }, children);
  }
);

LuxHeading.displayName = 'LuxHeading';
