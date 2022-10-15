import React, { useState } from "react";
import { UIContext } from "./UIContext";

export const UIProvider = ({ children }) => {
  const [menuHidden, setMenuHidden] = useState(false);

  const showMenu = () => {
    setMenuHidden(false);
  };
  const hideMenu = () => {
    setMenuHidden(true);
  };
  return (
    <UIContext.Provider
      value={{
        menuHidden,
        showMenu,
        hideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
