import React from 'react'

type Props = {
    btnText: string
}

const Taskform = ({ btnText }: Props) => {
    return <form className='form flex flex-col max-w-96 m-0 mx-auto'>
        <div>
            <label htmlFor='title' className='mr-2 text-lg md:text-xl'>Title</label>
            <input type='text' name='title' placeholder='Title task' className='input p-2 mb-6 mt-4 border-2 bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-60 md:pl-12 md:w-full'></input>
        </div>
        <div>
            <label htmlFor='difficulty' className='mr-2 text-lg md:text-xl'>Difficulty</label>
            <input type='text' name='difficulty' placeholder='Difficulty for task' className='input p-2 mb-6 mt-4 border-2 bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-60 md:w-full'></input>
        </div>
        <input type='submit' className='bg-[#61bafb] from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white w-60 md:w-full rounded-lg' value={btnText}></input>
    </form>
}

export default Taskform