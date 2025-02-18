import { useState, useRef } from "react";
import "./callout.css";
import AnimatedText from "../animated text hover/animated text";

function Callout( { title, children, defaultOpen = false } : { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(defaultOpen);
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(defaultOpen ? ref.current?.clientHeight : 0);
    

    const toggleCallout = () => {
        setIsExpanded(!isExpanded);
        if (ref.current) {
            setHeight(ref.current.clientHeight);
        }
    }

    return (
        <div className="callout">
            <div className="calloutHeader" onClick={toggleCallout}>
                <h2>
                    <AnimatedText>
                        {title}
                    </AnimatedText>
                </h2>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`calloutIcon ${isExpanded ? "expanded" : ""}`}>
                    <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F" stroke-width="2" stroke="var(--icon-contrast-default)"/>
                </svg>
            </div>
            <div className="calloutCollapse" style={{ height: isExpanded ? height : 0 + ""}}>
                <div className={`calloutBody ${isExpanded ? "expanded" : ""}`} ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Callout;