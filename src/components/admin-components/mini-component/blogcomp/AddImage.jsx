import React, { useState } from 'react'

const AddImage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className='flex flex-col'>
      <label htmlFor="file" className='mb-2 text-lg font-bold text-gray-700'>Featured Image<span className='text-red-500'>*</span>:</label>
      <input type="file" name="file" id="file" className="w-full p-2 border border-gray-300 rounded-lg hidden" onChange={handleImageChange} />
      <div>
        <label htmlFor="file" className='w-full h-10 p-2 border border-gray-300 rounded-lg cursor-pointer text-center bg-blue-500 text-white hover:bg-blue-700'>
          <span>Upload Image</span>
        </label>
      </div>
      {image && (
        <div className='mt-5'>
          <img src={image} alt="Preview" className='w-64 h-64 object-cover rounded-lg' />
        </div>
      )}
    </div>
  )
}

export default AddImage