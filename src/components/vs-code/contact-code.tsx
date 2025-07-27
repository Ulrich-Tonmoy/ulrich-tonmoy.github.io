import { useState, useEffect } from "react";
import { client } from "@/lib/client";

const ContactCode = () => {
  const [contactItems, setContactItems] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';
    client.fetch(query).then((res) => setContactItems(res[0].socialInfo));
  }, []);

  return (
    <div className="sm:text-[1.2rem] sm:leading-8 [counter-reset:line] text-[0.85rem] leading-6">
      <p className="before:mr-4 before:text-gray-500 before:content-[counter(line)] before:[counter-increment:line]">
        <span className="text-[var(--accent-color)]">.socials</span> &#123;
      </p>
      {contactItems?.slice(0, 8)?.map((item: any, index: any) => (
        <p
          className="before:mr-4 before:text-gray-500 before:content-[counter(line)] before:[counter-increment:line]"
          key={index}
        >
          &nbsp;&nbsp;&nbsp;{item.websiteName}:{" "}
          <a
            href={item.link}
            target="_blank"
            rel="noopener"
            className="text-[var(--accent-color)] no-underline hover:underline"
          >
            {item.username}
          </a>
          ;
        </p>
      ))}
      {contactItems?.slice(8)?.map((item: any, index: any) => (
        <p
          className="before:mr-4 before:text-gray-500 before:content-[counter(line)] before:[counter-increment:line]"
          key={index}
        >
          &nbsp;&nbsp;{item.websiteName}:{" "}
          <a
            href={item.link}
            target="_blank"
            rel="noopener"
            className="text-[var(--accent-color)] no-underline hover:underline"
          >
            {item.username}
          </a>
          ;
        </p>
      ))}
      <p className="before:mr-4 before:text-gray-500 before:content-[counter(line)] before:[counter-increment:line]">
        &#125;
      </p>
    </div>
  );
};

export default ContactCode;
