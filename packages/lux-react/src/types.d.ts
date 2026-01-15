/**
 * @fileoverview TypeScript declarations for Lux custom elements
 * @experimental
 */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lux-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxButtonElement>, HTMLLuxButtonElement>;
      'lux-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxTextElement>, HTMLLuxTextElement>;
      'lux-heading': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxHeadingElement>, HTMLLuxHeadingElement>;
      'lux-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxCardElement>, HTMLLuxCardElement>;
      'lux-tabs': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxTabsElement>, HTMLLuxTabsElement>;
      'lux-tab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxTabElement>, HTMLLuxTabElement>;
      'lux-scope': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxScopeElement>, HTMLLuxScopeElement>;
      'lux-data-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLLuxDataTableElement>, HTMLLuxDataTableElement>;
    }
  }
}

export interface HTMLLuxButtonElement extends HTMLElement {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface HTMLLuxTextElement extends HTMLElement {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'primary' | 'error' | 'success';
}

export interface HTMLLuxHeadingElement extends HTMLElement {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface HTMLLuxCardElement extends HTMLElement {
  variant?: 'default' | 'outlined' | 'elevated';
}

export interface HTMLLuxTabsElement extends HTMLElement {
  activeIndex?: number;
}

export interface HTMLLuxTabElement extends HTMLElement {
  label?: string;
}

export interface HTMLLuxScopeElement extends HTMLElement {
  density?: 'compact' | 'comfortable' | 'spacious';
  mainColor?: string;
}

export interface HTMLLuxDataTableElement extends HTMLElement {
  columnDefs?: string;
  rowData?: string;
  gridOptions?: string;
}
