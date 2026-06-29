# Plan de Recuperación ante Desastres (DRP) y Continuidad

**Área:** Operaciones e Infraestructura TurBus Digital  
**Alcance:** Resiliencia ante Explotación de Vulnerabilidades en Ventas Online  

---

## 1. Acuerdos de Nivel de Servicio de Recuperación (SLA)

* **RTO (Recovery Time Objective) - Menor a 30 Minutos:** Tiempo límite estipulado para restablecer la compra web de pasajes y evitar colapsos operativos en los terminales físicos.
* **RPO (Recovery Point Objective) - Máximo 4 Horas:** Pérdida máxima de datos transaccionales permitida. Se resguarda con la automatización de respaldos diferenciales de las bases de datos de pagos cada 4 horas.

---

## 2. Flujo Secuencial de Contención ante Incidentes Activos

1.  **Fase de Aislamiento:** Al dispararse alertas por intentos de exfiltración masiva de datos (SQLi), se activa el WAF y se redirige el tráfico hacia un sitio web secundario estático de mantenimiento temporal.
2.  **Fase de Rollback Automatizado:** Despliegue inmediato de una imagen Docker estable anterior, desvinculando cualquier pasarela de pago comprometida hasta validar la integridad del código.
3.  **Fase de Saneamiento y Purga:** Se realiza la invalidación total de las sesiones activas en el portal web y se exigen reseteos de credenciales a los pasajeros afectados, protegiendo sus métodos de pago vinculados.