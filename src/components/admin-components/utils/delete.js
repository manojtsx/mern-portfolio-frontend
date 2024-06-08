import { useAPI } from "../../../store/backendapi";
import { useAuth } from "../../../store/contextapi";
export const useDelete = () => {
  const { token } = useAuth();
  const API = useAPI();
  const deleteUser = async (id) => {
    const response = await fetch(`${API}api/admin/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg);
    } else {
      return data.data;
    }
  };

  const deleteService = async (id) => {
    const response = await fetch(`${API}api/admin/service/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg);
    } else {
      return data.data;
    }
  };

  const deleteContact = async (id) => {
    const response = await fetch(`${API}api/admin/contact/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg);
    } else {
      return data.data;
    }
  };

  const deleteProject = async (id) => {
    const response = await fetch(`${API}api/admin/project/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg);
    } else {
      return data.data;
    }
  };

  const deleteFAQ = async (id) => {
    const response = await fetch(`${API}api/admin/faq/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg);
    } else {
      return data.data;
    }
  };
  const deleteBlog = async (id) => {
    const response = await fetch(`${API}api/content/blog/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg);
    } else {
      return data.data;
    }
  };
  return { deleteUser, deleteService, deleteProject, deleteContact, deleteFAQ, deleteBlog };
};
