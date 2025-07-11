import { Link, useLocation } from "react-router-dom";

// shadcn
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Properties",
    path: "/properties",
  },
  {
    name: "Agents",
    path: "/agents",
  },
  {
    name: "Contact Us",
    path: "/Contact",
  },
];

function Header() {
  const location = useLocation();
  const user = localStorage.getItem("user");
  return (
    <div className="container">
      <div className="flex justify-around md:justify-between items-center py-5">
        <Link to="/">
          <img src="../logo.svg" alt="site logo" />
        </Link>
        <nav className="md:gap-[30px] hidden md:flex">
          {pages.map((page, index) => {
            const active = page.path === location.pathname;
            return (
              <Link
                to={page.path}
                key={index}
                className={`hover:underline ${
                  active ? "text-primary-500" : "text-dark-500 "
                }`}
              >
                {page.name}
              </Link>
            );
          })}
        </nav>
        {!user && <button className="button-primary">Login</button>}
        {/* Mobile nav */}
        <div className="absolute right-[40px] md:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6 text-primary-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <nav className="gap-[30px] flex flex-col md:hidden px-10 pt-10">
                  {pages.map((page, index) => {
                    return (
                      <Link
                        to={page.path}
                        key={index}
                        className="hover:text-white hover:bg-primary-80 p-5 rounded-2xl transition-colors duration-200"
                      >
                        {page.name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
