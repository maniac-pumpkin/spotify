import { ReactNode } from "react";

export type Taction = {
  type: string;
  payload?: unknown;
};

export type Tprovider = {
  children: ReactNode;
};
