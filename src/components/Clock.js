import React, { useEffect, useState } from 'react'

function Clock() {
    const [currtime, setCurrtime] = useState('');
    const handletime = () => {
        var time = new Date();
        let hrs = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        // console.log(min.length, typeof(min));
        let curr = '';
        let apm = 'AM';
        if (hrs > 12) { hrs -= 12; apm = 'PM'; }
        if (hrs < 10) {
            curr += "0" + hrs;
        }
        else {
            curr += hrs;
        }
        if (min < 10) {
            // console.log(min);
            curr += ":0" + min;
        }
        else {
            curr += ':' + min;
        }
        if (sec < 10) {
            curr += ":0" + sec;
        }
        else {
            curr += ':' + sec;
        }
        curr += ' ' + apm;
        // let curr = hrs + ":" + min + ':' + sec;
        setCurrtime(curr)
    }
    useEffect(() => {
        const timeint = setInterval(() => {
            handletime();
        }, 1000);
        return ()=>{
            clearInterval(timeint);
        }
        // console.log(currtime);
    }, [currtime])
    return (
        <>
            <div className="wrapper p-2">
                <div className="display flex items-center justify-center">
                    <div id="time">{currtime}
                    </div>
                </div>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default Clock