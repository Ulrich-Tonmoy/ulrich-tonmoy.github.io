import "./Contact.css";
import { FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);

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
            </div>

            <form action="#" className="contact__form grid">
                <div className="contact__inputs grid">
                    <div className="contact__content">
                        <label for="" className="contact__label">
                            Name
                        </label>
                        <input type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label for="" className="contact__label">
                            Email
                        </label>
                        <input type="email" className="contact__input" />
                    </div>
                </div>
                <div className="contact__content">
                    <label for="" className="contact__label">
                        Project
                    </label>
                    <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                    <label for="" className="contact__label">
                        Message
                    </label>
                    <textarea cols="0" rows="7" className="contact__input"></textarea>
                </div>
                <div>
                    <div className="contact__button">Send Message</div>
                </div>
            </form>
        </div>
    );
}
