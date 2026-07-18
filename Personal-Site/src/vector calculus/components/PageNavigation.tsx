import "./PageNavigation.css";
import NextArrowRight from "./NextArrowRight.svg";
import NextArrowLeft from "./NextArrowLeft.svg";
import { Link } from "react-router-dom";

function PageNavigation({ backURL, backLabel, nextURL, nextLabel }: { backURL?: string, backLabel?: string, nextURL?: string, nextLabel?: string }) {
    return (
        <div className="page-navigation-container">
            {backURL && <Link to={backURL} className="page-navigation-link-back">
                <img src={NextArrowLeft} alt="Previous Arrow" className="next-arrow-left" />
                <div className="page-navigation-label-container-back">
                    <span className="page-navigation-label-direction">Previous Page</span>
                    <span className="page-navigation-label-back">{backLabel || "Previous"}</span>
                </div>
            </Link>}
            {!backURL && <div></div>}
            
            {nextURL && <Link to={nextURL} className="page-navigation-link-next">
                <div className="page-navigation-label-container-next">
                    <span className="page-navigation-label-direction">Next Page</span>
                    <span className="page-navigation-label-next">{nextLabel || "Next"}</span>
                </div>
                <img src={NextArrowRight} alt="Next Arrow" className="next-arrow-right" />
            </Link>}
            {!nextURL && <div></div>}
        </div>
    );
}

export default PageNavigation;