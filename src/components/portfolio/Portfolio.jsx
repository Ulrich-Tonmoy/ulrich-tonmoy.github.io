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
                        <h2 className="portfolio__title">Websites</h2>
                        <span className="portfolio_subtitle">
                            Some websites and tools build with html css js bootstrap and APIs
                        </span>
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
                        <h2 className="portfolio__title">WhatsApp-clone</h2>
                        <span className="portfolio_subtitle">
                            Whats app clone build using react and firebase. It has google auth and
                            the user can create groups and can sent messages to the groups its a
                            public group system so anyone can create and group and sent message to
                            any existing group
                        </span>
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
                        <hr />
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
