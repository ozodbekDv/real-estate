import { Link } from "react-router-dom";

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
      <div className="flex justify-between items-center py-5">
        <Link to="/">
          <img src="../logo.png" alt="site logo" />
        </Link>
        <nav className="flex gap-[30px]">
          {pages.map((page, index) => {
            return (
              <Link to={page.path} key={index}>
                {page.name}
              </Link>
            );
          })}
        </nav>
        <button className="rounded-[10px] text-primary-500">Login</button>
      </div>
    </div>
  );
}

export default Header;
