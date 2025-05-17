import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaskCard = ({task}) => {
 

  return (
       <div className="bg-secondary/10 rounded-md p-5">
      <h1 className='text-lg'
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button  title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <b

           
            title="In progress">
          
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </b>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
