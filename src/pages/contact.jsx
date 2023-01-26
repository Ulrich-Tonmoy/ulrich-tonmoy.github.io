import { useRef, useState, useEffect } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [profile, setProfile] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_ucigc98", "template_fzfgxn6", formRef.current, "JJWmhn7B9fII3JveJ")
            .then(
                (result) => {
                    alert("Your response has been received!");
                    formRef.current.reset();
                },
                (error) => {
                    alert("There was an error. Please try again in a while.");
                }
            );
    };

    useEffect(() => {
        const query = '*[_type == "profile"]{"cvURL": cv.asset->url}';
        client.fetch(query).then((res) => {
            setProfile(res);
        });
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.heading}>Reach Out Via Socials</h3>
                <ContactCode />
            </div>
            <div>
                <h3 className={styles.heading}>Or Fill Out This Form</h3>
                <form className={styles.form} ref={formRef} onSubmit={submitForm}>
                    <div className={styles.flex}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Subject</label>
                        <input type="text" name="subject" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
