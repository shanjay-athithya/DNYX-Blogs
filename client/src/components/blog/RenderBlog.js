import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const mdxComponents = {
  h1: ({ node, ...props }) => (
    <h1
      className="text-4xl font-extrabold text-gray-900 mb-6 mt-8 dark:text-gray-100"
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <h2
      className="text-3xl font-bold text-gray-800 mb-4 mt-6 border-b border-gray-300 pb-2 dark:text-gray-200 dark:border-gray-600"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <h3
      className="text-2xl font-semibold text-gray-700 mb-4 mt-5 dark:text-gray-300"
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <p className="text-base leading-7 text-gray-600 mb-5 dark:text-gray-400" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc list-inside text-gray-600 mb-5 pl-5 dark:text-gray-400" {...props} />
  ),
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        className="rounded-lg shadow-md my-4 dark:bg-gray-800"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code
        className={`${className} bg-gray-100 text-red-600 rounded px-1 py-0.5 dark:bg-gray-800 dark:text-red-400`}
        {...props}
      >
        {children}
      </code>
    );
  }
};

const RenderBlog = ({ blog }) => {
  if (!blog?.sections) {
    return <div className="text-center text-gray-500 py-8 dark:text-gray-300">No content available for this blog.</div>;
  }

  return (
    <div className="col-span-8 font-in rounded-lg my-2">
      {blog.sections.map((section, index) => {
        switch (section.type) {
          case 'heading':
            const HeadingTag = `h${section.level}`;
            return (
              <HeadingTag
                key={index}
                className={`text-${5 - section.level}xl font-extrabold text-gray-${900 - section.level * 100} my-4 dark:text-gray-${100 + section.level * 100} underline`}
              >
                {section.content}
              </HeadingTag>
            );
          case 'paragraph':
            return <ReactMarkdown key={index} components={mdxComponents}>{section.content}</ReactMarkdown>;
          case 'list':
            return (
              <ul key={index} className="list-disc list-inside text-gray-700 mb-6 pl-5 dark:text-gray-400">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">{item}</li>
                ))}
              </ul>
            );
          case 'code':
            return (
              <SyntaxHighlighter
                key={index}
                style={oneDark}
                language={section.language}
                PreTag="div"
                className="rounded-lg shadow-md my-4 p-4 dark:bg-gray-800"
              >
                {section.content}
              </SyntaxHighlighter>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default RenderBlog;
