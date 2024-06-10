import React from "react";

const AddDescription = ({value, onChange}) => {
  return (
    <>
      <textarea
        placeholder="Add description..."
        name="description"
        value={value}
        onChange={onChange}
        className="my-4 outline-none placeholder-gray-500 w-full h-screen p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent resize-none"
        
      />
    </>
  );
};

export default AddDescription;
