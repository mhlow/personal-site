import "./VectorCalculusRouter.css";
import { ReactNode } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

// Page Imports
import Contents from "../contents/Contents";
import Introduction from "../introduction/Introduction";
import Limits from "../limits/Limits";
import ProvingLimits from "../limits/ProvingLimits";
import Continuity from "../continuity/Continuity";

const basePath = "/vector-calculus";

function wrap(page: ReactNode) {
    return (
        <PageWrapper>
            {page}
        </PageWrapper>
    )
}

const pages = [
    ["", <Contents />],
    ["introduction", <Introduction />],
    ["limits", <Limits />],
    ["proving-limits", <ProvingLimits />],
    ["continuity", <Continuity />],
]

export const vectorCalculusRouter = pages.map(([path, page]) => (
    <Route path={`${basePath}/${path}`} element={wrap(page)} key={`${basePath}/${path}`} />
));