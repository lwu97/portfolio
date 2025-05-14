import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 bg-[#171717] z-20`}>
      <div className="flex justify-between items-center pr-8 pt-4">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        ></Link>

        <ul className="flex gap-8 py-2 tracking-widest">
          {navLinks.map((link) => (
            <li
              key={link.link}
              className={`${
                active === link.title ? "text-green" : "text-beige"
              } hover:text-green text-[12px] lg:text-[14px]  cursor-pointer font-mon `}
            >
              <a
                className="font-mon"
                href={`${link.link}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
