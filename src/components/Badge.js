'use client';
import CountUp from "react-countup";

const Badge = ({containerStyle, icon, endCountNum, endCountText, BadgeText}) => {
  return <div className={`z-10 w-auto min-w-[210px] h-[68px] bg-light shadow-2xl p-4 rounded-[10px] flex items-center gap-x-4 ${containerStyle}`}>
        <div className="text-3xl text-dark">{icon}</div>
        <div className="flex items-center gap-x-2">
            <div className="text-4xl leading-none font-bold text-primary">
                <CountUp end={endCountNum} delay={1} duration={4}/>
                {endCountText}
            </div>
            <div className="max-w-[70px] leading-none text-[15px] font-medium text-dark">{BadgeText}</div>
        </div>
  </div>
};

export default Badge
