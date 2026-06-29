import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
// Importamos tus imágenes de comandos
import cmdPayload from '../assets/img_verseb/cmd_payload.png';
import cmdResultado from '../assets/img_verseb/cmd_resultado.png';

export default function Comandos() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-fadeIn text-slate-300">
      
      {/* Carga del Markdown */}
      <div className="bg-[#1e293b] border border-slate-700 p-8 rounded-2xl shadow-lg">
        <MarkdownRenderer filePath="/docs_verseb/04_comandos_verseb.md" />
      </div>

      {/* Grid de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Severidad CVSS</span>
          <span className="block mt-2 text-2xl font-black text-red-500">10.0 / 10.0</span>
          <span className="text-[11px] text-red-400/70 font-mono">CRÍTICA - RCE</span>
        </div>
        
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Vector de Ataque</span>
          <code className="block mt-2 text-red-400 font-mono text-sm bg-[#0f172a] p-3 rounded border border-slate-700">
            192.168.1.50; cat /etc/passwd
          </code>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Estado</span>
          <span className="block mt-2 text-emerald-400 text-xl font-black uppercase">Mitigado</span>
          <span className="text-[11px] text-emerald-400/70">ExecFile & Listas Blancas</span>
        </div>
      </div>

      {/* Mecanismo y Evidencias */}
      <div className="bg-[#1e293b] border border-slate-700 p-8 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-white mb-6">💡 Mecanismo de Inyección RCE</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
             <p className="text-sm text-slate-400 leading-relaxed">
               La concatenación insegura permite que el shell del SO interprete el carácter <code>;</code> como un separador, ejecutando instrucciones arbitrarias con privilegios de sistema.
             </p>
             <div className="p-4 bg-[#0f172a] rounded-lg border border-slate-700">
               <p className="text-xs text-slate-300 font-mono italic">
                 "El uso de funciones como exec() sin validación transforma una entrada de diagnóstico en un punto de entrada para ejecución remota."
               </p>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <img src={cmdPayload} alt="CMD Payload" className="rounded-xl border border-slate-700 shadow-md hover:scale-[1.02] transition-transform duration-300" />
            <img src={cmdResultado} alt="CMD Resultado" className="rounded-xl border border-slate-700 shadow-md hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}