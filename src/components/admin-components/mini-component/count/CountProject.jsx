import React, { useEffect, useState } from "react";
import { useAPI } from "../../../../store/backendapi";
import LoadingScreen from "../../utils/LoadingScreen";
import CountUp from 'react-countup';

const CountProject = () => {
  const API = useAPI();
  const [projectCount, setProjectCount] = useState(-1);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch(`${API}api/util/countproject`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      } else {
        setProjectCount(data.count);
      }
    };
    getProjects();
  }, []);

  if (projectCount < 0) {
    return <LoadingScreen />
  }

  return (
    <div className="text-gray-800 text-2xl font-bold text-center mt-5 p-5 border-2 border-gray-100 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
      <div>Project</div>
      <div className="text-4xl">
        <CountUp start={0} end={projectCount} duration={2.75} />
      </div>
    </div>
  );
};

export default CountProject;