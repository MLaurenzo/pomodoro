import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Timer = (props) => {
    const [countdown, setCountdown] = useState(props.duration);
    const [running, setRunning] = useState(false);
    const [timer, setTimer] = useState(null);

    function handleStart() {
        setRunning(true)
    }

    function handlePause() {
        setRunning(false)
    }

    function handleReset() {
        setRunning(false);
        setCountdown(props.duration)
    }

    function decrementCountdown() {
        setCountdown(countdown => {
            if (countdown > 0) {
                return countdown - 1
            } else {
                clearInterval(timer);
                setTimer(null);
                return 0;
            }
        });
    }

    useEffect(() => {
        console.log("running changed")
        if (running) {
            const timer = setInterval(decrementCountdown, 1000);
            setTimer(timer)
        } else {
            clearInterval(timer);
        }
    }, [running]);

    return (
        <div>
            {countdown}
            <div>
                <ButtonToolbar>
                    <Button
                        variant="start"
                        onClick={running ? handlePause : handleStart}
                        disabled={countdown <= 0}
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
}

export default Timer;