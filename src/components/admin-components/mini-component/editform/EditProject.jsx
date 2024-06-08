import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAPI } from "../../../../store/backendapi";
import { useAuth } from "../../../../store/contextapi";
import { useParams } from "react-router-dom";

const handleEditProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const API = useAPI();
  const { token } = useAuth();

  // Initialize state variables
  const [project, setProject] = useState({
    id: id,
    name: "",
    category: "",
    link: "",
    image : ""
  });
  const [serverImage, setServerImage] = useState("");
  const [selectedFile,setSelectedFile] = useState(null);
  useEffect(() => {
    const getProjectData = async () => {
      try {
        const response = await fetch(`${API}api/admin/project/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        } else {
          setProject({
            ...project,
            name: data.data.name || "",
            category: data.data.category || "",
            link: data.data.link || "",
            image : data.data.image || ""
          });
          setServerImage(`${API}${data.data.image}`);
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    getProjectData();
  }, []);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setProject({ ...project, [name]: value });
    if(e.target.type === 'file'){
      setSelectedFile(e.target.files[0]);
    }
  };
  const EditProject = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('name',project.name);
      formData.append('category',project.category);
      formData.append('link',project.link);
      if(selectedFile){
        formData.append('image',project.image);
      }
      const response = await fetch(`${API}api/admin/project/edit/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      } else {
        toast.success(data.data);
        navigate("/admin/projects");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Show Your Talent Here.
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            A person is a entity who is recognized by talent. Be sure to upload
            more and more things here.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Read more about your app
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Edit Project
            </h2>
            <form className="mt-8 space-y-6" onSubmit={EditProject}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name :
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your question"
                  value={project.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category :
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your answer"
                  value={project.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Link :
                </label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your answer"
                  value={project.link}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Featured Photo :
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleInputChange}
                  accept=".jpg, .jpeg, .png"
                />
              </div>
              {/* Create a preview div for the image uploaded */}
              {selectedFile || serverImage ?  (
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Preview :
                  </label>
                  <div>
                    <img
                      src={selectedFile ? URL.createObjectURL(selectedFile) : serverImage}
                      alt="preview"
                      className="w-1/2 h-1/2"
                    />
                  </div>
                </div>
              ) : null}
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default handleEditProject;
