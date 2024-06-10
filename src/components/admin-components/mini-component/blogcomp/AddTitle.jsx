import React from 'react'

const AddTitle = ({value, onChange}) => {
  return (
    <>
        <input 
            type="text" 
            name='title'
            value={value}
            onChange={onChange}
            placeholder='Add a New Title...' 
            className='text-4xl px-4 py-2 placeholder-gray-900 tracking-wide font-bold border-b-2 border-black focus:outline-none focus:border-blue-700' 
        />
    </>
  )
}

export default AddTitle