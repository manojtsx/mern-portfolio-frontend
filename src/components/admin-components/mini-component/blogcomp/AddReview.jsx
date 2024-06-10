import React from 'react'

const AddReview = ({value, onChange}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor="review" className='mb-2 text-lg font-bold text-gray-700'>Review<span className='text-red-500'>*</span>:</label>
      <textarea 
        name="review" 
        id="review" 
        cols="30" 
        rows="10" 
        value={value}
        onChange={onChange}
        className='w-full h-40 p-2 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent resize-none'
      ></textarea>
    </div>
  )
}

export default AddReview