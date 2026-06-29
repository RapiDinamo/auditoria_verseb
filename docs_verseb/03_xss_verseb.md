# Vulnerabilidad 02: Cross-Site Scripting (XSS) Reflejado

**Clasificación OWASP:** A03:2021-Injection  
**Componente Afectado:** Buscador de Destinos y Rutas / Entrada de Texto Reflejada  
**Severidad CVSS v3.1:** 8.2 (Medio) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`

---

## 1. Evidencias de Explotación

### Fase 1: Inyección del Vector de Ataque
Se introdujo un script malicioso clásico en el campo de texto destinado a la búsqueda de ciudades (ej. "Santiago a Valparaíso") para verificar la falta de neutralización de caracteres especiales por parte del servidor.

```html
<script>alert('XSS_TURBUS')</script>
```

### Fase 2: Ejecución en el Navegador
El servidor reflejó la carga útil directamente en el DOM de la página de resultados sin codificar. El navegador del cliente interpretó la etiqueta `<script>` como código ejecutable válido, abriendo una ventana de alerta. Este fallo permite el robo de cookies de sesión de los pasajeros.

---

## 2. Análisis Técnico
El módulo de búsqueda toma el parámetro de la URL (el destino buscado) y lo inserta en el código HTML usando propiedades inseguras (como `innerHTML`) sin aplicar *encoding*.

## 3. Políticas y Controles de Mitigación
Se debe implementar un escape estricto sensible al contexto (Context-Aware Output Escaping). Cualquier dato proveniente del usuario debe ser renderizado utilizando propiedades seguras como `textContent` o procesado a través de librerías de sanitización antes de tocar el DOM, bloqueando la interpretación de etiquetas HTML.