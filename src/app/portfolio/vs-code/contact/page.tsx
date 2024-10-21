/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState, useEffect } from "react";
import { ContactCode } from "@/components/vs-code";
import styles from "@/styles/vs-code/contact-page.module.css";
import emailjs from "@emailjs/browser";
import { client, urlFor } from "@/lib/client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef<any>();
  const [profile, setProfile] = useState<any>([]);
  const [contactItems, setContactItems] = useState([]);

  const submitForm = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ucigc98",
        "template_fzfgxn6",
        formRef.current,
        "JJWmhn7B9fII3JveJ"
      )
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

  useEffect(() => {}, []);
  useEffect(() => {
    const query = '*[_type == "profile"]{"cvURL": cv.asset->url}';
    client.fetch(query).then((res) => {
      setProfile(res);
    });

    const profileQuery = '*[_type == "profile"]';
    client
      .fetch(profileQuery)
      .then((res) => setContactItems(res[0].socialInfo));
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
          {profile[0] && (
            <a className={styles.card} download="" href={profile[0]?.cvURL}>
              <img src="/resume.png" alt="resume" />
              <span className="p-text">My Resume</span>
            </a>
          )}
          <a
            className={styles.card}
            href="https://www.google.com/maps/@23.8114631,90.4227104,16z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/location.png" alt="location" />
            <span className="p-text">Bashundhara R/A</span>
          </a>
          <a className={styles.card} href="mailto:ulrichtonmoy1@gmail.com">
            <img src="/email.png" alt="email" />
            <span className="p-text">ulrichtonmoy1@gmail.com</span>
          </a>
          <a className={styles.card} href="tel:+8801850490430">
            <img src="/mobile.png" alt="mobile" />
            <span className="p-text">01850490430</span>
          </a>
        </div>
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} ref={formRef} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="input" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="input" required />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" className="input" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="input"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="mt-10 flex gap-3">
          {contactItems?.map((social: any, index: number) => (
            <Link key={index} href={social.link} target="_blank">
              <Image
                width={36}
                height={36}
                src={urlFor(social.websiteLogo)}
                alt={social.websiteName}
                className="w-9 h-9 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
