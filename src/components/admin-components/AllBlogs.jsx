import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import BlogTable from './mini-component/tables/BlogTable';
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
    const navigate = useNavigate();
    return (
      <div>
        <header className="bg-white shadow rounded-lg p-6 mb-4 flex items-center justify-between">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              All Blogs
            </h1>
            <p className="text-gray-600">
              Here, you can see all the blog list and then edit and delete the
              blogs.
            </p>
          </div>
          <button
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700 flex items-center"
            onClick={() => navigate("/admin/blogs/add")}
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            <span className="hidden md:inline-block">Add Blogs</span>
          </button>
        </header>
        <BlogTable />
      </div>
    );
}

export default AllBlogs