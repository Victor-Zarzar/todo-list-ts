import React from 'react'
import Taskform from './Taskform'
import Tasklist from './Tasklist'

function HomePage() {
    return (
        <>
            <div className="mt-40 text-center">
                <h2 className='text-lg md:text-2xl mb-10'>What will you do?</h2>
                <Taskform btnText={'Create Task'} />
            </div>
            <div className="mt-10 text-center">
                <h2>Your tasks</h2>
                <Tasklist />
            </div>
        </>
    )
}

export default HomePage