import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    const handleBack = (): void => {
        navigate(-1);
    };
    return (
        <>
            <h3>Information page</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias minus, quod necessitatibus incidunt corporis cupiditate debitis nesciunt reiciendis culpa.</p>
            <button className="btn" onClick={handleBack}>Go back</button>
        </>
    );
};

export default AboutPage;
