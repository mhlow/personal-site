import "./code block.css";

function InlineCodeBlock({ children }: { children: React.ReactNode }) {
    return (
        <div className="inlineCodeBlock">
            {children}
        </div>
    );
}

export default InlineCodeBlock;