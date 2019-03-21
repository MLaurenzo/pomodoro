import React from 'react';
import Timer from './Timer.js';

const Pomodoro = (props) => {
    return (
        <Timer
            duration={5}
            onFinish={() => props.onFinish && props.onFinish()}
        />
    )
};

export default Pomodoro;