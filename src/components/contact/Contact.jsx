import "./Contact.css";
import { FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <div class="contact__container container grid">
            <div>
                <div class="contact__information">
                    <FaMobileAlt class="contact__icon" />

                    <div>
                        <h3 class="contact__title">Call Me</h3>
                        <span class="contact__subtitle">01850490430</span>
                    </div>
                </div>

                <div class="contact__information">
                    <FaRegEnvelope class="contact__icon" />

                    <div>
                        <h3 class="contact__title">Email</h3>
                        <span class="contact__subtitle">ulrichtonmoy1@gmail.com</span>
                    </div>
                </div>

                <div class="contact__information">
                    <BiCurrentLocation class="contact__icon" />

                    <div>
                        <h3 class="contact__title">Location</h3>
                        <span class="contact__subtitle">Basundhara R/A, Dhaka</span>
                    </div>
                </div>

                <div class="contact__information">
                    {sent ? (
                        <div>
                            <span class="contact__subtitle message">Message Sent</span>
                            <h3 class="contact__title message">Will get to you soon</h3>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <form action="#" class="contact__form grid">
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">
                            Name
                        </label>
                        <input type="text" class="contact__input" />
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">
                            Email
                        </label>
                        <input type="email" class="contact__input" />
                    </div>
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">
                        Project
                    </label>
                    <input type="text" class="contact__input" />
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">
                        Message
                    </label>
                    <textarea cols="0" rows="7" class="contact__input"></textarea>
                </div>
                <div>
                    <div class="contact__button">Send Message</div>
                </div>
            </form>
        </div>
    );
}
