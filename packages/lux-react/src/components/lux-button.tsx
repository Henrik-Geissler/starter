/**
 * @fileoverview React wrapper for lux-button
 * @experimental
 */

import React from 'react';

export interface LuxButtonProps extends React.HTMLAttributes<HTMLLuxButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: CustomEvent<MouseEvent>) => void;
}

/**
 * @experimental
 */
export const LuxButton = React.forwardRef<HTMLLuxButtonElement, LuxButtonProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('lux-button', { ...props, ref }, children);
  }
);

LuxButton.displayName = 'LuxButton';
