import React, {useEffect, useReducer, useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Timer = (props) => {
    const [running, setRunning] = useState(false);
    const [timer, setTimer] = useState(null);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'decrement':
                return {countdown: state.countdown - 1};
            case 'reset':
                return {countdown: props.duration};
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, {countdown: props.duration});

    const handleStart = () => {
        const timer = setInterval(() => dispatch({type: 'decrement'}), 1000);
        setTimer(timer);
        setRunning(true);
    };

    const handlePause = () => {
        clearInterval(timer);
        setTimer(null);
        setRunning(false);
    };

    const handleReset = () => {
        handlePause();
        dispatch({type: 'reset'});
    };

    useEffect(() => {
        if (state.countdown <= 0) {
            handlePause();
            if (props.onFinish) {
                props.onFinish();
            }
        }
    }, [state.countdown]);

    return (
        <div>
            {state.countdown}
            <div>
                <ButtonToolbar>
                    <Button
                        variant="start"
                        onClick={running ? handlePause : handleStart}
                        disabled={state.countdown <= 0}
                    >
                        {running ? 'pause' : 'start'}
                    </Button>
                    <Button
                        variant="reset"
                        onClick={handleReset}
                    >
                        reset
                    </Button>
                </ButtonToolbar>
            </div>
        </div>
    )
};

export default Timer;