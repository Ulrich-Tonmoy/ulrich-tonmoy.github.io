/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/client";
import { contact } from "@/lib/icon";

const Footer = () => {
  const [socialInfo, setSocialInfo] = useState<any>([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';
    client.fetch(query).then((res) => {
      setSocialInfo(res[0].socialInfo);
    });
  }, []);

  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © 2023 <strong>Tonmoy</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          <Link href="/portfolio/3d/contact">
            <Image src={contact} alt="Contact" className="w-6 h-6 object-contain" />
          </Link>
          {socialInfo?.map((social: any, index: number) => (
            <Link key={index} href={social.link} target="_blank">
              <img
                src={urlFor(social.websiteLogo)}
                alt={social.websiteName}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
