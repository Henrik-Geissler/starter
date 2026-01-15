import { getDensity, getMainColor, getConfig } from './config-scope';

/**
 * @experimental
 */
describe('config-scope utilities', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    if (!document.body) {
      document.body = document.createElement('body') as HTMLBodyElement;
    }
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  it('returns default density when no scope', () => {
    expect(getDensity(element)).toBe('comfortable');
  });

  it('returns density from lux-scope', () => {
    const scope = document.createElement('lux-scope');
    scope.setAttribute('density', 'compact');
    scope.appendChild(element);
    document.body.appendChild(scope);

    expect(getDensity(element)).toBe('compact');

    if (scope.parentNode) {
      scope.parentNode.removeChild(scope);
    }
  });

  it('returns default main color when no scope', () => {
    const color = getMainColor(element);
    expect(color).toBeTruthy();
  });

  it('returns main color from lux-scope', () => {
    const scope = document.createElement('lux-scope');
    scope.setAttribute('main-color', '#ff0000');
    scope.appendChild(element);
    document.body.appendChild(scope);

    expect(getMainColor(element)).toBe('#ff0000');

    if (scope.parentNode) {
      scope.parentNode.removeChild(scope);
    }
  });

  it('returns config object', () => {
    const config = getConfig(element);
    expect(config.density).toBe('comfortable');
    expect(config.mainColor).toBeTruthy();
  });
});
