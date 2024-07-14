## Proyecto Node Express Mongoose MongoDB

### Descripción

Este proyecto implementa una API REST que gestiona la colección de usuarios, en una base de datos MongoDB utilizando Node.js, Express y Mongoose.

## Requisitos

- Node.js versión 20 o superior
- MongoDB instalado y configurado
- Configuración

## Clonación del Repositorio:

Clona el repositorio del proyecto en tu directorio local:

- [git clone ](https://github.com/H-ROD-10/prueba-tecnica-backend-nolatech)

## Instalación de Dependencias:

Accede al directorio del proyecto clonado e instala las dependencias necesarias:
npm install

## Configuración de Variables de Entorno:

Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias para la conexión a la base de datos MongoDB. Solicitarlas.

## Ejecución

Inicio del Servidor de Desarrollo:

Inicia el servidor de desarrollo utilizando el siguiente comando:

npm run dev

- usuario admin: admin_test@test.com
- usuario user: user_test@test.com
- usuario editor: editor_test@test.com

- password: 12345678

Se utiliza la misma password para cada uno de lo usuarios.

El servidor se iniciará en el puerto 8000 por defecto.

## Acceso a la API REST:

## Endpoints

La API REST expone los siguientes endpoints para la gestión de las colecciones:

- [User](http://localhost:8000/api/v1/user)
- CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios.

## Documentación Detallada

- [Swagger Local](http://localhost:8000/api/v1/docs/#/)
- [Swagger Web](https://prueba-tecnica-backend-nolatech.onrender.com/api/v1/docs/)

## Contribuciones

Se agradecen las contribuciones a este proyecto. Si deseas realizar cambios o agregar nuevas funcionalidades, crea una solicitud de extracción (pull request) en el repositorio de GitHub.
