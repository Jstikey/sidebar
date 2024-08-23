import { createContext, FC, ReactNode, useContext, useState } from "react";

interface contextProps {
  children: ReactNode;
}

interface globalContextProps {
  showsidebar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<globalContextProps | null>(null);

export const useAppContext = () => useContext(GlobalContext);

export const AppContext: FC<contextProps> = ({ children }) => {
  const [showsidebar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //
  return (
    <GlobalContext.Provider
      value={{ setShowSideBar, showsidebar, showModal, setShowModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
