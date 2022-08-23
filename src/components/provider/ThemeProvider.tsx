import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

interface ThemeProviderProps {
  children: any;
}

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IContext {
  isLight: boolean;
  setIsLight?: TypeSetState<boolean>;
}

export const ThemeContext = createContext<IContext>({ isLight: false });

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLight, setIsLight] = useState<boolean>(false);

  const value = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
