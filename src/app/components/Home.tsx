'use client';
import React, { useState } from 'react'
import Taskform from './Taskform'
import Tasklist from './Tasklist'
import { Task } from '../interfaces/Task'

function HomePage() {
    
    const [tasklist, setTaskList] = useState<Task[]>([])

    return (
        <>
            <div className="mt-40 text-center">
                <h2 className='text-lg md:text-2xl mb-10 font-bold'>What will you do?</h2>
                <Taskform btnText={'Create Task'} taskList={[]} />
            </div>
            <div className="mt-16 text-center">
                <h2 className='text-lg md:text-2xl mb-6'>Your tasks:</h2>
                <Tasklist taskList={[]} />
            </div>
        </>
    )
}

export default HomePage