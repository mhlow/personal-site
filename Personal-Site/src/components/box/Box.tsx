import "./Box.css";

function Box({ children, header, fullWidth }: { children: React.ReactNode, header?: string, fullWidth?: boolean }) {
    return (
        <div className={`box ${fullWidth ? 'full-width' : ''}`}>
            {header && <div className="box-header">{header}</div>}
            {children}
        </div>
    )
}

export default Box;