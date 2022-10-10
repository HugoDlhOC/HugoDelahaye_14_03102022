import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ModalComponent = ({ state, setModal }) => {
  console.log(state);
  return (
    <PureModal
      header={""}
      isOpen={state}
      closeButton={<FontAwesomeIcon icon={faClose}></FontAwesomeIcon>}
      closeButtonPosition="header"
      onClose={() => setModal(false)}
    >
      <p>Employee Created!</p>
    </PureModal>
  );
};

export default ModalComponent;
