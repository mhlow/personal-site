import "./CodeBlock.css";
import { codeToHtml } from 'shiki'

const code = 'const a = 1' // input code
const html = await codeToHtml(code, {
  lang: 'javascript',
  theme: 'vitesse-dark'
})

import { createHighlighter } from "shiki"

// Create reusable highlighter (loads grammars once):
const highlighter = await createHighlighter({
  themes: ["one-dark-pro", "github-light"],
  langs: ["javascript", "typescript", "python", "rust", "json"],
})

// Fast repeated highlighting:
const html1 = highlighter.codeToHtml('const x = 1', { lang: "ts", theme: "one-dark-pro" })
const html2 = highlighter.codeToHtml('def main():', { lang: "python", theme: "one-dark-pro" })
const html3 = highlighter.codeToHtml('fn main() {}', { lang: "rust", theme: "one-dark-pro" })

// Dispose when done:
highlighter.dispose()

function CodeBlock({ children, language }: { children: React.ReactNode, language?: string }) {
    return (
        <pre className="code-block">
            {children}
            {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
        </pre>
    );
}

export default CodeBlock;