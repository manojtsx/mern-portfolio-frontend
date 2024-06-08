import { useAPI } from "../store/backendapi";
const useGetServices = () => {
  const API = useAPI();
  const getServices = async () => {
    try {
      const response = await fetch(`${API}api/admin/services`, {
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
  return getServices;
};
export default useGetServices;
