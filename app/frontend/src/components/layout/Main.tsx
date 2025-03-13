import React, { ReactNode } from "react";
import "./Main.scss";

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return <div className="main-container">{children}</div>;
};

export default Main;