import "./InlineCode.css";
import type { ReactNode } from "react";

function InlineCode({ children }: { children: ReactNode }) {
    if (!children) {
        return null;
    }

    return <code className="inline-code">{children}</code>;
}

export default InlineCode;
