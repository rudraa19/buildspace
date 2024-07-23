import React from "react";
import { Outlet } from "react-router-dom";
import SidebarL from "./SidebarL";
import AddButton from "./AddButton";
import FeedbackButton from "./FeedbackButton";

const Layout = ({size=20, marginSize=size, sidebarSize=20}) => {
    return (
        <>
        <SidebarL size={sidebarSize} />
        <AddButton />
        <FeedbackButton />
        <div style={{float: 'left', width: `${100 - size - 5}%`, paddingLeft: 10, marginLeft: `${size + 1}%`}}> 
          <Outlet />
        </div>
        </>
    )
}

export default Layout