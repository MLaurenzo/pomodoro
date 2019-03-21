import React from 'react';
import Timer from './Timer.js';

const Break = (props) => {
    return (
        <Timer
            duration={1}
            onFinish={() => props.onFinish && props.onFinish()}
        />
    )
};

export default Break;