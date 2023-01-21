import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "./../../wrapper";
import { useEffect } from "react";
import { useState } from "react";
import { client, urlFor } from "./../../client";

const Header = () => {
    const [profile, setProfile] = useState([]);

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    useEffect(() => {
        const query = '*[_type == "profile"]';
        client.fetch(query).then((res) => {
            setProfile(res);
        });
    }, []);

    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I'm</p>
                            <h1 className="head-text">{profile[0]?.name}</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        {profile[0]?.skills?.map((skill) => (
                            <p className="p-text" key={skill}>
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                {profile[0] && <img src={urlFor(profile[0].profileImage)} alt="profile pic" />}
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    src={images.circle}
                    alt="profile-circle"
                    className="overlay_circle"
                />
            </motion.div>
            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {profile[0]?.skillImages?.map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={urlFor(circle)} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, "home");
