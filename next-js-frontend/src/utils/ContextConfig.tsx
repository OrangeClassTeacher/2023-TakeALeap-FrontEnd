import { createContext } from "react";

type UserContextType = {
  userSign: any;
  setUserSign: (data: any) => void;
};

type LoadingContextType = {
  loading: any;
  setLoading: (data: any) => void;
};

export const UserContext = createContext({} as UserContextType);
export const LoadingContext = createContext({} as LoadingContextType);
