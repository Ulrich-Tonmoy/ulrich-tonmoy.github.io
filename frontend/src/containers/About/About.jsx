import "./About.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((res) => setAbouts(res));
    }, []);

    return (
        <>
            <h2 className="head-text">
                <span>Fight for your Fairytales.</span> <br />
                <span>"Someday" </span> is a disease <br /> that will take your<span> Dream </span>
                to the Grave with you. <br /> <span>-Tim Ferriss</span>
            </h2>
            <div className="app__profiles">
                {abouts?.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about?.imgUrl)} alt={about?.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {about?.title}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {about?.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
