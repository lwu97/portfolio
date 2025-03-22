import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.scrollY;
    //         if (scrollTop > 100) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <nav className={`${styles.paddingX}  bg-transparent`}>
            <div className="flex flex-col items-start ">
                <Link
                    to="/"
                    className="flex items-center"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <h1
                        className={` text-green font-mon text-[64px] font-bold m-0 p-0`}
                    >
                        LEON WU
                    </h1>
                </Link>
                <h2 className="text-beige font-mon text-[24px] m-0">
                    FULL STACK DEVELOPER
                </h2>
                <ul className="flex flex-col gap-2 pt-8">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-green"
                                    : "text-beige"
                            } hover:text-white text-[18px] cursor-pointer font-mon`}
                            onClick={() => setActive(link.title)}
                        >
                            <a className="font-mon" href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-start items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-medium cursor-pointer text-[16px] font-mon`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
