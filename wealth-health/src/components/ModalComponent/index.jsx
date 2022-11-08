import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

/**
 * This component represents the modal for confirming the addition of an employee when the form is submitted. The npm PureModal package is used here.
 * @param state
 * @param setModal
 * @returns JSX
 */
const ModalComponent = ({ state, setModal }) => {
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

ModalComponent.propTypes = {
  state: PropTypes.bool,
  setModal: PropTypes.any,
};
