import "./Contact.css";
import { FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();
    const [sent, setSent] = useState(false);
    const [empty, setEmpty] = useState(false);

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
        }
    };

    return (
        <div className="contact__container container grid">
            <div>
                <div className="contact__information">
                    <FaMobileAlt className="contact__icon" />

                    <div>
                        <h3 className="contact__title">Call Me</h3>
                        <span className="contact__subtitle">01850490430</span>
                    </div>
                </div>

                <div className="contact__information">
                    <FaRegEnvelope className="contact__icon" />

                    <div>
                        <h3 className="contact__title">Email</h3>
                        <span className="contact__subtitle">ulrichtonmoy1@gmail.com</span>
                    </div>
                </div>

                <div className="contact__information">
                    <BiCurrentLocation className="contact__icon" />

                    <div>
                        <h3 className="contact__title">Location</h3>
                        <span className="contact__subtitle">Basundhara R/A, Dhaka</span>
                    </div>
                </div>

                <div className="contact__information">
                    {sent ? (
                        <div>
                            <span className="contact__subtitle message">Message Sent</span>
                            <h3 className="contact__title message">Will get to you soon</h3>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="contact__information">
                    {empty ? (
                        <div>
                            <span className="contact__subtitle warning">Form is Empty</span>
                            <h3 className="contact__title warning">Fill up the form</h3>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            {!sent && (
                <form ref={formRef} onSubmit={handleSubmit} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label className="contact__label">Name</label>
                            <input type="text" name="name" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label className="contact__label">Email</label>
                            <input type="email" name="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label className="contact__label">Subject</label>
                        <input type="text" name="subject" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label className="contact__label">Message</label>
                        <textarea
                            cols="0"
                            rows="7"
                            name="message"
                            className="contact__input"
                        ></textarea>
                    </div>
                    <div>
                        <div className="contact__button">
                            <button>Send Message</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
