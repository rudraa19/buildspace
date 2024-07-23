import React, { useState } from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";
import data from './Assets/Data';

const SidebarL = ({ size }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <div className={`content ${isOpen ? 'open' : ''}`} style={{ float: 'left', width: `${size}%`, backgroundColor: 'black', height: '100vh', position: 'fixed' }}>
                <div className="nav"><a href="/">Home</a></div>
                <br />
                {
                    data.map((section, sectionIndex) => {
                        const { summary, details } = section;
                        return (
                            <details key={sectionIndex} open>
                                <summary>{summary}</summary>
                                <ul>
                                    {details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>
                                            <Link to={`/${detail.path}`}>{detail.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        );
                    })
                }
            </div>
        </>
    );
}

export default SidebarL;
