import {useState, useEffect, useRef} from 'react'
import styles from './Stopwatch.module.css'

function Stopwatch(){

    let [time, setTime] = useState(0);
    let [isRunning, setIsRunning] = useState(false);
    let intervalId = useRef(null);

    useEffect(()=>{
        if(isRunning){
            intervalId.current = setInterval(()=>{
                setTime(t=>t+10);
            },10)
        }

        return ()=>{
            clearInterval(intervalId.current);
        }
    }, [isRunning])

    const startTimeHandle = () =>{
        setIsRunning(true);
    }

    const resetTimeHandle = () =>{
        setIsRunning(false);
        setTime(0);
    }

    const stopTimeHandle = () =>{
        setIsRunning(false);
    }

    const formatTime = () =>{
        let millisecs = Math.floor((time%1000)/10);
        let seconds = (Math.floor(time/1000))%60;
        let minutes = (Math.floor(time/(1000*60)))%60;

        millisecs = padZero(millisecs);
        seconds = padZero(seconds);
        minutes = padZero(minutes);

        return `${minutes}:${seconds}:${millisecs}`;
    }

    const padZero = (num)=>{
        return (num<10 ? "0" : "") + num;
    }

    return(<div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <div className={styles.stopwatchContainer}>
            <p>{formatTime()}</p>
            <div className={styles.buttons}>
                <button className={styles.start} onClick={startTimeHandle}>Start</button>
                <button className={styles.stop} onClick={stopTimeHandle}>Stop</button>
                <button className={styles.reset} onClick={resetTimeHandle}>Reset</button>
            </div>
        </div>
    </div>)
}

export default Stopwatch;