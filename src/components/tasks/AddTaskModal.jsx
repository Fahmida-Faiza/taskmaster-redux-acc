import Modal from '../ui/Modal'

const AddTaskModal = ({isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming here">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ex dolorem assumenda, odit rem quidem optio ullam sequi! Ut natus corrupti eum adipisci quod?
            </p>
            
      </Modal>
    );
};

export default AddTaskModal;