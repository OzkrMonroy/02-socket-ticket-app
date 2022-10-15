import { UIProvider } from "./context/UIProvider";
import { RouterPage } from "./pages/RouterPage";

export const TicketApp = () => {
  return (
    <>
      <UIProvider>
        <RouterPage />
      </UIProvider>
    </>
  );
};
