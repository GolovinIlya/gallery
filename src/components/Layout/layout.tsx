import React from "react";
import "./layout.scss";
import cn from "classnames";
import { useTheme } from "../hooks/useTheme";

interface LayoutProps {
  children: any;
}

export const Layuot: React.FC<LayoutProps> = ({ children }) => {
  const { isLight } = useTheme();

  return (
    <div
      className={cn("layout", {
        layout__light: isLight,
      })}
    >
      {children}
    </div>
  );
};
