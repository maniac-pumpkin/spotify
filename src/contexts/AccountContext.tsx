/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useReducer } from "react";
import { Taction } from "./types";
import { Tprovider } from "./types";

const values = {
  signedIn: false,
};

type Tvalues = typeof values;

interface Icontext extends Tvalues {
  accountAction: {
    accountSignOut(): void;
    accountSignIn(): void;
  };
}

const Account = createContext<Icontext | null>(null);

const reducer = (prevState: Tvalues, action: Taction): Tvalues => {
  switch (action.type) {
    case "account/signIn":
      return {
        ...prevState,
        signedIn: true,
      };
    case "account/signOut":
      return {
        ...prevState,
        signedIn: false,
      };
    default:
      return prevState;
  }
};

export const useAccountContext = () => {
  const context = useContext(Account);
  if (context === null || context === undefined)
    throw new Error("Context must be consumed within the context provider");
  return context;
};

export default function AccountProvider({ children }: Tprovider) {
  const [state, dispatch] = useReducer(reducer, values);

  const accountAction = useMemo(
    () => ({
      accountSignOut() {
        dispatch({
          type: "account/signOut",
        });
      },
      accountSignIn() {
        dispatch({
          type: "account/signIn",
        });
      },
    }),
    [],
  );

  return (
    <Account.Provider value={{ ...state, accountAction }}>
      {children}
    </Account.Provider>
  );
}
