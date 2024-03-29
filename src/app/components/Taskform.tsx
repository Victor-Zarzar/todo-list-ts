'use client';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Task } from "../interfaces/Task"

type Props = {
    btnText: string
    taskList: Task[]
    setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>
}

const Taskform = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000)
        const newTask: Task = { id, title, difficulty }

        setTaskList!([...taskList, newTask])

        setTitle("");
        setDifficulty(0);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === title) {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }

    };
    
    return <form onSubmit={addTaskHandler} className='form flex flex-col max-w-96 m-0 mx-auto'>
        <div>
            <label htmlFor='title' className='mr-2 text-lg md:text-xl float-left'>Title:</label>
            <input type='text' name='title' placeholder='Title task' onChange={handleChange} value={title} className='input p-2 mb-6 mt-4 border-2 bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-60 md:pl-12 md:w-full'></input>
        </div>
        <div>
            <label htmlFor='difficulty' className='mr-2 text-lg md:text-xl float-left'>Difficulty:</label>
            <input type='text' name='difficulty' placeholder='Difficulty for task' onChange={handleChange} value={difficulty} className='input p-2 mb-6 mt-4 border-2 bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-60 md:w-full'></input>
        </div>
        <input type='submit' className='bg-[#61bafb] from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white w-60 md:w-full rounded-lg cursor-pointer' value={btnText}></input>
    </form>
}

export default Taskform