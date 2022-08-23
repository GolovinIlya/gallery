import React from "react";
import { HandySvg } from "handy-svg";
import iconSrc from "./logo.svg";
import iconSrc2 from "./Vector.svg";
import iconSrcLight from "./VectorLight.svg";
import "./navbar.scss";
import { useTheme } from "../hooks/useTheme";

export const Navbar = () => {
  const { isLight, setIsLight } = useTheme();

  return (
    <div className="navbar">
      <HandySvg
        fill="none"
        src={iconSrc}
        className="icon"
        width="64"
        height="64"
      />
      <button
        className="navbar__btn"
        onClick={() => setIsLight && setIsLight(!isLight)}
      >
        {!isLight ? (
          <HandySvg src={iconSrc2} className="icon" width="20" height="20" />
        ) : (
          <HandySvg
            src={iconSrcLight}
            className="icon"
            width="20"
            height="20"
          />
        )}
      </button>
    </div>
  );
};
