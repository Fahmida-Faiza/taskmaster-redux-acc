import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/tasksSlice';

const AddTaskModal = ({isOpen, setIsOpen }) => {
    const {register, handleSubmit, reset} = useForm()
const dispatch = useDispatch()



    const onSubmit = (data) => {
        // console.log(data);
        // redux e data pathailam
        dispatch(addTask(data))
        onCancel();
    }
 
// cancel button
const onCancel = () =>{
    reset();
    setIsOpen(false)
}


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming here"
        >
           
            <form onSubmit={handleSubmit(onSubmit)}>

        <div className='flex flex-col gap-3 my-4'>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" {...register('title')} />
                        <label htmlFor="title">Date</label>

            <input type="date" id="date" {...register('date')} className="input" />

                                    <label htmlFor="title">Description</label>
                                    <textarea className="textarea" id="description" {...register('description')} placeholder="description"></textarea>





  <label htmlFor="title">Priority</label>
<select defaultValue="Priority" id="priority"{...register('priority')} className="select">
  
  <option>high</option>
  <option>medium</option>
  <option>low</option>
</select>

            

</div>
            

      

<div className='flex justify-end gap-3'>
    <button onClick={() => onCancel()} type='button' className='btn btn-danger'>
        Cancel

    </button>


        <button type="submit" className='btn btn-primary'>Submit</button>
</div>
            </form>
      </Modal>
    );
};

export default AddTaskModal;