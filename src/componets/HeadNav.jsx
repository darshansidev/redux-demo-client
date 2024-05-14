import React, { useState } from "react";

import "./HeadNav.css";
import { Link, NavLink } from "react-router-dom";

const HeadNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav>
            <Link to="/" className="title">
                Todo App
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/todo/showAll">ShowAll</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeadNav;