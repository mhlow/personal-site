import { useState } from "react";

function Callout( { title, children } : { title: string, children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleCallout = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="callout">
            <div className="calloutHeader" onClick={toggleCallout}>
                <h2>{title}</h2>
                
            </div>
            <div className={`calloutBody ${isExpanded ? "expanded" : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default Callout;