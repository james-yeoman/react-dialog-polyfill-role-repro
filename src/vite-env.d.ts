/// <reference types="vite/client" />
/// <reference types="vitest/globals"/>

// This file is an augmentation to the built-in ImportMeta interface
// Thus cannot contain any top-level imports
// <https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation>

/* eslint-disable @typescript-eslint/consistent-type-imports */
interface ImportMeta {
  url: string;
  // https://vitest.dev/guide/in-source.html#typescript
  readonly vitest?: typeof import("vitest");
}
