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
    FaDiscord,
    FaItchIo,
} from "react-icons/fa";
import CV from "../../assets/pdf/Tonmoy's_CV.pdf";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
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
            duration: 100,
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
                            "MERN Stack Developer",
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
                    <a
                        href="https://discord.com/invite/BgfsG8SfEe"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaDiscord className="social__icon" />
                    </a>
                    <a
                        href="https://www.codingame.com/profile/e339ef2fa4a2fad06cb1ebb56aaed99c2582053"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaCode className="social__icon" />
                    </a>
                    <a href="https://ulrich-tonmoy.itch.io/" target="_blank" rel="noreferrer">
                        <FaItchIo className="social__icon" />
                    </a>
                </div>
                <br />
                <p>I like making stuff and putting it on the internet</p>
            </blockquote>

            <section className="left about" id="about">
                <h2>
                    <FaUserAlt />
                    <span className="section__title">About me</span>
                </h2>
                <p>
                    Hi, there i'm Tonmoy. I am currently doing my BSc in CSE at AIUB. I am learning
                    web development. I also have knowledge of game development with Unity game
                    engine and i like to research and play with AI/Ml. I have built some small games
                    with Unity engine and ml models with GAN(Generative Adversarial Network) for
                    fun.
                </p>
                <div className="about__button-container">
                    <a download="" href={CV} className="about__button">
                        <span>
                            Download CV <FaFileDownload className="about__button-icon" />
                        </span>
                    </a>
                </div>
            </section>

            <section className="light skills" id="skills">
                <h2>
                    <FaCode />
                    <span className="section__title"> Skills</span>
                </h2>
                <Skills />
            </section>

            <blockquote>
                <p>
                    "Someday" is a disease that will take your dreams to the grave with you
                    <br />
                    -Tim Ferriss
                </p>
                <br /> <br /> <br />
                <p>Fight for your fairytales</p>
            </blockquote>

            <section className="left projects" id="projects">
                <h2>
                    <FaLaptopCode />
                    <span className="section__title">Projects</span>
                </h2>
                <Projects />
            </section>

            <section className="light contact" id="contact">
                <h2>
                    <FaEnvelope /> <span className="section__title">Contact Me</span>
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
