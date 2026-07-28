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
import Differentiability from "../differentiability/Differentiability";

const basePath = "/vector-calculus";

function wrap(page: ReactNode) {
    return (
        <PageWrapper>
            {page}
        </PageWrapper>
    )
}

const pages: Array<[string, string, ReactNode]> = [
    ["Contents", "", <Contents />],
    ["Introduction", "introduction", <Introduction />],
    ["Limits", "limits", <Limits />],
    ["Proving Limits", "proving-limits", <ProvingLimits />],
    ["Continuity", "continuity", <Continuity />],
    ["Differentiability", "differentiability", <Differentiability />],
]

export const vectorCalculusRouter = pages.map(([_title, path, page]) => (
    <Route path={`${basePath}/${path}`} element={wrap(page)} key={`${basePath}/${path}`} />
));

export { pages as vectorCalculusPages };