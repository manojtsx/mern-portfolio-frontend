import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const user = {
  name: "Manoj Shrestha",
  email: "tom@example.com",
  imageUrl: "/images/logo.png",
};

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", current: true },
  { name: "Users", href: "/admin/users", current: false },
  { name: "Services", href: "/admin/services", current: false },
  { name: "Projects", href: "/admin/projects", current: false },
  { name: "FAQs", href: "/admin/faqs", current: false },
  { name: "Contacts", href: "/admin/contacts", current: false },
  { name: "Blogs", href: "/admin/blogs", current: false },
];

const profile = [
  { name: "Your Profile", href: "/profile", current: false },
  { name: "Settings", href: "/settings", current: false },
  { name: "Log out", href: "/logout", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src={user.imageUrl} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              className="flex items-center text-sm   p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                alt=""
              />
              <span className="ml-2 text-white">{user.name}</span>
            </button>
            {isProfileOpen && (
              <div
                className="origin-top-right absolute right-0 top-12 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                {profile.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
