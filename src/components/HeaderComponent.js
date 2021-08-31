import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and website promotions</h1>
                <Typed className="typed-text" strings={[
                    "Mobile Development", "Web Development", "Data Science", "Machine Learning"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop />
                <a href="" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
