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
                            className="button-link"
                        >
                            Live
                        </a>
                        ||
                        <a
                            href="https://github.com/Ulrich-Tonmoy/website-html-css-js"
                            target="_blank"
                            rel="noreferrer"
                            className="button-link"
                        >
                            Source
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
                            className="button-link"
                        >
                            Live
                        </a>
                        ||
                        <a
                            href="https://github.com/Ulrich-Tonmoy/website-reactjs"
                            target="_blank"
                            rel="noreferrer"
                            className="button-link"
                        >
                            Source
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
                            className="button-link"
                        >
                            Live
                        </a>
                        ||
                        <a
                            href="https://github.com/Ulrich-Tonmoy/blackjack"
                            target="_blank"
                            rel="noreferrer"
                            className="button-link"
                        >
                            Source
                        </a>
                    </div>
                </div>

                <div className="portfolio__content ai">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">GAN anime face generator</h2>
                        <span className="portfolio_subtitle">
                            Using ml gan model to generate anime face
                        </span>
                        <hr />
                        <a
                            href="https://github.com/Ulrich-Tonmoy/cvpr"
                            target="_blank"
                            rel="noreferrer"
                            className="button-link"
                        >
                            Source
                        </a>
                    </div>
                </div>

                <div className="portfolio__content web">
                    <div className="portfolio__data">
                        <h2 className="portfolio__title">Friend-Finder</h2>
                        <span className="portfolio_subtitle">
                            A Facebook like web app can do realtime messaging and video chat
                        </span>
                        <hr />
                        <a
                            href="https://github.com/Ulrich-Tonmoy/website-reactjs"
                            target="_blank"
                            rel="noreferrer"
                            className="button-link"
                        >
                            Source
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
                            className="button-link"
                        >
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
