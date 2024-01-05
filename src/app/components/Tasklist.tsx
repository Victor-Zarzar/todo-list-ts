import React from 'react';
import { Task } from '../interfaces/Task';

type Props = {
  taskList: Task[];
};

const Tasklist = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          <div key={task.id}>
          <p>{task.title}</p>
          </div>
        })
      ) : (
        <p className='text-lg md:text-2xl mb-6'>No tasks registered</p>
      )}
    </>
  );
};

export default Tasklist;
