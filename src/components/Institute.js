import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

function Checker() {
    // const countUpRef = useRef();
    const [viewPortEntered, setViewPortEntered] = useState(false);
    const [viewPortEntered1, setViewPortEntered1] = useState(false);
    const [viewPortEntered2, setViewPortEntered2] = useState(false);
    return (
        <>
        <div className="instcount1">
            <h2 className="text-center mt-3">INSTITUTION IN NUMBERS</h2>
            <div className="container container1">
                <div className="count-text">
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <CountUp end={5000} start={viewPortEntered ? null : 1000} duration = {1}>
                        {({ countUpRef }) => {
                            return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <h4 className="count-text1" ref={countUpRef} />
                                </VisibilitySensor>
                            );
                        }}
                    </CountUp>
                    <span>+</span></div>
                    <div className='ctext'>Students</div>
                </div>
                <div className="count-text">
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <CountUp end={500} start={viewPortEntered ? null : 100} duration = {1}>
                            {({ countUpRef }) => {
                                return (
                                    <VisibilitySensor
                                        active={!viewPortEntered}
                                        onChange={isVisible => {
                                            if (isVisible) {
                                                setViewPortEntered(true);
                                            }
                                        }}
                                        delayedCall
                                    >
                                        <h4 className="count-text1" ref={countUpRef} />
                                    </VisibilitySensor>
                                );
                            }}
                        </CountUp>
                        <span>+</span></div>
                    <div className='ctext'>Faculty and Staff</div>
                </div>
                <div className="count-text">
                    <CountUp end={18} start={viewPortEntered ? null : 0} duration = {1}>
                        {({ countUpRef }) => {
                            return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <h4 className="count-text1" ref={countUpRef} />
                                </VisibilitySensor>
                            );
                        }}
                    </CountUp>
                    <div className='ctext'>Departments</div>
                </div>
                <div className="count-text">
                    <CountUp end={20} start={viewPortEntered ? null : 0} duration = {1}>
                        {({ countUpRef }) => {
                            return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <h4 className="count-text1" ref={countUpRef} />
                                </VisibilitySensor>
                            );
                        }}
                    </CountUp>
                    <div className='ctext'>Clubs and Cells</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checker