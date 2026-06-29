import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default function Activos() {
  return (
    <div className="space-y-6 animate-fadeIn text-slate-300">
      <MarkdownRenderer filePath="/docs_verseb/05_activos_verseb.md" />
    </div>
  );
}