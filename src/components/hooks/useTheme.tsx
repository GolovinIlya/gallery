import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};
