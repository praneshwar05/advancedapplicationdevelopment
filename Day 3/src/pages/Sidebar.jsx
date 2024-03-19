import React, { useEffect, useRef } from "react";
import "../assets/css/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
    const sidebarRef = useRef(null);
    const navigate=useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-content">
                
                <Link to="/"><h2>Profile</h2></Link>
                <Link to="/"><h2>Dashboard</h2></Link>
                <Link to="/"><h2>Logout</h2></Link>
                </div>
        </div>
    );
}

export default Sidebar;
