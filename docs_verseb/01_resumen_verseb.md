# Informe Técnico de Auditoría - Resumen Ejecutivo

**Equipo Consultor:** Sebastián V.
**Plataforma Evaluada:** TurBus Digital
**Metodología:** NIST SP 800-30 & OWASP Top 10

---

## Contexto Técnico y Objetivo General
El presente proceso de auditoría y aseguramiento de software se ejecutó con la finalidad de identificar brechas de seguridad, fallos de inyección y debilidades lógicas presentes en el ecosistema informático de **TurBus Digital**. La evaluación abarca desde el análisis de la persistencia de datos transaccionales (RUT, datos de pago e historial de pasajes) hasta los vectores de ejecución en el lado del servidor y las interfaces de cliente.

## Resumen de Hallazgos Críticos
* **Vulnerabilidades Detectadas:** 3 (1 Crítica, 1 Alta, 1 Media).
* **Riesgo Máximo Identificado:** Exfiltración completa de la Base de Datos de Pasajeros (Puntaje de Riesgo: 15 - Crítico bajo NIST SP 800-30).
* **Estatus Actual de Mitigación:** 75% de los controles recomendados ya han sido desarrollados e implementados en el código fuente del portal web.

> **Nota de Cumplimiento:** La metodología aplicada para la estimación de impactos, probabilidades y criticidad se rige bajo las pautas internacionales del estándar **NIST SP 800-30** y las clasificaciones del top 10 de **OWASP 2021**.