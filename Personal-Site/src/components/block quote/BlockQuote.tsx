import "./BlockQuote.css";

function BlockQuote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote className="block-quote">
            {children}
        </blockquote>
    )
}

export default BlockQuote;