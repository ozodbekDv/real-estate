import { Link } from "react-router-dom";

const socials = [
  {
    name: "Facebook",
    path: "../images/facebook.svg",
  },
  {
    name: "Twitter",
    path: "../images/twitter.svg",
  },
  {
    name: "Linkedin",
    path: "../images/linkedin.svg",
  },
];

const aboutLinks = [
  {
    name: "About us",
    href: "",
  },
  {
    name: "Blog",
    href: "",
  },
  {
    name: "Agents",
    href: "",
  },
  {
    name: "New Property",
    href: "",
  },
];

const serviceLinks = [
  {
    name: "Payment & Tax",
    href: "",
  },
  {
    name: "Features",
    href: "",
  },
  {
    name: "View Booking",
    href: "",
  },
  {
    name: "Contact Us",
    href: "",
  },
];

function Footer() {
  return (
    <div className="bg-primary-500 text-white py-[30px]">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <Link to="/">
              <img className="mb-5" src="../logo-white.svg" alt="site logo" />
            </Link>
            <p className="w-[329px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              tempus felis vitae sit est quisque.
            </p>
          </div>
          <div className="flex gap-[124.5px]">
            <div className="">
              <h4 className="mb-5 font-bold">About</h4>
              <div className="flex gap-4 flex-col">
                {aboutLinks.map((item, index) => (
                  <Link to={item.href} key={index}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="">
              <h4 className="mb-5 font-bold">Service</h4>
              <div className="flex gap-4 flex-col">
                {serviceLinks.map((item, index) => (
                  <Link
                    to={item.href}
                    key={index}
                    className="font-normal text-[16px]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-5 font-bold">Our Location</h4>
              <p className="mb-4">
                2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
              </p>
              <div className="flex gap-4">
                {socials.map((item, index) => (
                  <span
                    key={index}
                    className="w-12 h-12 rounded-full bg-white inline-flex items-center justify-center relative"
                  >
                    <div className="absolute bg-white w-12 h-12 rounded-full z-1 hover:animate-ping"></div>
                    <img
                      className="z-5 cursor-pointer"
                      src={item.path}
                      alt={item.name + " icon"}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[30px] mb-5 bg-white/20 border-0 outline-0 h-[1px]" />
        <div className="flex justify-between">
          <div>
            <p>Copyright 2022 flora. All Rights Reserved</p>
          </div>
          <div className="flex gap-[30px]">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
