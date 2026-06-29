import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default function Prompts() {
  return (
    <div className="space-y-6 animate-fadeIn text-slate-300">
      <MarkdownRenderer filePath="/docs_verseb/09_prompts_verseb.md" />
    </div>
  );
}