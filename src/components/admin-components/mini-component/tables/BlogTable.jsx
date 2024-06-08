import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAPI } from "../../../../store/backendapi";
import { useAuth } from "../../../../store/contextapi";
import { useDelete } from "../../utils/delete";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../utils/LoadingScreen";

const BlogTable = () => {
  const navigate = useNavigate();
  const API = useAPI();
  const { token } = useAuth();
  const { deleteBlog } = useDelete();
  const [blogs, setBlogs] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const getBlogList = async () => {
      const response = await fetch(`${API}api/content/blogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setBlogs(data.data);
    };
    getBlogList();
  }, []);

  const handleDelete = (blog_id) => {
    deleteBlog(blog_id)
      .then((res) => {
        toast.success(res);
        setBlogs(blogs.filter((blog) => blog._id !== blog_id));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil((blogs ? blogs.length : 0) / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => setCurrentPage(number)}
        className={`cursor-pointer px-3 py-2 m-1 border rounded-full ${
          currentPage === number
            ? "bg-blue-500 text-white"
            : "bg-white text-black"
        }`}
      >
        {number}
      </li>
    );
  });

  if (!blogs) {
    return <LoadingScreen />
  }
  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              SN
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ratings
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reviews
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {blogs
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((item, index) => {
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{index}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.ratings}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.reviews}
                  </td>
                  <td>
                    <button
                      className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                      onClick={() =>
                        navigate(`/admin/blogs/edit/${item._id}`)
                      }
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ul id="page-numbers" className="flex justify-center">
        {renderPageNumbers}
      </ul>
    </div>
  );
}

export default BlogTable