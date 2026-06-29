import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default function Controles() {
  return (
    <div className="space-y-6 animate-fadeIn text-slate-300">
      
      {/* Carga del archivo Markdown */}
      <MarkdownRenderer filePath="/docs_verseb/07_controles_verseb.md" />

      {/* Tarjetas de Resumen del Estándar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Fase de Auditoría</span>
          <span className="text-lg font-black text-blue-400 block mt-1">Ingeniería Segura</span>
          <span className="text-[11px] text-blue-400/80 font-mono block mt-0.5">Contramedidas</span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Marco de Referencia</span>
          <span className="text-sm font-mono bg-slate-950 p-1 rounded text-amber-400 block mt-1 text-center font-bold">
            OWASP Proactive
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Controles Aplicados</span>
          <span className="text-xl font-black text-slate-200 block mt-1 text-center bg-slate-950 py-1 rounded">
            3 / 3
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Estado de Cobertura</span>
          <span className="text-xl font-black text-emerald-400 block mt-1">100%</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">Vulnerabilidades Selladas</span>
        </div>
      </div>

      {/* Detalle de Controles Implementados */}
      <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono border-b border-slate-800 pb-2 mt-8">
        🛡️ Desglose Técnico de Contramedidas
      </h3>

      <div className="grid grid-cols-1 gap-6">
        
        {/* Control 01: SQLi */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-900 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Preventivo</span>
              <h4 className="text-emerald-400 font-bold text-sm">C-01: Sentencias Preparadas</h4>
            </div>
            <p className="text-xs text-slate-400">
              Defensa contra <strong>Inyección SQL (SQLi)</strong>. Se eliminó la concatenación dinámica. El driver ahora pre-compila la consulta separando la lógica del set de datos ingresado por el pasajero (ej. RUT).
            </p>
          </div>
          <div className="flex-1 w-full">
            <pre className="text-[10px] font-mono bg-slate-950 p-3 rounded text-slate-300 border border-slate-850 overflow-x-auto w-full">
{`// Refactorización Segura
db.query(
  "SELECT * FROM pasajeros WHERE rut = ?", 
  [rut_ingresado]
);`}
            </pre>
          </div>
        </div>

        {/* Control 02: XSS */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-900 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Preventivo</span>
              <h4 className="text-emerald-400 font-bold text-sm">C-02: Context-Aware Escaping</h4>
            </div>
            <p className="text-xs text-slate-400">
              Defensa contra <strong>XSS Reflejado</strong>. Codificación estricta de parámetros renderizados en el DOM para bloquear la interpretación de etiquetas HTML maliciosas.
            </p>
          </div>
          <div className="flex-1 w-full">
            <pre className="text-[10px] font-mono bg-slate-950 p-3 rounded text-slate-300 border border-slate-850 overflow-x-auto w-full">
{`// Refactorización Segura
// ❌ Antes: elemento.innerHTML = ciudad;
// ✅ Ahora:
elemento.textContent = ciudad;`}
            </pre>
          </div>
        </div>

        {/* Control 03: RCE */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-blue-900 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Correctivo</span>
              <h4 className="text-blue-400 font-bold text-sm">C-03: Invocación Aislada de Binarios</h4>
            </div>
            <p className="text-xs text-slate-400">
              Defensa contra <strong>Inyección de Comandos (RCE)</strong>. Erradicación del uso de terminal de comandos en crudo. Se envían matrices estrictas que el SO no interpreta como metacaracteres.
            </p>
          </div>
          <div className="flex-1 w-full">
            <pre className="text-[10px] font-mono bg-slate-950 p-3 rounded text-slate-300 border border-slate-850 overflow-x-auto w-full">
{`// Refactorización Segura
const { execFile } = require('child_process');

execFile('/bin/ping', [ip_totem], (err, out) => {
  /* ... */
});`}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}