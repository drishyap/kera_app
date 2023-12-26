import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <h1 className="logo">Udel</h1>
                    </Link>
                </div>
                <ul
                    className={click ? "nav-menu active" : "nav-menu"}
                >
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link">
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link">
                            FAQ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes style={{ color: "#ffffff" }} />
                    ) : (
                        <FaBars style={{ color: "#ffffff" }} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
