import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal'

const AddTaskModal = ({isOpen, setIsOpen }) => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming here"
        >
           
            <form onSubmit={handleSubmit(onSubmit)}>

        <div className='flex flex-col gap-3'>
            <label htmlFor="title">Title</label>
            <input type="text" {...register('name')} />
            <input type="date" className="input" />
            <label htmlFor="title">Title</label>
            <input type="text" {...register('name')} />
            

        </div>



        <button type="submit">Submit</button>

            </form>
      </Modal>
    );
};

export default AddTaskModal;