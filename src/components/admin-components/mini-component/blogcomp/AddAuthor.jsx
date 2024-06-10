import React from "react";

const AddAuthor = ({selectedAuthor, onAuthorChange}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="author" className="mb-2 text-lg font-bold text-gray-700">
        Author<span className="text-red-500">*</span>:
      </label>
      <select
        name="author"
        value={selectedAuthor}
        onChange={onAuthorChange}
        id=""
        className="w-full p-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="">Select Author</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
        <option value="Manoj Shrestha">Manoj Shrestha</option>
      </select>
    </div>
  );
};

export default AddAuthor;
