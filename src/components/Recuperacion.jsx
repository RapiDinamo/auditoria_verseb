import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default function Recuperacion() {
  return (
    <div className="space-y-6 text-slate-300 animate-fadeIn">
      {/* Carga del archivo Markdown */}
      <MarkdownRenderer filePath="/docs_verseb/08_recuperacion_verseb.md" />

      {/* Tarjetas de SLA (RTO/RPO) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between shadow-md">
          <div className="space-y-1">
            <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wide">RTO (Recovery Time Objective)</h4>
            <p className="text-[11px] text-slate-500 leading-tight">Tiempo máximo tolerable de caída del sistema antes de restaurar servicios.</p>
          </div>
          <div className="text-right pl-4">
            <span className="text-xl font-mono font-black text-cyan-400 block">&lt; 30 Mins</span>
            <span className="text-[9px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-1.5 py-0.5 rounded uppercase font-bold">UMBRAL CRÍTICO</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between shadow-md">
          <div className="space-y-1">
            <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wide">RPO (Recovery Point Objective)</h4>
            <p className="text-[11px] text-slate-500 leading-tight">Pérdida máxima aceptable de datos medido en tiempo de transacciones.</p>
          </div>
          <div className="text-right pl-4">
            <span className="text-xl font-mono font-black text-amber-400 block">Max 4 Hrs</span>
            <span className="text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded uppercase font-bold">BACKUP CRON</span>
          </div>
        </div>
      </div>

      {/* Checklist Operacional de Incidentes */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4 shadow-md">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono text-cyan-400">📋 Protocolo de Contención para Administradores de Turno</h3>
        
        <div className="space-y-2 text-xs">
          <div className="p-3 bg-slate-950 rounded border border-slate-850 flex items-start gap-3">
            <div className="p-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded font-mono font-bold text-[10px]">PASO 01</div>
            <div>
              <h4 className="font-bold text-slate-200">Aislamiento Perimetral y Contención de Tráfico</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">En caso de explotación de RCE, aislar las instancias del contenedor del backend y desviar el tráfico HTTP de TurBus Digital hacia una landing page estática en AWS CloudFront.</p>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded border border-slate-850 flex items-start gap-3">
            <div className="p-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded font-mono font-bold text-[10px]">PASO 02</div>
            <div>
              <h4 className="font-bold text-slate-200">Despliegue de Imagen Limpia y Rollback de Git</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Ejecutar el pipeline automatizado de rollback en GitHub Actions para montar la última compilación limpia verificada por SAST y purgar todas las variables de entorno expuestas.</p>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded border border-slate-850 flex items-start gap-3">
            <div className="p-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-mono font-bold text-[10px]">PASO 03</div>
            <div>
              <h4 className="font-bold text-slate-200">Saneamiento y Revocación General de Sesiones</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Forzar la expiración masiva de JSON Web Tokens (JWT) y sesiones en Redis, obligando a re-autenticarse a todos los usuarios del sistema una vez corregido el hueco de seguridad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}