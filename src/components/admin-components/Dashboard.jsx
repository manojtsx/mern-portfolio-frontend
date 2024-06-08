import React from "react";
import CountUser from "./mini-component/count/CountUser";
import CountService from "./mini-component/count/CountService";
import CountFAQ from "./mini-component/count/CountFAQ";
import CountProject from "./mini-component/count/CountProject";
import CountContact from "./mini-component/count/CountContact";
import CountBlog from "./mini-component/count/CountBlog";

const Dashboard = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <div className="flex flex-wrap justify-start items-start bg-white shadow-lg p-10">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <CountUser />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <CountService />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <CountFAQ />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <CountProject />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <CountContact />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <CountBlog />
        </div>
      </div>
    </>
  );
};

export default Dashboard;