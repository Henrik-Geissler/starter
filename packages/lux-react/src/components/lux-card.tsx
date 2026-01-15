/**
 * @fileoverview React wrapper for lux-card
 * @experimental
 */

import React from 'react';

export interface LuxCardProps extends React.HTMLAttributes<HTMLLuxCardElement> {
  variant?: 'default' | 'outlined' | 'elevated';
}

/**
 * @experimental
 */
export const LuxCard = React.forwardRef<HTMLLuxCardElement, LuxCardProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('lux-card', { ...props, ref }, children);
  }
);

LuxCard.displayName = 'LuxCard';
