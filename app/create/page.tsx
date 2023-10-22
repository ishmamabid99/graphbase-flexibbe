import Modal from "../components/Modal";
import ProjectForm from "../components/ProjectForm";

type Props = {};

function CreateProject({}: Props) {
  return (
    <Modal>
      <h3 className="modal-head-text">Create a new showoff</h3>
      <ProjectForm />
    </Modal>
  );
}

export default CreateProject;
