import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyIcon = lazy(() => import('./Assets/Icons').then(module => ({ default: module.CopyIcon })));
const PasteIcon = lazy(() => import('./Assets/Icons').then(module => ({ default: module.PasteIcon })));

const Code = ({ children, language }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [copied]);

    return (
        <div className="code">
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
                <button className='icon copy-icon'>
                    <Suspense fallback={<div>Loading...</div>}>
                        {copied ? <PasteIcon /> : <CopyIcon />}
                    </Suspense>
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language={language}
                style={materialDark}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export default Code;
