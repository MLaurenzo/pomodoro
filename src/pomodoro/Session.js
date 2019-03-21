import React, {useState} from 'react';
import Pomodoro from './Pomodoro.js';
import Break from './Break.js';

const Session = () => {
    const [activity, setActivity] = useState('pomodoro');

    return (
        <div>
            <h1>{activity}</h1>
            {activity === 'pomodoro' && <Pomodoro onFinish={() => setActivity('break')}/>}
            {activity === 'break' && <Break onFinish={() => setActivity('pomodoro')}/>}
        </div>

    )
};

export default Session;