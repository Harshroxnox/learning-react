import { useState, useEffect } from "react";
import styles from './Clock.module.css';

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        // setInterval runs this code every sec (1000ms)
        let intervalId = setInterval(()=>setTime(new Date()), 1000);

        // Cleanup code 
        return ()=>{
            clearInterval(intervalId);
        }
    }, [])// Only runs when the component is first mounted

    const formatTime = ()=>{
        // get hours, minutes, secs, meridiem
        const meridiem = time.getHours() < 12 ? "AM":"PM";
        let hours = time.getHours();
        hours = hours>12 ? hours-12 : (hours==0 ? 1 : hours);
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        // add 0 in front if necessary 
        hours = padZero(hours);
        minutes = padZero(minutes);
        seconds = padZero(seconds);

        // format it 
        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    const padZero = (num) => {
        return (num<10 ? "0" : "") + num;
    }

    return(<div className={styles.clock}>
        <h2>Clock</h2>
        <span>{formatTime()}</span>
    </div>);
}

export default Clock;