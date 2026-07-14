import "./CodeInline.css";
import type { ReactNode } from "react";

function CodeInline({ children }: { children: ReactNode }) {
    if (!children) {
        return null;
    }

    return <code className="code-inline">{children}</code>;
}

export default CodeInline;
