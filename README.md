# **Frontend del Sistema de Gestión de Reservas Hoteleras**

## **Descripción**

Este repositorio contiene el frontend del sistema de gestión de reservas hoteleras, desarrollado con HTML, CSS y JavaScript. Se conecta al backend alojado en http://127.0.0.1:8000 para realizar operaciones CRUD relacionadas con usuarios, clientes, habitaciones y reservas.

El frontend proporciona una interfaz intuitiva para la administración completa del hotel, permitiendo registrar usuarios, gestionar clientes, controlar la disponibilidad de habitaciones y manejar las reservas activas. Además, incluye un sistema básico de autenticación JWT para asegurar el acceso a las funcionalidades del sistema.

---

## **Tecnologías Usadas**

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript**
- **Axios** – Para consumir la API.

---

## **Funcionalidades Principales**

### Autenticación
- Acceso mediante inicio de sesión (`/login`)
- Uso de tokens JWT para proteger rutas y operaciones

### Gestionar Usuarios
- Listado general de usuarios registrados.
- Creación de nuevos usuarios del sistema.
- Actualización de datos existentes.
- Consulta individual por ID.

### Gestión de Clientes

- Registro de nuevos clientes.
- Edición de información personal.
- Consulta de clientes por ID o listado general.


### Gestión de Habitaciones

- Registro de nuevas habitaciones.
- Edición de detalles como número, tipo, estado y precio.
- Consulta de disponibilidad y listado general.

### Gestión de Reservas

- Creación de nuevas reservas asignando cliente, habitación y fechas de entrada/salida.
- Edición y actualización de reservas existentes.
- Cancelación o eliminación de reservas.
- Consulta de historial y estado de reservas activas o finalizadas.


### Estructura del Proyecto

Frontend/
│
├── imgs/           # Recursos gráficos e imágenes
├── scripts/        # Archivos JavaScript para lógica y consumo de API
├── templates/      # Plantillas HTML reutilizables
└── views/          # Páginas principales del sistema (login, usuarios, reservas, etc.)

---
