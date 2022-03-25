import { useState, useEffect } from 'react';

export default function DecaClock(props) {
    const [decaTime, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 864);

        return () => { clearInterval(intervalId) };
    }, [setTime]);

    const time = props.newVersion ? decaTime : props.time;
    const msInSecond = props.newVersion ? 864 : 1000;

    const startOfYear = new Date(`Jan 1 ${time.getFullYear()}`);
    const msPassedThisYear = time.getTime() - startOfYear.getTime();
    const decaSecondsPassedThisYear = Math.floor(msPassedThisYear / msInSecond);
    const decaMinutesPassedThisYear = Math.floor(decaSecondsPassedThisYear / 100);
    const decaHoursPassedThisYear = Math.floor(decaMinutesPassedThisYear / 100);
    const daysPassedThisYear = Math.floor(decaHoursPassedThisYear / 10);

    const currentSecond = decaSecondsPassedThisYear % 100;
    const currentMinute = decaMinutesPassedThisYear % 100;
    const currentHour = decaHoursPassedThisYear % 10;
    
    return (
        <>
            <div className="title">Decaclock</div>
            <div>{String(currentHour).padStart(2, '0')}:{String(currentMinute).padStart(2, '0')}:{String(currentSecond).padStart(2, '0')}</div>
            {/* { !props.newVersion && <div className="date">{new Date(startOfYear.setDate(daysPassedThisYear+1)).toDateString()}</div>} */}
            { !props.newVersion && <div className="days">{daysPassedThisYear} Decadays have passed since the start of this year.</div> }
            
        </>
        
    )
}