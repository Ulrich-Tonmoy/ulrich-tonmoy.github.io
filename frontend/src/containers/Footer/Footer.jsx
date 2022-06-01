import "./Footer.scss";
import { AppWrap, MotionWrap } from "./../../wrapper";
import { images } from "../../constants";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { client } from "./../../client";

const Footer = () => {
    const formRef = useRef();
    const [sent, setSent] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [profile, setProfile] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formRef.current[0].value &&
            formRef.current[1].value &&
            formRef.current[2].value &&
            formRef.current[3].value
        ) {
            setEmpty(false);

            emailjs
                .sendForm(
                    "service_ucigc98",
                    "template_fzfgxn6",
                    formRef.current,
                    "JJWmhn7B9fII3JveJ"
                )
                .then(
                    (result) => {
                        setSent(true);
                        formRef.current.reset();
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );

            setTimeout(function () {
                setSent(false);
            }, 2000);
        } else {
            setEmpty(true);
            setTimeout(function () {
                setEmpty(false);
            }, 2000);
        }
    };

    useEffect(() => {
        const query = '*[_type == "profile"]{"cvURL": cv.asset->url}';
        client.fetch(query).then((res) => {
            setProfile(res);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.resume} alt="resume" />
                    {profile[0] && (
                        <a download="" href={profile[0]?.cvURL} className="p-text">
                            My Resume
                        </a>
                    )}
                </div>
                <div className="app__footer-card">
                    <img src={images.location} alt="location" />
                    <a
                        href="https://www.google.com/maps/@23.8114631,90.4227104,16z"
                        className="p-text"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bashundhara R/A
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:ulrichtonmoy1@gmail.com" className="p-text">
                        ulrichtonmoy1@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel:+8801850490430" className="p-text">
                        01850490430
                    </a>
                </div>
            </div>
            {!sent ? (
                <form ref={formRef} onSubmit={handleSubmit} className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="name" />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            name="message"
                            placeholder="Your Message"
                            cols="0"
                            rows="7"
                        ></textarea>
                    </div>
                    {empty && (
                        <div className="app__footer-form app__flex">
                            <span className="app__footer-warning">Form is Empty</span>
                            <h3 className="app__footer-warning">Fill up the form</h3>
                        </div>
                    )}
                    <button type="submit" className="p-text">
                        Send Message
                    </button>
                </form>
            ) : (
                <div className="app__footer-form app__flex">
                    <span>Message Sent</span>
                    <h3>Will get to you as soon as possible.</h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__primarybg");
