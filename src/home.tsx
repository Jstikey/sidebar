import { FaBars } from "react-icons/fa";
import { useAppContext } from "./useAppContext";

export const Home = () => {
  const context = useAppContext();

  //
  return (
    <main className="home">
      {!context?.showsidebar && (
        <button
          className="toggle-btn"
          onClick={() => context?.setShowSideBar(true)}
        >
          <FaBars className="fabar" />
        </button>
      )}
      <button
        className="show-modal-btn"
        onClick={() => context?.setShowModal(true)}
      >
        show modal
      </button>
    </main>
  );
};
