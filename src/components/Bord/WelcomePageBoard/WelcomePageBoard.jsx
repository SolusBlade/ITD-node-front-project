import Modal from "components/Modal/Modal";
import Filters from "../Filters/Filters";
import s from './WelcomePageBoard.module.scss';
import NewBoard from "components/Forms/NewBoardAndEditBoard/NewBoardForm";
import { useState } from "react";

const WelcomePageBoard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCreateBoardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={s.welcomePageContainer}>
      <div className={s.welcomePage}>
        <Filters />
      </div>
      <div className={s.welcomeContainerDiscription}>
        <p className={s.welcomeDiscription}>
        Before starting your project, it is essential {" "}<span className={s.createBoardLink} onClick={handleCreateBoardClick}>to create a board</span>{" "} to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
        </p>
      </div>
      {showModal && (
        <Modal title="New board" closeModal={handleCloseModal}>
          <NewBoard />
        </Modal>
      )}
    </div>
  )
}

export default WelcomePageBoard;
