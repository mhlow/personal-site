import "./BlockQuote.css";

function BlockQuote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote className="blockquote">
            {children}
        </blockquote>
    )
}

export default BlockQuote;