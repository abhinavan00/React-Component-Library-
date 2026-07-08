import { LuInbox } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import './Tooltip.css'

export default function Tooltip() {
    return (
       <div className="tooltip">
            <RxCross2 className="tooltip-close-btn"/>
            <div className="tooltip-details">
                <div className="tooltip-title">
                    <LuInbox className="tooltip-icon"/>
                    <span>Archive notes</span>
                </div>
                <p className="tooltip-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </p>
            </div>
            <div className="tip"></div>
       </div>
    )
}