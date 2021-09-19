import "./Navbar.css";
import { FaHome, FaUserAlt, FaCode, FaLaptopCode, FaEnvelope, FaCog } from "react-icons/fa";
import { scroller } from "react-scroll";

export default function Navbar({ callback }) {
    const loadEarth = () => {
        callback();
    };

    const scrollToHome = () => {
        scroller.scrollTo("home", {
            duration: 100,
        });
    };
    const scrollToAbout = () => {
        scroller.scrollTo("about", {
            duration: 100,
        });
    };
    const scrollToSkills = () => {
        scroller.scrollTo("skills", {
            duration: 100,
        });
    };
    const scrollToPortfolio = () => {
        scroller.scrollTo("portfolio", {
            duration: 100,
        });
    };
    const scrollToContact = () => {
        scroller.scrollTo("contact", {
            duration: 100,
        });
    };

    return (
        <div className="navbar">
            <div className="icons">
                <FaHome className="icon" onClick={scrollToHome} />
                <FaUserAlt className="icon" onClick={scrollToAbout} />
                <FaCode className="icon" onClick={scrollToSkills} />
                <FaLaptopCode className="icon" onClick={scrollToPortfolio} />
                <FaEnvelope className="icon" onClick={scrollToContact} />
                <FaCog className="icon" onClick={loadEarth} />
            </div>
        </div>
    );
}
