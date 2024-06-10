import React from "react";

const AddCategory = ({selectedCategory, onCategoryChange}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="category"
        className="mb-2 text-lg font-bold text-gray-700"
      >
        Category<span className="text-red-500">*</span>:
      </label>
      <select
        name="category"
        value={selectedCategory}
        onChange={onCategoryChange}
        id=""
        className="w-full p-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="">Select Category</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
      </select>
    </div>
  );
};

export default AddCategory;
