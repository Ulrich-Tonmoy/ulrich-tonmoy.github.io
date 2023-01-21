import { scroller } from "react-scroll";

export default function NavigationDots({ active }) {
    const scrollTo = (id) => {
        scroller.scrollTo(id);
    };

    return (
        <div className="app__navigation">
            {["home", "about", "work", "skills", "contact"].map((item, index) => (
                <span
                    onClick={(e) => scrollTo(item)}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: "#313bac" } : {}}
                />
            ))}
        </div>
    );
}
