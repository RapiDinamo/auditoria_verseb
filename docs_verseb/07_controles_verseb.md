# Catálogo de Controles Técnicos de Mitigación

**Fase:** Contramedidas de Ingeniería de Software  
**Estándar de Referencia:** OWASP Proactive Controls  

---

## 1. Desglose de Controles Implementados

### Control C-01: Sentencias Preparadas (Defensa vs SQLi)
* **Naturaleza:** Preventivo.
* **Descripción:** Separación permanente de la consulta base y el set de datos ingresados por el pasajero (ej. RUT). El driver pre-compila la consulta, impidiendo la manipulación del acceso a la cuenta.
* **Refactorización:** `db.query("SELECT * FROM pasajeros WHERE rut = ?", [rut_ingresado])`.

### Control C-02: Context-Aware Output Escaping (Defensa vs XSS)
* **Naturaleza:** Preventivo.
* **Descripción:** Codificación estricta de cualquier parámetro de ruta (ciudades, fechas) que deba renderizarse en pantalla, anulando etiquetas HTML maliciosas.
* **Refactorización:** Modificación de inyecciones `innerHTML` hacia la asignación segura mediante `textContent` en las listas de resultados de viaje.

### Control C-03: Invocación Aislada de Binarios (Defensa vs RCE)
* **Naturaleza:** Correctivo.
* **Descripción:** Erradicación del uso de terminal de comandos en crudo para auditar la red interna. Se envían los argumentos en matrices estrictas que el SO no interpreta como comandos concatenados.
* **Refactorización:** Reemplazo de ejecución directa por la ejecución restrictiva de `execFile('/bin/ping', [ip_totem])`.s