import React, { useEffect, useState } from "react";
import { useAPI } from "../../../../store/backendapi";
import LoadingScreen from "../../utils/LoadingScreen";
import CountUp from 'react-countup';

const CountContact = () => {
  const API = useAPI();
  const [contactCount, setContactCount] = useState(-1);
  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch(`${API}api/util/countcontact`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      } else {
        setContactCount(data.count);
      }
    };
    getContacts();
  }, []);

  if (contactCount < 0) {
    return <LoadingScreen />
  }

  return (
    <div className="text-gray-800 text-2xl font-bold text-center mt-5 p-5 border-2 border-gray-100 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
      <div>Contact</div>
      <div className="text-4xl">
        <CountUp start={0} end={contactCount} duration={2.75} />
      </div>
    </div>
  );
};

export default CountContact;