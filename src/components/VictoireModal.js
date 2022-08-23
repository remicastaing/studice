import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VictoireModal({onHide, vainqueur}) {


  return (
    <Modal
      show={vainqueur!==null}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Gagné!!!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Le joueur {vainqueur?.id} a remporté la partie.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default VictoireModal