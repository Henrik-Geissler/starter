/**
 * @fileoverview React wrapper for lux-text
 * @experimental
 */

import React from 'react';

export interface LuxTextProps extends React.HTMLAttributes<HTMLLuxTextElement> {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'primary' | 'error' | 'success';
}

/**
 * @experimental
 */
export const LuxText = React.forwardRef<HTMLLuxTextElement, LuxTextProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('lux-text', { ...props, ref }, children);
  }
);

LuxText.displayName = 'LuxText';
