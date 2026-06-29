# Vulnerabilidad 01: Inyección SQL (SQLi)

**Clasificación OWASP:** A03:2021-Injection  
**Componente Afectado:** Formulario de Autenticación de Pasajeros  
**Severidad CVSS v3.1:** 9.8 (Crítico) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`

---

## 1. Evidencias de Explotación

### Fase 1: Payload en Formulario
Se ingresó un vector de ataque clásico lícito-lógico (`1' OR '1'='1`) en el campo de entrada del RUT, diseñado para romper la lógica de la consulta SQL subyacente durante el inicio de sesión.

### Fase 2: Exposición de Datos (Bypass de Autenticación)
Debido a la falta de sanitización, la aplicación evaluó la sentencia como siempre verdadera (`TRUE`), otorgando acceso ilícito y exponiendo los registros completos de la base de datos: RUTs, historiales de rutas, boletos adquiridos y fragmentos de datos de pago almacenados de los clientes.

---

## 2. Análisis Técnico
La vulnerabilidad ocurre porque la plataforma de TurBus concatena directamente las entradas provistas por el usuario en las sentencias de la base de datos sin ningún tipo de filtrado previo. Esto permite que un atacante altere la estructura original de la consulta SQL ejecutada por el motor, burlando la pasarela de control.

## 3. Políticas y Controles de Mitigación

### Prevención (Mapeo Criterio 3.1.4)
Se prohíbe terminantemente la construcción de consultas SQL dinámicas mediante concatenación de strings en los módulos de venta o login. Toda interacción transaccional con la base de datos debe ser tratada de forma aislada.

### Control Implementado (Mapeo Criterio 3.1.5)
Se reestructuró la persistencia empleando **Consultas Parametrizadas (Prepared Statements)**. Al implementar marcadores de posición (`?`), el motor pre-compila la estructura de la consulta antes de insertar el RUT, asegurando que cualquier carácter especial sea tratado como texto inofensivo.

```javascript
// SOLUCIÓN: Consulta parametrizada segura en el backend de TurBus
const query = "SELECT * FROM pasajeros WHERE rut = ? AND password = ?";

db.query(query, [rut_ingresado, password], (err, result) => {
    if (err) return res.status(500).send("Error interno en el servidor de pasajes");
    if (result.length > 0) res.send("Pasajero Autenticado Exitosamente");
});
```