import { lazy, type ComponentType } from "react";

export function lazyImport<
  T extends ComponentType<unknown>,
  I extends { [K in keyof I]: T },
>(factory: () => Promise<I>, name: keyof I): I {
  return Object.create({
    [name]: lazy(() =>
      factory().then((module) => ({ default: module[name] as T })),
    ),
  }) as I;
}
