import React, { useEffect, useState, lazy, Suspense } from "react";
import Markdown from 'markdown-to-jsx';
import './Docs.css';
import { useParams } from "react-router-dom";
import SeeFile from "./SeeFile";

const Code = lazy(() => import("./Code"));
const InlineCode = lazy(() => import("./InlineCode"));
const MarkdownNotFound = lazy(() => import("./MarkdownNotFound"));
const Links = ({ children, href }) => <u><a target="_blank" href={href}>{children}</a></u>

const Docs = () => {
    const { language, name } = useParams();
    const [postContent, setPostContent] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const article = await import(`../markdown/${language}/${name}.md?raw`);
                setPostContent(article.default);
                setIsError(false);
            } catch (error) {
                console.error("Error loading markdown file:", error);
                setPostContent("Error loading article.");
                setIsError(true);
            }
        };

        fetchMarkdown();
    }, [language, name]);

    if (isError) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <MarkdownNotFound />
            </Suspense>
        );
    }

    return (
        <article className="article">
            <div className="container">
                <div className="post-wrapper">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Markdown options={{
                            overrides: {
                                code: {
                                    component: Code
                                },
                                span: {
                                    component: InlineCode
                                },
                                button: {
                                    component: SeeFile
                                },
                                a: {
                                    component: Links
                                }
                            }
                        }}>
                            {postContent}
                        </Markdown>
                    </Suspense>
                </div>
            </div>
        </article>
    );
};

export default Docs;