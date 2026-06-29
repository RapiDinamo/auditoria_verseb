import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

// Importamos tus imágenes
import xssPayload from '../assets/img_verseb/xss_payload.jpeg';
import xssResultado from '../assets/img_verseb/xss_resultado.jpeg';

export default function XSS() {
  return (
    // Fondo oscuro profundo
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-fadeIn text-slate-300">
      
      {/* Carga del Markdown Principal */}
      <div className="bg-[#1e293b] border border-slate-700 p-8 rounded-2xl shadow-lg">
        <MarkdownRenderer filePath="/docs_verseb/03_xss_verseb.md" />
      </div>

      {/* Grid de Métricas y Estado */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Severidad CVSS</span>
          <span className="block mt-2 text-2xl font-black text-amber-500">6.1 / 10.0</span>
          <span className="text-[11px] text-amber-400/70 font-mono">MEDIO - RIESGO ESCALABLE</span>
        </div>
        
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Vector de Ataque</span>
          <code className="block mt-2 text-amber-400 font-mono text-sm bg-[#0f172a] p-3 rounded border border-slate-700 break-words">
            {"<script>alert(1)</script>"}
          </code>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Estado</span>
          <span className="block mt-2 text-emerald-400 text-xl font-black uppercase">Mitigado</span>
          <span className="text-[11px] text-emerald-400/70">Context Encoding / Sanitization</span>
        </div>
      </div>

      {/* Visualización de Concepto con tus imágenes */}
      <div className="bg-[#1e293b] border border-slate-700 p-8 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-white mb-6">📸 Evidencias de Explotación</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen 1 */}
          <div className="space-y-3">
             <p className="text-sm text-slate-400 italic">Fase 1: Inyección del Payload</p>
             <img src={xssPayload} alt="Payload XSS" className="rounded-xl border border-slate-700 shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
          
          {/* Imagen 2 */}
          <div className="space-y-3">
             <p className="text-sm text-slate-400 italic">Fase 2: Ejecución en Navegador</p>
             <img src={xssResultado} alt="Resultado XSS" className="rounded-xl border border-slate-700 shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

    </div>
  );
}