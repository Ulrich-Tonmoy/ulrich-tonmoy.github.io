import styles from "@/styles/vs-code/contact-code.module.css";
import { useState, useEffect } from "react";
import { client } from "@/lib/client";

const ContactCode = () => {
  const [contactItems, setContactItems] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';
    client.fetch(query).then((res) => setContactItems(res[0].socialInfo));
  }, []);

  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems?.slice(0, 8)?.map((item: any, index: any) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.websiteName}:{" "}
          <a href={item.link} target="_blank" rel="noopener">
            {item.username}
          </a>
          ;
        </p>
      ))}
      {contactItems?.slice(8, contactItems.length)?.map((item: any, index: any) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.websiteName}:{" "}
          <a href={item.link} target="_blank" rel="noopener">
            {item.username}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
