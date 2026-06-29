# Vulnerabilidad 03: Inyección de Comandos del Sistema Operativo (RCE)

**Clasificación OWASP:** A03:2021-Injection
**Componente Afectado:** Consola de Diagnóstico de Tótems de Autoatención en Terminales
**Severidad CVSS v3.1:** 10.0 (Crítica) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H`

---

## 1. Evidencias de Explotación

### Fase 1: Inyección del Vector de Ataque
Se introdujo un metacarácter de control de shell (punto y coma `;`) seguido de una directiva del sistema operativo en el campo de red destinado a hacer ping a la IP de un tótem de impresión de pasajes.

```bash
192.168.1.50; cat /etc/passwd
```

### Fase 2: Ejecución Remota y Escalada
El servidor subyacente ejecutó el comando concatenado, devolviendo el contenido del archivo de usuarios del sistema. Esto confirma el compromiso total del servidor backend de TurBus, permitiendo a un atacante tomar control de la red interna de terminales.

---

## 2. Análisis Técnico
La plataforma utiliza funciones de ejecución de procesos (como `exec()` en Node.js o `system()` en PHP) pasando la entrada del usuario directamente al shell del sistema. Los metacaracteres no son neutralizados, permitiendo apilar comandos arbitrarios.

## 3. Políticas y Controles de Mitigación
Se erradicó el uso de shells para procesos de diagnóstico. El control se refactorizó utilizando invocaciones directas a binarios con listas estrictas de argumentos (por ejemplo, `execFile` en Node.js), lo que evita que el sistema operativo intérprete caracteres como `;`, `&&` o `|` como concatenadores lógicos.s