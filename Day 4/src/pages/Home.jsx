import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Home.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Home({ registeredEmail, isLoggedIn }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <header>
                <div>
                    <img src={"https://academy.chess7.com/wp-content/uploads/2023/08/Chess7-Academy-logo-1.png"} alt="Chess Academy Logo" className="logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/homepage">Home</Link>
                        </li>
                        <li>
                            <Link to="/admissionform">Admission</Link>
                        </li>
                        <li>
                            <Link to="/course">Enrolled Courses</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="profile-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isLoggedIn ? (
                        <FontAwesomeIcon icon={faUser} />
                    ) : registeredEmail ? (
                        <p>{registeredEmail}</p>
                    ) : (
                        <FontAwesomeIcon icon={faUser} />
                    )}
                </div>
            </header>

            <Sidebar isOpen={isSidebarOpen} />

            <Footer />
        </div>
    );
}

export default Home;
