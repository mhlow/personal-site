import "./CodeBlock.css";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { createCssVariablesTheme, createHighlighter } from "shiki";
import CopyIcon from "./CopyIcon";

const myTheme = createCssVariablesTheme({
    name: 'css-variables',
    variablePrefix: '--shiki-',
    variableDefaults: {},
    fontStyle: true
})

const highlighterPromise = createHighlighter({
    themes: [myTheme, "one-dark-pro", "github-light"],
    langs: ["javascript", "typescript", "python", "rust", "json"],
});

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        void highlighterPromise.then((highlighter) => {
            highlighter.dispose();
        });
    });
}

function newLine(str: string) {
    // Converts escaped newlines to actual newlines (needs a space)
    return str.replace(/(?:\\n)+ /g, (match) => "\n".repeat(match.match(/\\n/g)?.length ?? 0));
}

function CodeBlock({ children, language, showLineNumbers = true }: { children: ReactNode; language: string; showLineNumbers?: boolean }) {
    const [htmlCode, setHtmlCode] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        let cancelled = false;

        if (!children) {
            setHtmlCode("");
            return;
        }

        void highlighterPromise.then((highlighter) => {
            if (cancelled) {
                return;
            }

            setHtmlCode(
                highlighter.codeToHtml(newLine(String(children)), {
                    lang: language,
                    theme: myTheme,
                })
                // highlighter.codeToHtml(String("const a = 1;\r\nconst b = 2;\r\n\r\nconsole.log(a + b);"), {
                //     lang: language,
                //     theme: "one-dark-pro",
                // })
            );
        });

        return () => {
            cancelled = true;
        };
    }, [children, language]);

    if (!children) {
        return null;
    }

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(newLine(String(children)));
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy code", err);
        }
    }

    return (
        <pre className={`code-block ${showLineNumbers ? "line-numbers" : ""}`}>
            <button
                type="button"
                className={`code-block-copy-btn${copied ? " copied" : ""}`}
                onClick={handleCopy}
                aria-label={copied ? "Copied" : "Copy code"}
                title={copied ? "Copied!" : "Copy"}
            >
                <CopyIcon className="code-block-copy-icon" />
            </button>
            {htmlCode && <div dangerouslySetInnerHTML={{ __html: htmlCode }} />}
        </pre>
    );
}

export default CodeBlock;