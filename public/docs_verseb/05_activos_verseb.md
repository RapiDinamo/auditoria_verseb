# Identificación y Clasificación de Activos de Información - TurBus Digital

**Proceso:** Gestión de Riesgos y Gobernanza TI  
**Consultor:** Sebastián V.  
**Sólido de Base:** Inventario de activos del core de venta de pasajes web.

---

## 1. Inventario General de Activos de Información

A continuación se detalla el listado sistemático de los activos críticos identificados dentro del ecosistema de la plataforma web, categorizados por su nivel de criticidad para la operación del transporte:

| ID | Activo Vinculado | Tipo de Activo | Criticidad | Descripción y Alcance Operativo |
| :--- | :--- | :--- | :--- | :--- |
| **ACT-01** | Base de Datos Transaccional (SQL/MongoDB) | Datos / Almacenamiento | **Crítica** | Repositorio central que aloja los RUTs, datos de pago y registro de boletos emitidos. |
| **ACT-02** | Endpoint de Procesamiento de Pagos | Software / Servicio | **Crítica** | Pasarela lógica de validación e integración con entidades bancarias para la venta online. |
| **ACT-03** | Módulo de Búsqueda de Destinos | Software / Frontend | **Media** | Interfaz donde el usuario selecciona ciudades de origen/destino y asientos disponibles. |
| **ACT-04** | Servidor de Producción Backend | Infraestructura / Lógica | **Crítica** | Entorno de ejecución donde se centralizan las lógicas de embarque y gestión de flota. |
| **ACT-05** | Archivos de Logs de Terminales | Datos / Auditoría | **Alta** | Registros internos utilizados para auditar la actividad de los tótems de compra físicos y web. |

---

## 2. Dimensiones de Seguridad Evaluadas (C-I-A)

Para determinar el nivel de criticidad de cada activo del inventario, se analizó el impacto potencial sobre las tres dimensiones fundamentales de la seguridad de la información:

* **Confidencialidad (C):** Asegurar que la información sensible (RUT y datos de tarjetas) no sea accesible externamente (vulnerado en el hallazgo de inyección SQL).
* **Integridad (I):** Garantizar la exactitud de los pasajes y asientos reservados, previniendo alteraciones o falsificaciones maliciosas.
* **Disponibilidad (A):** Garantizar que la plataforma web esté operativa 24/7 para que los pasajeros puedan comprar boletos sin interrupciones.