# Bitácora de Uso de Inteligencia Artificial (Prompts) - TurBus Digital

**Asignatura:** Auditoría y Seguridad de Aplicaciones  
**Consultor:** Sebastián V.  
**Plataforma de IA:** Gemini AI  

---

## 1. Registro de Interacciones e Ingeniería de Prompts

### Sesión 1: Modelado Teórico de Hallazgos (OWASP)
* **Prompt Emitido:** `"Hola, necesito que me ayudes a armar un informe técnico de ciberseguridad para un proyecto de la universidad. Es para un sistema web de una empresa de buses tipo TurBus Digital. Encontré dos vulnerabilidades: un fallo de Inyección SQL en la parte del login donde se ingresa el RUT, y un XSS Reflejado en el buscador de los destinos de viaje. ¿Me puedes redactar cómo sería el informe en formato Markdown para estos dos problemas? Trata de incluir el cálculo de severidad CVSS v3.1 y explica de forma clara qué pasaría si un atacante logra robarse los RUTs y los datos de pago de los pasajeros."`
* **Uso en la solución:** Estructuración de la base teórica y justificación del riesgo crítico para los reportes de base de datos.

### Sesión 2: Refactorización de Código Seguro (Mitigación RCE)
* **Prompt Emitido:** `"Tengo un problema con un código en Node.js del panel de administración que revisa si los tótems de venta físicos de los terminales están funcionando. El código usa child_process.exec() para hacer un ping a la IP del tótem, pero me di cuenta de que si alguien le pone un punto y coma (;) seguido de un comando, puede hacer un RCE en el servidor. Necesito que me expliques de forma sencilla cómo puedo arreglar esto y reescribir el código aislando las IPs, para que el sistema solo acepte la dirección y no deje ejecutar ningún comando adicional por accidente."`
* **Uso en la solución:** Implementación de la corrección técnica segura requerida en los controles del dashboard de infraestructura.

### Sesión 3: Modelado de Gobernanza y Matriz NIST
* **Prompt Emitido:** `"Ahora necesito hacer la parte de gestión de riesgos para el mismo proyecto de la empresa de buses interurbanos. ¿Me puedes generar una matriz de riesgos usando la metodología NIST SP 800-30? Además de eso, necesito armar un plan de continuidad operativa o recuperación por si el sistema se llega a caer por un ataque. Explica bien en el plan qué pasaría logísticamente con los terminales físicos de buses si se paraliza la venta online, y cómo afectaría todo el tema de los fraudes en la emisión de pasajes."`
* **Uso en la solución:** Diseño del mapa de calor y modelado de los tiempos de respuesta ante contingencias en ventas online.

### Sesión 4: Encriptación de Datos Sensibles en Base de Datos
* **Prompt Emitido:** `"Oye, revisando el tema de la base de datos de TurBus, me di cuenta de que si nos hacen la inyección SQL, se roban todas las contraseñas y datos de las tarjetas de los pasajeros porque están guardadas en texto plano. ¿Me puedes explicar paso a paso cómo puedo encriptar o hashear las contraseñas en la base de datos usando bcrypt en Node.js? Necesito que me des el código de cómo se guardaría un pasajero nuevo y cómo se validaría su RUT y contraseña en el login para ponerlo como mejora en mi informe."`
* **Uso en la solución:** Diseño e implementación de controles criptográficos para proteger las credenciales y datos financieros de los usuarios en la base de datos.

### Sesión 5: Automatización de Respaldos (DRP)
* **Prompt Emitido:** `"Para el plan de recuperación de desastres (el DRP) que armamos antes, pusimos que se iban a hacer respaldos automáticos cada 4 horas de la base de datos de los pasajes. ¿Me puedes hacer un script en Python que se conecte a la base de datos SQL, saque un dump con toda la información de los boletos y RUTs, y lo guarde en una carpeta de backups con la fecha y hora del día? Es para ponerlo en el trabajo como evidencia de que el plan de continuidad operativo sí se puede aplicar de forma real."`
* **Uso en la solución:** Creación de la herramienta de automatización y scripting para cumplir con los tiempos del RPO (Recovery Point Objective) del sistema de ventas.

### Sesión 6: Sanitización del Frontend (Mitigación XSS)
* **Prompt Emitido:** `"Tengo que proponer una forma de arreglar el frontend del buscador de viajes porque ahí es donde nos metieron el script del XSS. La página está hecha con HTML y JavaScript normal. ¿Me puedes dar un ejemplo de código de cómo debería recibir el texto de la ciudad de origen y destino que busca el usuario, y sanitizarlo antes de mostrarlo en la pantalla para que no se ejecute nada raro? Quiero mostrar en el informe el 'antes' vulnerable usando innerHTML y el 'después' seguro usando textContent."`
* **Uso en la solución:** Refactorización de la capa de presentación visual para garantizar que las entradas del usuario se procesen estrictamente como texto plano.