import {
    BsTwitter,
    BsInstagram,
    BsFacebook,
    BsLinkedin,
    BsGithub,
    BsCodeSlash,
    BsDiscord,
    BsYoutube,
} from "react-icons/bs";
import { FaKaggle, FaArtstation } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

export default function SocialMedia() {
    return (
        <div className="app__social">
            <a href="https://twitter.com/utonmoy" target="_blank" rel="noreferrer">
                <BsTwitter />
            </a>
            <a href="https://www.facebook.com/BushHunter.LoL" target="_blank" rel="noreferrer">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/ulrich_tonmoy" target="_blank" rel="noreferrer">
                <BsInstagram />
            </a>
            <a
                href="https://www.youtube.com/channel/UC6b8Zl8uBuKYx0q5X-P2idQ"
                target="_blank"
                rel="noreferrer"
            >
                <BsYoutube />
            </a>
            <a
                href="https://www.youtube.com/channel/UCwlvPCiMjCY0NJmljSIJJuA"
                target="_blank"
                rel="noreferrer"
            >
                <BsYoutube />
            </a>
            <a
                href="https://www.linkedin.com/in/ulrich-tonmoy-7817ba193"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/Ulrich-Tonmoy" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
            <a href="https://www.kaggle.com/ulrichtonmoy" target="_blank" rel="noreferrer">
                <FaKaggle />
            </a>
            <a href="https://www.artstation.com/ulrich_tonmoy" target="_blank" rel="noreferrer">
                <FaArtstation className="social__icon" />
            </a>
            <a
                href="https://www.codingame.com/profile/e339ef2fa4a2fad06cb1ebb56aaed99c2582053"
                target="_blank"
                rel="noreferrer"
            >
                <BsCodeSlash />
            </a>
            <a href="https://ulrich-tonmoy.itch.io/" target="_blank" rel="noreferrer">
                <SiItchdotio />
            </a>
            <a href="https://discord.com/invite/BgfsG8SfEe" target="_blank" rel="noreferrer">
                <BsDiscord />
            </a>
        </div>
    );
}
