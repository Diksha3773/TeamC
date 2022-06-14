import React from "react";

import CompImg from './Img/CompImg.png'
import StudImg from './Img/StudImg.png'
import rupee from './Img/rupee.png'
import idea from './Img/idea.png'
// import CountUp from "react-countup";
// import VisibilitySensor from 'react-visibility-sensor';
function Count() {
    // const countUpRef = useRef();
    return (
        <div className="instcount">
            <h2 className="text-center mt-3" style={{font:"bold"}}>PLACEMENT STATS</h2>
            <div className="container container1">
                <div className="count-text">
                    <img src={StudImg} alt="..." style={{width:"59px",height:"70px"}}/>
                    <div className = 'ptext'>995+ Students Placed</div>
                </div>
                <div className="count-text">
                <img src={CompImg} alt="..." style={{width:"55px",height:"70px"}}/>
                
                    <div className = 'ptext'>90+ Companies Visited</div>
                </div>
                <div className="count-text">
                   <img src={rupee} alt="..." style={{width:"55px",height:"70px"}}/>
      
                    <div className = 'ptext'> Highest Package 44 Lac.p.a</div>
                </div>
                <div className="count-text">
                   <img src={idea} alt="..." style={{width:"55px",height:"70px"}}/>
                    
                    <div className = 'ptext'>15 Ideas turned Startup Companies</div>
                </div>
            </div>
        </div>
    )
}

export default Count