import { useRef, useState, useEffect } from "react";
import { ContactCode } from "../components";
import styles from "../styles/ContactPage.module.css";
import emailjs from "@emailjs/browser";
import { client } from "../client";
import { motion } from "framer-motion";

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
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/resume.png" alt="resume" />
            {profile[0] && (
              <a download="" href={profile[0]?.cvURL} className="p-text">
                My Resume
              </a>
            )}
          </div>
          <div className={styles.card}>
            <img src="/location.png" alt="location" />
            <a
              href="https://www.google.com/maps/@23.8114631,90.4227104,16z"
              className="p-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bashundhara R/A
            </a>
          </div>
          <div className={styles.card}>
            <img src="/email.png" alt="email" />
            <a href="mailto:ulrichtonmoy1@gmail.com" className="p-text">
              ulrichtonmoy1@gmail.com
            </a>
          </div>
          <div className={styles.card}>
            <img src="/mobile.png" alt="mobile" />
            <a href="tel:+8801850490430" className="p-text">
              01850490430
            </a>
          </div>
        </div>
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
    </motion.div>
  );
};

export default Contact;
