import { LuInbox } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import './Tooltip.css'

export default function Tooltip({variant}) {
    return (
       <div className={`tooltip ${variant}`}>
            <RxCross2 className={`tooltip-close-btn`}/>
            <div>
                <div className="tooltip-title">
                    <LuInbox className={`tooltip-icon`}/>
                    <span className={variant}>Archive notes</span>
                </div>
                <p className={`tooltip-text`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </p>
            </div>
            <div className={`tip`}></div>
       </div>
    )
}