import { useAPI } from "../store/backendapi";
const useGetProjects = () => {
  const API = useAPI();
  const getProjects = async () => {
    try {
      const response = await fetch(`${API}api/admin/projects`, {
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
  return getProjects;
};
export default useGetProjects;
