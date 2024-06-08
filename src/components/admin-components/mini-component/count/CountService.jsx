import React, { useEffect, useState } from "react";
import { useAPI } from "../../../../store/backendapi";
import LoadingScreen from "../../utils/LoadingScreen";
import CountUp from 'react-countup';

const CountService = () => {
  const API = useAPI();
  const [serviceCount, setServiceCount] = useState(-1);
  useEffect(() => {
    const getServices = async () => {
      const response = await fetch(`${API}api/util/countservice`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      } else {
        setServiceCount(data.count);
      }
    };
    getServices();
  }, []);

  if (serviceCount < 0) {
    return <LoadingScreen />
  }

  return (
    <div className="text-gray-800 text-2xl font-bold text-center mt-5 p-5 border-2 border-gray-100 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
      <div>Services</div>
      <div className="text-4xl">
        <CountUp start={0} end={serviceCount} duration={2.75} />
      </div>
    </div>
  );
};

export default CountService;