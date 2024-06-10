import React from "react";

const AddRatings = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="ratings" className="mb-2 text-lg font-bold text-gray-700">
        Ratings<span className="text-red-500">*</span>:
      </label>
      <select
        name="ratings"
        value={value}
        onChange={onChange}
        id="ratings"
        className="w-full h-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
      >
        <option value="">Select Ratings</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>
  );
};

export default AddRatings;
