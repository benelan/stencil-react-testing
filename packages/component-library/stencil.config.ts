import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'component-library',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-react/src/components.ts',
    }),
    { type: "dist-hydrate-script" },
    { type: "dist-custom-elements", autoDefineCustomElements: true },
    { type: 'dist' },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
