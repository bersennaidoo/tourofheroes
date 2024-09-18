import React, { FC } from "react";
import Modal from "../Modal/modal";

interface IModalYesNoProps {
    message: string
    onYes: (e: React.MouseEvent<HTMLButtonElement>) => void
    onNo: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ModalYesNo: FC<IModalYesNoProps> = (props: IModalYesNoProps) => {
  const { message, onYes, onNo } = props;

  return (
    <Modal>
      <div data-cy="modal-yes-no" className="modal d-block">
        <header className="modal-header">Confirm</header>
        <section className="modal-body">{message}</section>
        <footer className="modal-footer">
          <button type="button" className="btn btn-warning btn-lg" data-cy="button-no" onClick={onNo}>
            No
          </button>
          <button type="button" className="btn btn-primary btn-lg" data-cy="button-yes" onClick={onYes}>
            Yes
          </button>
        </footer>
      </div>
    </Modal>
  );
};

export default ModalYesNo;
