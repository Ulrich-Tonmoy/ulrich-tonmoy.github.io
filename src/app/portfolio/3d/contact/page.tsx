"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "@/lib/hooks/use-alert";
import { Alert } from "@/components/3d";

const Contact = () => {
  const formRef = useRef<any>();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .sendForm(
        "service_ucigc98",
        "template_fzfgxn6",
        formRef.current,
        "JJWmhn7B9fII3JveJ"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");
            formRef.current.reset();
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <title>Tonmoy - 3D Portfolio(Contact)</title>
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-slate-700 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Tonmoy"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-slate-700 font-semibold">
            Subject
            <input
              type="text"
              name="subject"
              className="input"
              placeholder="Topic name"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-slate-700 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="tonmoy@gmail.com"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-slate-700 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Write your thoughts here..."
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"></div>
    </section>
  );
};

export default Contact;
