import { Link } from "react-router-dom";

// shadcn
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    name: "Blog",
    path: "/Blog",
  },
  {
    name: "Contact Us",
    path: "/Contact",
  },
];

function Header() {
  return (
    <div className="container">
      <div className="flex justify-around md:justify-between items-center py-5">
        <Link to="/">
          <img src="../logo.svg" alt="site logo" />
        </Link>
        <nav className="md:gap-[30px] hidden md:flex">
          {pages.map((page, index) => {
            return (
              <Link
                to={page.path}
                key={index}
                className="text-dark-500 hover:underline"
              >
                {page.name}
              </Link>
            );
          })}
        </nav>
        <button className="button-primary">Login</button>
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

export default Header;
