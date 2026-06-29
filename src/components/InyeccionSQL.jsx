import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
// Importamos tus imágenes desde la ruta correcta
import sqliPayload from '../assets/img_verseb/sqli_payload.png';
import sqliResultado from '../assets/img_verseb/sqli_resultado.png';

export default function InyeccionSQL() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-fadeIn text-slate-300">
      
      {/* Carga del Markdown Principal */}
      <div className="bg-[#1e293b] border border-slate-700 p-8 rounded-2xl shadow-lg">
        <MarkdownRenderer filePath="/docs_verseb/02_sqli_verseb.md" />
      </div>

      {/* Grid de Métricas y Estado */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Severidad CVSS</span>
          <span className="block mt-2 text-2xl font-black text-red-500">9.8 / 10.0</span>
          <span className="text-[11px] text-red-400/70 font-mono">CRÍTICO - RIESGO ALTO</span>
        </div>
        
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Vector Principal</span>
          <code className="block mt-2 text-amber-400 font-mono text-sm bg-[#0f172a] p-3 rounded border border-slate-700">
            1' OR '1'='1
          </code>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Estado</span>
          <span className="block mt-2 text-emerald-400 text-xl font-black uppercase">Mitigado</span>
          <span className="text-[11px] text-emerald-400/70">Consultas Parametrizadas</span>
        </div>
      </div>

      {/* Visualización de Concepto y Evidencias */}
      <div className="bg-[#1e293b] border border-slate-700 p-8 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-white mb-6">💡 Mecanismo y Evidencia SQLi</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Explicación textual */}
          <div className="space-y-4">
             <p className="text-sm text-slate-400 leading-relaxed">
               El atacante manipula la estructura de la consulta original para inyectar una lógica booleana que siempre resulta en <code>TRUE</code>, ignorando la verificación de contraseña. A continuación se detallan las fases de la intrusión:
             </p>
             <div className="p-4 bg-[#0f172a] rounded-lg border border-slate-700">
               <p className="text-xs text-slate-300 font-mono italic">"La inyección altera la clausura de la consulta, permitiendo el bypass del acceso mediante la inyección de metacaracteres."</p>
             </div>
          </div>

          {/* Grid de imágenes */}
          <div className="grid grid-cols-1 gap-4">
            <img src={sqliPayload} alt="SQLi Payload" className="rounded-xl border border-slate-700 shadow-md hover:scale-[1.02] transition-transform duration-300" />
            <img src={sqliResultado} alt="SQLi Resultado" className="rounded-xl border border-slate-700 shadow-md hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}