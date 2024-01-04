import React from 'react'

type Props = {
    btnText: string
}

const Taskform = ({ btnText }: Props) => {
    return <form>
        <div>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' placeholder='Title task'></input>
        </div>
        <div>
            <label htmlFor='difficulty'>Difficulty</label>
            <input type='text' name='difficulty' placeholder='Difficulty for task'></input>
        </div>
        <input type='submit' value={btnText} ></input>
    </form>
}

export default Taskform