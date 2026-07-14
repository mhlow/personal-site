import "./KatexInline.css";
import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
 
function KatexInline({ content }: { content: string }) {
    const html = useMemo(() => {
        try {
            return katex.renderToString(content, {
                displayMode: false,
                throwOnError: false,
            });
        } catch (err) {
            console.error("KaTeX failed to render inline expression:", err);
            return "";
        }
    }, [content]);

    if (!content) {
        return null;
    }
 
    return <span className="katex-inline" dangerouslySetInnerHTML={{ __html: html }} />;
}
 
export default KatexInline;