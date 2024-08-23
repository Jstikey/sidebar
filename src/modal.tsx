import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./useAppContext";

export const Modal = () => {
  const context = useAppContext();

  //
  return (
    <>
      {context?.showModal && (
        <div className={`modal-overlay show-modal`}>
          <div className="modal-container">
            <h3>Modal content</h3>
            <button
              className="show-modal"
              onClick={() => context.setShowModal(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
