import "./ExampleBox.css";
 
function ExampleBox({
    children,
    header,
    fullWidth,
    solutionLabel = "Show solution",
    openByDefault = false,
}: {
    children?: React.ReactNode;
    header?: React.ReactNode;
    fullWidth?: boolean;
    solutionLabel?: string;
    openByDefault?: boolean;
}) {
    return (
        <div className={`example-box ${fullWidth ? "full-width" : ""}`}>
            <span className="example-box-badge">Worked Example</span>
            {header && <div className="example-box-header">{header}</div>}
            <details className="example-box-solution" open={openByDefault}>
                <summary>{solutionLabel}</summary>
                <div className="example-box-solution-content">{children}</div>
            </details>
        </div>
    );
}
 
export default ExampleBox;