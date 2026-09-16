import React from 'react';
// 1. Import the entire bundle module object
import * as CountUpModule from 'react-countup';

// 2. Extract the true functional component dynamically out of Vite's module shell
const CountUp = CountUpModule.default?.default || CountUpModule.default || CountUpModule;

const SingleAchievementV1 = ({ achievement }) => {
    const { icon, end, info1, info2 } = achievement

    return (
        <>
            <li>
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer">
                            {/* Component will now evaluate smoothly without crashing */}
                            <CountUp duration={4} end={end} enableScrollSpy />
                        </div>
                        <div className="operator">+</div>
                    </div>
                    <span className="medium">{info1} <br /> {info2}</span>
                </div>
            </li>
        </>
    );
};

export default SingleAchievementV1;
