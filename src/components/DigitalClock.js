export default function DigitalClock(props) {
    const startOfYear = new Date(`Jan 1 ${props.time.getFullYear()}`);
    const msPassedThisYear = props.time.getTime() - startOfYear.getTime(); 
    const daysPassedThisYear = Math.floor(msPassedThisYear / 86400000);
    return (
        <>
            <div className="title">Regular Clock</div>
            <div>{props.time.toLocaleTimeString('en-US')}</div>
            {/* {!props.newVersion && <div className="date">{new Date(startOfYear.setDate(daysPassedThisYear+1)).toDateString()}</div>} */}
            {!props.newVersion && <div className="days">{daysPassedThisYear} regular days have passed since the start of this year.</div>}
        </>
    );
}