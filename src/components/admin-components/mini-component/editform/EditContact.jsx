import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAPI } from "../../../../store/backendapi";
import { useAuth } from "../../../../store/contextapi";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const API = useAPI();
  const { token } = useAuth();
  const [contact, setContact] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(`${API}api/admin/contact/${id}`, {
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
          setContact({
            ...contact,
            name: data.data.name || "",
            email: data.data.email || "",
            phone: data.data.phone || "",
            message: data.data.message || "",
          });
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    getUserData();
  }, []);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };
  const handleEditContact = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${API}api/admin/contact/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      } else {
        toast.success(data.data);
        navigate("/admin/contacts");
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
            Message for Admin
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            In the journey of life, challenges are the sculptors of our
            character. Embrace the struggle, for it is through adversity that we
            discover our strength and resilience.
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
              Edit Message
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleEditContact}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name :
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your full name"
                  value={contact.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  value={contact.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone :
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your number"
                  value={contact.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message :
                </label>
                <input
                  type="message"
                  name="message"
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  value={contact.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditContact;
