import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../contexts/ThemeContext';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`prose prose-lg max-w-none ${
      isDarkMode 
        ? 'prose-invert prose-headings:text-white prose-p:text-white prose-strong:text-white prose-em:text-white prose-ul:text-white prose-ol:text-white prose-li:text-white prose-blockquote:text-white prose-code:text-white prose-pre:bg-gray-800 prose-blockquote:border-gray-600 prose-hr:border-gray-600' 
        : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-em:text-gray-700 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:text-gray-700 prose-code:text-gray-800 prose-pre:bg-gray-50 prose-blockquote:border-gray-300 prose-hr:border-gray-300'
    }`}>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={isDarkMode ? oneDark : tomorrow as any}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  backgroundColor: isDarkMode ? '#1e293b' : '#f8f9fa',
                  borderRadius: '0.5rem',
                  margin: '1rem 0',
                }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={`${className} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} px-1 py-0.5 rounded text-sm`} {...props}>
                {children}
              </code>
            );
          },
          // Override paragraph component to ensure proper text color
          p({ children, ...props }) {
            return (
              <p className={isDarkMode ? 'text-white' : 'text-gray-700'} {...props}>
                {children}
              </p>
            );
          },
          // Override heading components
          h1({ children, ...props }) {
            return (
              <h1 className={isDarkMode ? 'text-white' : 'text-gray-900'} {...props}>
                {children}
              </h1>
            );
          },
          h2({ children, ...props }) {
            return (
              <h2 className={isDarkMode ? 'text-white' : 'text-gray-900'} {...props}>
                {children}
              </h2>
            );
          },
          h3({ children, ...props }) {
            return (
              <h3 className={isDarkMode ? 'text-white' : 'text-gray-900'} {...props}>
                {children}
              </h3>
            );
          },
          h4({ children, ...props }) {
            return (
              <h4 className={isDarkMode ? 'text-white' : 'text-gray-900'} {...props}>
                {children}
              </h4>
            );
          },
          h5({ children, ...props }) {
            return (
              <h5 className={isDarkMode ? 'text-white' : 'text-gray-900'} {...props}>
                {children}
              </h5>
            );
          },
          h6({ children, ...props }) {
            return (
              <h6 className={isDarkMode ? 'text-white' : 'text-gray-900'} {...props}>
                {children}
              </h6>
            );
          },
          // Override list components
          ul({ children, ...props }) {
            return (
              <ul className={isDarkMode ? 'text-white' : 'text-gray-700'} {...props}>
                {children}
              </ul>
            );
          },
          ol({ children, ...props }) {
            return (
              <ol className={isDarkMode ? 'text-white' : 'text-gray-700'} {...props}>
                {children}
              </ol>
            );
          },
          li({ children, ...props }) {
            return (
              <li className={isDarkMode ? 'text-white' : 'text-gray-700'} {...props}>
                {children}
              </li>
            );
          },
          // Override blockquote component
          blockquote({ children, ...props }) {
            return (
              <blockquote className={`${isDarkMode ? 'text-white border-gray-600' : 'text-gray-700 border-gray-300'} border-l-4 pl-4 italic`} {...props}>
                {children}
              </blockquote>
            );
          },
          // Override strong and em components
          strong({ children, ...props }) {
            return (
              <strong className={isDarkMode ? 'text-white' : 'text-gray-900'} {...props}>
                {children}
              </strong>
            );
          },
          em({ children, ...props }) {
            return (
              <em className={isDarkMode ? 'text-white' : 'text-gray-700'} {...props}>
                {children}
              </em>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 