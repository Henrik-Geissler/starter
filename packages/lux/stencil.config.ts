import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'lux',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      generateTypeDeclarations: true,
      externalRuntime: false,
    },
    reactOutputTarget({
      componentCorePackage: '@lux/components',
      proxiesFile: './dist/react/components.ts',
      outDir: './dist/react',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@lux/components',
      directivesProxyFile: './dist/angular/src/components.ts',
      directivesArrayFile: './dist/angular/index.ts',
      outDir: './dist/angular',
    }),
    {
      type: 'docs-readme',
      strict: true,
    },
    {
      type: 'docs-custom',
      generator: docs => {
        // Generate custom-elements.json for Storybook
        const customElements = {
          version: '1.0.0',
          tags: docs.components.map(comp => ({
            name: comp.tag,
            description: comp.docs || '',
            attributes: comp.props
              .filter(p => p.attr)
              .map(p => ({
                name: p.attr,
                type: p.type,
                description: p.docs || '',
                default: p.default,
                required: p.required || false,
              })),
            properties: comp.props.map(p => ({
              name: p.name,
              type: p.type,
              description: p.docs || '',
              default: p.default,
            })),
            events: comp.events.map(e => ({
              name: e.event,
              description: e.docs || '',
            })),
            slots: comp.slots.map(s => ({
              name: s.name || 'default',
              description: s.docs || '',
            })),
            cssProperties: comp.styles.map(s => ({
              name: s.name,
              description: s.docs || '',
            })),
          })),
        };
        return JSON.stringify(customElements, null, 2);
      },
      outputFile: 'dist/custom-elements.json',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  plugins: [sass()],
  globalStyle: 'src/global/global.scss',
  testing: {
    browserHeadless: 'new',
    collectCoverage: true,
    testPathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 90,
        statements: 90,
      },
    },
  },
  buildEs5: 'prod',
  extras: {
    experimentalSlotFixes: true,
  },
};
