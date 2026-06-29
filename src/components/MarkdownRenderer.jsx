import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownRenderer({ filePath }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setContent(`Error cargando ${filePath}: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [filePath]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-emerald-400 border-r-2 border-emerald-400"></div>
      </div>
    );
  }

  return (
    <div className="markdown-content text-slate-300 space-y-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-black text-white mt-6 mb-4 tracking-tight" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mt-5 mb-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-white mt-4 mb-2" {...props} />,
          h4: ({ node, ...props }) => <h4 className="text-lg font-bold text-slate-200 mt-3 mb-2" {...props} />,
          p: ({ node, ...props }) => <p className="text-slate-300 leading-relaxed mb-3" {...props} />,
          strong: ({ node, ...props }) => <strong className="text-slate-100 font-bold" {...props} />,
          em: ({ node, ...props }) => <em className="italic text-slate-300" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-emerald-400 bg-emerald-400/5 px-4 py-2 my-3 text-slate-300 italic" {...props} />
          ),
          ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 my-3 ml-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 my-3 ml-4" {...props} />,
          li: ({ node, ...props }) => <li className="text-slate-300" {...props} />,
          code: ({ node, inline, ...props }) => 
            inline ? 
              <code className="bg-slate-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono text-sm" {...props} /> :
              <code className="bg-slate-950 text-emerald-300 p-3 rounded-lg font-mono text-sm block overflow-x-auto my-3" {...props} />,
          pre: ({ node, ...props }) => <pre className="bg-slate-950 rounded-lg overflow-x-auto my-3" {...props} />,
          hr: ({ node, ...props }) => <hr className="border-slate-700 my-6" {...props} />,
          table: ({ node, ...props }) => <table className="w-full border-collapse my-4" {...props} />,
          thead: ({ node, ...props }) => <thead className="bg-slate-800" {...props} />,
          tbody: ({ node, ...props }) => <tbody className="divide-y divide-slate-700" {...props} />,
          tr: ({ node, ...props }) => <tr className="divide-x divide-slate-700" {...props} />,
          th: ({ node, ...props }) => <th className="px-4 py-2 text-left text-slate-200 font-bold" {...props} />,
          td: ({ node, ...props }) => <td className="px-4 py-2 text-slate-300" {...props} />,
          a: ({ node, ...props }) => <a className="text-emerald-400 hover:text-emerald-300 underline" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
