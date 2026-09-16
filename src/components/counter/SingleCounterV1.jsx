import React from 'react';
import CountUpComponent from 'react-countup'; // Renamed import to apply Vite interop fix

// VITE CJS INTEROP WORKAROUND: Safely extract the default component function
const CountUp = CountUpComponent.default || CountUpComponent;

const SingleCounterV1 = ({ counter }) => {
    const { end, duration, operator, text } = counter

    return (
        <>
            <li>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer">
                            <CountUp end={end} duration={duration} />
                        </div>
                        <div className="operator">{operator}</div>
                    </div>
                    <span className="medium">{text}</span>
                </div>
            </li>
        </>
    );
};

export default SingleCounterV1;
