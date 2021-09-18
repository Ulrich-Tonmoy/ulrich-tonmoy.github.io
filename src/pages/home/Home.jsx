import "./Home.css";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaKaggle,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaUserAlt,
    FaFileDownload,
    FaCode,
    FaLaptopCode,
    FaEnvelope,
    FaArrowUp,
    FaArtstation,
} from "react-icons/fa";
import CV from "../../assets/pdf/My CV.pdf";
import Skills from "../../components/skills/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import { scroller } from "react-scroll";
import Typed from "react-typed";
import Contact from "../../components/contact/Contact";

export default function Home() {
    const scrollTop = () => {
        const scrollTop = document.getElementById("scroll-top");
        if (window.scrollY > 560) scrollTop.classList.add("show-scroll");
        else scrollTop.classList.remove("show-scroll");
    };
    window.addEventListener("scroll", scrollTop);

    const scrollToHome = () => {
        scroller.scrollTo("home", {
            duration: 200,
        });
    };

    return (
        <main>
            <section className="home" id="home">
                <h3 className="title">
                    Hi, I'm <span className="name">Ulrich Tonmoy</span>
                </h3>
                <div className="subtitle">
                    <Typed
                        strings={[
                            "Front-End Developer",
                            "Back-End Developer",
                            "Game Developer",
                            "AI/ML Dev",
                        ]}
                        typeSpeed={100}
                        backSpeed={120}
                        loop
                    />
                </div>
                <p>👨‍💻 Welcome to my website!</p>
            </section>

            <blockquote>
                <div className="social__icons">
                    <a
                        href="https://www.linkedin.com/in/ulrich-tonmoy-7817ba193"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn className="social__icon" />
                    </a>
                    <a href="https://github.com/Ulrich-Tonmoy" target="_blank" rel="noreferrer">
                        <FaGithub className="social__icon" />
                    </a>
                    <a href="https://www.kaggle.com/ulrichtonmoy" target="_blank" rel="noreferrer">
                        <FaKaggle className="social__icon" />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC6b8Zl8uBuKYx0q5X-P2idQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaYoutube className="social__icon" />
                    </a>
                    <a
                        href="https://www.facebook.com/BushHunter.LoL"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookF className="social__icon" />
                    </a>
                    <a href="https://twitter.com/utonmoy" target="_blank" rel="noreferrer">
                        <FaTwitter className="social__icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/ulrich_tonmoy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram className="social__icon" />
                    </a>
                    <a
                        href="https://www.artstation.com/ulrich_tonmoy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaArtstation className="social__icon" />
                    </a>
                </div>
                <br />
                <p>I like making stuff and putting it on the internet</p>
            </blockquote>

            <section className="left about" id="about">
                <h2>
                    <FaUserAlt /> About me
                </h2>
                <p>
                    Hi, there i'm Tonmoy. I am currently doing my BSc in CSE at AIUB. I have many
                    hobbies such a reading novels and manhuas watching animes and k-dramas playing
                    games. But my technical hobbies are making games, researching and playing with
                    AI. I had made some small games with Unity engine and ml models for image
                    recognition for fun now i am learning Full-Stack Web Development.
                </p>
                <div className="about__buttons">
                    <a download="" href={CV} className="button button--flex">
                        Download CV
                        <FaFileDownload className="button__icon" />
                    </a>
                </div>
            </section>

            <section className="light skills" id="skills">
                <h2>
                    <FaCode /> Skills
                </h2>
                <Skills />
            </section>

            <blockquote>
                <p>Fight for your fairytales</p>
            </blockquote>

            <section className="left portfolio" id="portfolio">
                <h2>
                    <FaLaptopCode /> Portfolio
                </h2>
                <Portfolio />
            </section>

            <section className="light contact" id="contact">
                <h2>
                    <FaEnvelope /> Contact Me
                </h2>
                <Contact />
            </section>

            <blockquote>
                <p>Thanks for visiting!</p>
            </blockquote>

            <div className="scroll__top" id="scroll-top" onClick={scrollToHome}>
                <FaArrowUp className="scroll__top-icon" />
            </div>
        </main>
    );
}
