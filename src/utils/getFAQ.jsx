import { useAPI } from "../store/backendapi";

const useGetFAQ = () => {
  const API = useAPI();

  const getFAQ = async () => {
    try {
      const response = await fetch(`${API}api/admin/faqs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      } else {
        return data.data;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return getFAQ;
};

export default useGetFAQ;
