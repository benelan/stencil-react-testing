import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "component-library",
  extras: { enableImportInjection: true, scriptDataOpts: true },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "component-library",
      proxiesFile: "../react-library/lib/components/stencil-generated/index.ts",
      customElementsDir: "dist/components",
    }),
    { type: "dist-hydrate-script" },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
    },
    { type: "dist" },
    { type: "docs-readme" },
    { type: "docs-json", file: "./dist/extras/docs-json.json" },
    { type: "docs-vscode", file: "./dist/extras/vscode-data.json" },
    { type: "www", serviceWorker: { unregister: true } },
  ],
};
