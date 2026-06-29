import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');

  const menuItems = [
    { id: 'resumen', label: '📊 Resumen Ejecutivo' },
    { id: 'sqli', label: '🛑 02. Inyección SQL' },
    { id: 'xss', label: '⚠️ 03. Cross-Site Scripting (XSS)' },
    { id: 'comandos', label: '💻 04. Inyección de Comandos' },
    { id: 'activos', label: '📦 05. Inventario de Activos' },
    { id: 'matriz', label: '📊 06. Matriz de Riesgo' },
    { id: 'controles', label: '🛡️ 07. Prevención y Controles' },
    { id: 'recuperacion', label: '🔄 08. Plan de Recuperación' },
    { id: 'prompts', label: '🤖 09. Bitácora de Prompts' },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      
      {/* BARRA LATERAL MODERNA */}
      <aside className="w-64 bg-slate-900/80 backdrop-blur-xl border-r border-slate-800 flex flex-col justify-between shadow-2xl">
        <div>
          {/* Encabezado */}
          <div className="p-6 border-b border-slate-800 bg-slate-900/50">
            <h1 className="text-base font-black tracking-wider text-white uppercase">
              TurBus <span className="text-cyan-400">Audit</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-mono mt-1">NIST SP 800-30 • OWASP</p>
          </div>
          
          {/* Menú de Navegación */}
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-medium transition-all duration-300 ease-out flex items-center gap-3 ${
                    isActive
                      ? 'bg-slate-800/80 text-cyan-400 border-l-4 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:translate-x-1'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Pie de página */}
        <div className="p-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono text-center bg-slate-900/50">
          Consultor: Sebastián V.
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL CON GRADIENTE */}
      <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950 p-8">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'resumen' && <Resumen />}
          {activeTab === 'sqli' && <InyeccionSQL />}
          {activeTab === 'xss' && <XSS />}
          {activeTab === 'comandos' && <Comandos />}
          {activeTab === 'activos' && <Activos />}
          {activeTab === 'matriz' && <Matriz />}
          {activeTab === 'controles' && <Controles />}
          {activeTab === 'recuperacion' && <Recuperacion />}
          {activeTab === 'prompts' && <Prompts />}
        </div>
      </main>

    </div>
  );
}