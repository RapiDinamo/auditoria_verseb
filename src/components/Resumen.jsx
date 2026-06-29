import React from 'react';

export default function Resumen() {
  return (
    // Agregamos padding externo (p-8) y límite de ancho (max-w-6xl)
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-fadeIn text-slate-300">
      
      {/* Título Principal para dar jerarquía */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">Informe Técnico de Auditoría</h1>
        <p className="text-slate-400 mt-2">Visión global de seguridad y hallazgos en TurBus Digital.</p>
      </div>
      
      {/* Encabezado del Resumen con gradiente sutil */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-xl shadow-xl">
        <p className="text-emerald-400 font-mono text-sm mt-1">Resumen Ejecutivo</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs font-mono">
          <div>
            <span className="text-slate-500 block uppercase font-bold">Equipo Consultor</span>
            <span className="text-white text-sm font-sans font-medium block mt-1">Sebastián V.</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold">Plataforma Evaluada</span>
            <span className="text-white text-sm font-sans font-medium block mt-1">TurBus Digital</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold">Metodología</span>
            <span className="text-white text-sm font-sans font-medium block mt-1">NIST SP 800-30 & OWASP Top 10</span>
          </div>
        </div>
      </div>

      {/* Contexto Técnico */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-xl shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
          🌐 Contexto Técnico y Objetivo General
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          El presente proceso de auditoría y aseguramiento de software se ejecutó con la finalidad de identificar brechas de seguridad, fallos de inyección y debilidades lógicas presentes en el ecosistema informático de <strong className="text-slate-200">TurBus Digital</strong>. La evaluación abarca desde el análisis de la persistencia de datos (SQL) hasta los vectores de ejecución en el lado del servidor y cliente (OS Command Injection y XSS).
        </p>
      </div>

      {/* Hallazgos Críticos */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-xl shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
          📊 Resumen de Hallazgos Críticos
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0" />
            <p className="text-sm text-slate-400">
              <strong className="text-slate-200">Vulnerabilidades Detectadas:</strong> 3 (1 Crítica, 1 Alta, 1 Media).
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 shrink-0" />
            <p className="text-sm text-slate-400">
              <strong className="text-slate-200">Riesgo Máximo Identificado:</strong> Exfiltración completa de la Base de Datos (Puntaje de Riesgo: 15 - Crítico bajo NIST SP 800-30).
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
            <p className="text-sm text-slate-400">
              <strong className="text-slate-200">Estatus Actual de Mitigación:</strong> 75% de los controles recomendados ya han sido desarrollados e implementados en el código fuente.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-950/60 border border-slate-850 rounded-lg text-xs font-mono text-slate-500 leading-relaxed">
          * Nota de Cumplimiento: La metodología aplicada para la estimación de impactos, probabilidades y criticidad se rige bajo las pautas internacionales del estándar NIST SP 800-30 y las clasificaciones del top 10 de OWASP 2021.
        </div>
      </div>
    </div>
  );
}