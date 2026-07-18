import "./font styles.css";
import { ReactNode } from "react";

function Bold({ children }: { children: ReactNode }) {
    return <span className="font-bold">{children}</span>;
}

function Italic({ children }: { children: ReactNode }) {
    return <span className="font-italic">{children}</span>;
}

function Underline({ children }: { children: ReactNode }) {
    return <span className="font-underline">{children}</span>;
}

function Strikethrough({ children }: { children: ReactNode }) {
    return <span className="font-strikethrough">{children}</span>;
}

export { Bold, Italic, Underline, Strikethrough };
