import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/home-components/Navbar"));
const Footer = lazy(() => import("./components/home-components/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Project = lazy(() => import("./pages/Project"));
const Services = lazy(() => import("./pages/Services"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Admin = lazy(() => import("./pages/Admin"));
const Dashboard = lazy(() => import("./components/admin-components/Dashboard"));
const AllUsers = lazy(() => import("./components/admin-components/AllUsers"));
const AllServices = lazy(() =>
  import("./components/admin-components/AllServices")
);
const AllProjects = lazy(() =>
  import("./components/admin-components/AllProjects")
);
const AllFAQs = lazy(() => import("./components/admin-components/AllFAQs"));
const AllContacts = lazy(() =>
  import("./components/admin-components/AllContacts")
);
const AddUser = lazy(() =>
  import("./components/admin-components/mini-component/addform/AddUser")
);
const AddContact = lazy(() =>
  import("./components/admin-components/mini-component/addform/AddContact")
);
const AddService = lazy(() =>
  import("./components/admin-components/mini-component/addform/AddService")
);
const AddProject = lazy(() =>
  import("./components/admin-components/mini-component/addform/AddProject")
);
const AddFAQ = lazy(() =>
  import("./components/admin-components/mini-component/addform/AddFAQ")
);
const EditUser = lazy(() =>
  import("./components/admin-components/mini-component/editform/EditUser")
);
const EditContact = lazy(() =>
  import("./components/admin-components/mini-component/editform/EditContact")
);
const EditService = lazy(() =>
  import("./components/admin-components/mini-component/editform/EditService")
);
const EditProject = lazy(() =>
  import("./components/admin-components/mini-component/editform/EditProject")
);
const EditFAQ = lazy(() =>
  import("./components/admin-components/mini-component/editform/EditFAQ")
);
const Logout = lazy(() => import("./components/Logout"));
const NotAdmin = lazy(() => import("./pages/NotAdmin"));
import { useAuth } from "./store/contextapi";
import AllBlogs from "./components/admin-components/AllBlogs";
import AddBlog from "./components/admin-components/mini-component/addform/AddBlog";

function App() {
  const { isAdmin, token } = useAuth();
  useEffect(() => {
    console.clear();

    console.log(`
  _____       _ _   
 |_   _|     (_) |  
   | |  _ __  _| |_ 
   | | | '_ \| | __|
  _| |_| | | | | |_ 
 |_____|_| |_|_|\__|
                    
`);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {!isAdmin ? <Navbar /> : ""}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/logout" element={<Logout />} />
            {isAdmin ? (
              <Route path="/admin" element={<Admin />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<AllUsers />} />
                <Route path="users/add" element={<AddUser />} />
                <Route path="users/edit/:id" element={<EditUser />} />
                <Route path="contacts" element={<AllContacts />} />
                <Route path="contacts/add" element={<AddContact />} />
                <Route path="contacts/edit/:id" element={<EditContact />} />
                <Route path="services" element={<AllServices />} />
                <Route path="services/add" element={<AddService />} />
                <Route path="services/edit/:id" element={<EditService />} />
                <Route path="projects" element={<AllProjects />} />
                <Route path="projects/add" element={<AddProject />} />
                <Route path="projects/edit/:id" element={<EditProject />} />
                <Route path="faqs" element={<AllFAQs />} />
                <Route path="faqs/add" element={<AddFAQ />} />
                <Route path="faqs/edit/:id" element={<EditFAQ />} />
                <Route path="blogs" element={<AllBlogs />} />
                <Route path="blogs/add" element={<AddBlog />} />
              </Route>
            ) : token ? (
              <Route path="/*" element={<NotAdmin />} />
            ) : (
              <Route path="/*" element={<NotFound />} />
            )}
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
