import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIContext";

export const useHideMenu = (isHiden) => {
  const { showMenu, hideMenu } = useContext(UIContext);

  useEffect(() => {
    if (isHiden) {
      hideMenu();
      return;
    }
    showMenu();
  }, [isHiden, hideMenu, showMenu]);
};
