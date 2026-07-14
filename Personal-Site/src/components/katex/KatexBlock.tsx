import "./KatexBlock.css";
import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
 
function KatexBlock({ content }: { content: string }) {
    const html = useMemo(() => {
        try {
            return katex.renderToString(content, {
                displayMode: true,
                throwOnError: false,
            });
        } catch (err) {
            console.error("KaTeX failed to render block:", err);
            return "";
        }
    }, [content]);
 
    if (!content) {
        return null;
    }
 
    return (
        <div className="katex-block">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}
 
export default KatexBlock;