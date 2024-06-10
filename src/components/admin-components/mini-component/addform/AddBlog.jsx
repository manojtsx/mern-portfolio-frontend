import React, { useState } from "react";
import AddTitle from "../blogcomp/AddTitle";
import AddDescription from "../blogcomp/AddDescription";
import AddAuthor from "../blogcomp/AddAuthor";
import AddCategory from "../blogcomp/AddCategory";
import AddImage from "../blogcomp/AddImage";
import AddRatings from "../blogcomp/AddRatings";
import AddReview from "../blogcomp/AddReview";
import { useAPI } from "../../../../store/backendapi";
import {toast} from 'react-toastify';
import { useAuth } from "../../../../store/contextapi";

const AddBlog = () => {
  const API = useAPI();
  const {token} = useAuth();
  const [blog, setBlog] = useState({
    title : "",
    description : "",
    author : "66549fd80968d3870d9b02f2",
    category : "",
    image : "",
    ratings : "",
    review : ""
  })
  const handleSubmit = async() =>{
    try{
      const response = await fetch(`${API}api/content/blog/add`, {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          Authorization : `Bearer ${token}`
        },
        body : JSON.stringify(blog)
    });
    const data = await response.json();
    if(!response.ok){
      throw new Error(data.msg);
    }
    toast.success(data.data);

    }catch(err){
      toast.error(err.message);
    }
  }
  const handleChange = (e) =>{
    setBlog({
      ...blog,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div className="flex justify-between space-x-10">
      <div className="m-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white my-4">
              Add Blog
            </h1>
        <AddTitle value={blog.title} onChange={handleChange}/>
        <AddDescription value={blog.description} onChange={handleChange}/>
        <button
          type="submit"
          className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          Add Blog
        </button>
      </div>
      <div className="border border-gray-500 px-2 py-5 my-4">
        <AddAuthor selectedAuthor={blog.author} onAuthorChange={handleChange} />
        <AddCategory selectedCategory={blog.category} onCategoryChange={handleChange}/>
        <AddImage  />
        <AddRatings value={blog.ratings} onChange={handleChange}/>
        <AddReview value={blog.review} onChange={handleChange} />
      </div>
    </div>
  );
};

export default AddBlog;