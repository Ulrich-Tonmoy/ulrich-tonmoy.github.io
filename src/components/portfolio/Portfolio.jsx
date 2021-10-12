import "./Portfolio.css";
import mixitup from "mixitup";

export default function Portfolio() {
    setTimeout(function () {
        const mixer = mixitup(".portfolio__container", {
            selectors: {
                target: ".portfolio__content",
            },
            animation: {
                duration: 400,
            },
        });
    }, 5000);

    return (
        <>
            <div className="portfolio__nav">
                <span className="portfolio__item active-portfolio" data-filter="all">
                    All
                </span>
                <span className="portfolio__item" data-filter=".web">
                    Web
                </span>
                <span className="portfolio__item" data-filter=".ai">
                    AI/ML
                </span>
                <span className="portfolio__item" data-filter=".game">
                    Game
                </span>
            </div>

            <div className="portfolio__container grid">
                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Chat-Rooms</h2>
                        <span className="portfolio_subtitle">
                            A chat application where you can sent dm and create channels and group
                            chats. sent image video files gif emojis and many more.
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/chat-rooms/main/demo/chat.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="portfolio__img"
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Websites</h2>
                        <span className="portfolio_subtitle">
                            Some websites and tools build with html css js bootstrap and APIs
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-html-css-js/main/images/website.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="portfolio__img"
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">React Websites</h2>
                        <span className="portfolio_subtitle">
                            Websites build with react and APIs
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-reactjs/main/website.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="portfolio__img"
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Cryptoverze</h2>
                        <span className="portfolio_subtitle">
                            A cryptocurrency information and news website
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/cryptoverze/main/demo/demo1.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="portfolio__img"
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Amazoon</h2>
                        <span className="portfolio_subtitle">
                            A amazon like e-commerce website where you can add your products to a
                            cart then checkout and see older purchases
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/website-clones/main/amazoon/project-demo/demo1.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="portfolio__img"
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">WhatsApp-clone</h2>
                        <span className="portfolio_subtitle">
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
                                className="portfolio__img"
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

                <div className="portfolio__content ai">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">GAN anime face generator</h2>
                        <span className="portfolio_subtitle">
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Blackjack Game</h2>
                        <span className="portfolio_subtitle">
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Friend-Finder</h2>
                        <span className="portfolio_subtitle">
                            A Facebook like web app can do realtime messaging and video chat and
                            create post.
                        </span>
                        <a
                            href="https://raw.githubusercontent.com/Ulrich-Tonmoy/friend-finder/main/user/assets/2.png"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="portfolio__img"
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

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Employee Management</h2>
                        <span className="portfolio_subtitle">
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
