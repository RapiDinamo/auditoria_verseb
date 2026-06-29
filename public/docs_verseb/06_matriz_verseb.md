# Matriz de Riesgos y Mapa de Calor - TurBus Digital

**Proceso:** Evaluación Cuantitativa de Riesgos de Seguridad  
**Metodología:** NIST SP 800-30  

---

## 1. Metodología de Cálculo
Para priorizar las acciones de remediación, calculamos el nivel de riesgo combinando la Probabilidad (1-5) de ocurrencia y el Impacto (1-5) en la logística de transporte:

Riesgo = Probabilidad × Impacto

* **Riesgo Crítico (16 - 25):** Requiere mitigación inmediata; amenaza directa a la emisión de pasajes.
* **Riesgo Alto (10 - 15):** Debe programarse la solución en el ciclo de desarrollo actual.
* **Riesgo Medio (5 - 9):** Monitoreado con controles compensatorios y firewalls de red.

---

## 2. Registro General del Riesgo

| ID | Activo Vinculado | Amenaza Identificada | Prob (1-5) | Imp (1-5) | Valor Riesgo | Criticidad | Causa Raíz Técnica |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **R-01** | Base de Datos | Inyección SQL (SQLi) | 4 | 5 | **20** | 🔴 Crítica | Consultas concatenadas dinámicamente en login de RUT. |
| **R-02** | Buscador de Rutas | XSS Reflejado | 4 | 3 | **12** | 🟠 Alta | Carga directa de parámetros en el DOM sin sanitización. |
| **R-03** | Servidor Backend | Inyección de Comandos | 4 | 5 | **20** | 🔴 Crítica | Uso inseguro de shell para diagnosticar tótems físicos. |

---

## 3. Criterios de Impacto Operativo
* **Impacto 5 (Crítico):** Exposición pública de datos personales de pasajeros (RUT y pagos) o secuestro completo del servidor, paralizando las ventas en línea a nivel nacional.
* **Probabilidad 4 (Alta):** Vector de ataque altamente visible en la interfaz pública de búsqueda y compra web.