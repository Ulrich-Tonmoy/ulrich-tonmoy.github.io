import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { client, urlFor } from "./../../client";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [profile, setProfile] = useState([]);

    const scrollTo = (id) => {
        setToggle(false);
        scroller.scrollTo(id);
    };

    useEffect(() => {
        const query = '*[_type == "profile"]';
        client.fetch(query).then((res) => {
            setProfile(res);
        });
    }, []);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                {profile[0] && <img src={urlFor(profile[0]?.logo)} alt="logo" />}
            </div>
            <ul className="app__navbar-links">
                {["home", "about", "work", "skills", "contact"].map((item) => (
                    <li
                        key={`link-${item}`}
                        className="app__flex p-text"
                        onClick={(e) => scrollTo(item)}
                    >
                        <div />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {["home", "about", "work", "skills", "contact"].map((item) => (
                                <li key={item}>
                                    <span onClick={(e) => scrollTo(item)}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
