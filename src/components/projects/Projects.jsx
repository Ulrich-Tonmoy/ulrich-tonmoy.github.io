import "./Projects.css";
import mixitup from "mixitup";

export default function Projects() {
    setTimeout(function () {
        const mixer = mixitup(".projects__container", {
            selectors: {
                target: ".projects__content",
            },
            animation: {
                duration: 400,
            },
        });
    }, 5000);

    return (
        <>
            <div className="projects__nav">
                <span className="projects__item active-projects" data-filter="all">
                    All
                </span>
                <span className="projects__item" data-filter=".web">
                    Web
                </span>
                <span className="projects__item" data-filter=".ai">
                    AI/ML
                </span>
                <span className="projects__item" data-filter=".game">
                    Game
                </span>
            </div>

            <div className="projects__container grid">
                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Chat-Rooms</h2>
                        <span className="projects_subtitle">
                            A chat application where you can sent dm and create channels and group
                            chats. sent image video files gif emojis and many more.
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/chat-rooms/main/demo/chat.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/chat-rooms/main/demo/chat.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://chats-room.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/chat-rooms"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">E-Com</h2>
                        <span className="projects_subtitle">
                            An E-commerce website it has two type of user one buyers and one admin
                            who sells his products its not like big E-commerce site where there’s
                            many buyers and many sellers. Its build with MERN stack.
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/e-com/main/ss/client%20(2).png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/e-com/main/ss/client%20(2).png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://github.com/Ulrich-Tonmoy/e-com"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Doogle</h2>
                        <span className="projects_subtitle">
                            A search engine built with google search api.
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/doogle/main/demo/doogle.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/doogle/main/demo/doogle.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://search-doogle.netlify.app/search"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/doogle"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Websites</h2>
                        <span className="projects_subtitle">
                            Some websites and tools build with html css js bootstrap and APIs
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-html-css-js/main/images/website.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-html-css-js/main/images/website.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://ulrich-tonmoy.github.io/website-html-css-js/"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/website-html-css-js"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">React Websites</h2>
                        <span className="projects_subtitle">
                            Websites build with react and APIs
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-reactjs/main/website.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-reactjs/main/website.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://ulrich-tonmoy.github.io/website-reactjs/"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/website-reactjs"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Cryptoverze</h2>
                        <span className="projects_subtitle">
                            A cryptocurrency information and news website
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/cryptoverze/main/demo/demo1.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/cryptoverze/main/demo/demo1.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://cryptoverze.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/cryptoverze"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Amazoon</h2>
                        <span className="projects_subtitle">
                            A amazon like e-commerce website where you can add your products to a
                            cart then checkout and see older purchases
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-clones/main/amazoon/project-demo/demo1.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-clones/main/amazoon/project-demo/demo1.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://amazoon-16736.web.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/website-clones/tree/main/amazoon"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">WhatsApp-clone</h2>
                        <span className="projects_subtitle">
                            Whats app clone build using react and firebase. It has google auth and
                            the user can create groups and can sent messages to the groups its a
                            public group system so anyone can create and group and sent message to
                            any existing group
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-clones/main/whatsapp/project-demo/demo2.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-clones/main/whatsapp/project-demo/demo2.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://whatsapp-703f4.web.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/website-clones/tree/main/whatsapp"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Friend-Finder</h2>
                        <span className="projects_subtitle">
                            A Facebook like web app can do realtime messaging and video chat and
                            create post.
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/friend-finder/main/user/assets/2.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projects__img"
                                src="https://raw.githubusercontent.com/Ulrich-Tonmoy/friend-finder/main/user/assets/2.png"
                                alt=""
                            />
                        </a>
                        <hr />
                        <a
                            href="https://github.com/Ulrich-Tonmoy/friend-finder/tree/main/user"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content ai">
                    <div className="projects__data">
                        <h2 className="projects__title">GAN anime face generator</h2>
                        <span className="projects_subtitle">
                            Using Ml GAN model and pytorch to generate anime face.
                        </span>
                        <hr />
                        <a
                            href="https://github.com/Ulrich-Tonmoy/cvpr/tree/main/project"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Blackjack Game</h2>
                        <span className="projects_subtitle">
                            Blackjack game made with html css and js
                        </span>
                        <hr />
                        <a
                            href="https://ulrich-tonmoy.github.io/blackjack/"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-live"
                        >
                            <span>Live</span>
                        </a>
                        <a
                            href="https://github.com/Ulrich-Tonmoy/blackjack"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>

                <div className="projects__content web">
                    <div className="projects__data">
                        <h2 className="projects__title">Employee Management</h2>
                        <span className="projects_subtitle">
                            A simple employee management web app with aps.net and react class
                            component
                        </span>
                        <hr />
                        <a
                            href="https://github.com/Ulrich-Tonmoy/employee-management"
                            target="_blank"
                            rel="noreferrer"
                            className="button__link-source"
                        >
                            <span>Source</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
