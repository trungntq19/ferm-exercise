import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);

    return (
        <div>
            <nav
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                }}
            >
                <ul className="nav__list">
                    <li>
                        <a className="nav__item active" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav__item" href="#news">
                            News
                        </a>
                    </li>
                    <li>
                        <a className="nav__item" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav__item" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <div style={{ position: "relative" }}>
                    <a
                        className="switch-mode"
                        href="!#"
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: "none",
                        }}
                        data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? "Dark" : "Light"} mode
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
