# Administración MVC
## Modelo de login y gestión de usuarios

### Modelo de ingeniería

![](https://raw.githubusercontent.com/JILogio/WebProject/main/resources/asd.png)



- Back-end: el sistema donde el usuario interactúa desde el navegador para procesar la solicud, en este caso para el login enviando las credenciales
- User: front-end del sistema donde se presenta al usuario que ingrese los datos para realizar una solicitud APIRest y validar las credenciales
- Framework: NodeJS para el consumo de APIRest y solicitudes, VueJS para el front-end con CSS para el diseño de formulario de registro y login

### Sistema de autenticación con token JWT
![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*u3a-5xZDeudKrFGcxHzLew.png)
JWT es un sistema de autenticación mediante tokens, funciona cuando el usuario manda sus credenciales al servidor o back-end en el cual verifica los datos den la base de datos y si es correcta, envía a la página web un token generado de forma temporal para ese usuario y lo guarda.

Los JWT consisten en tres partes separadas por puntos (.), que son:
- Header - Contiene el tipo de token (JWT) y el algoritmo de firma usado (como HMAC SHA256 o RSA).
- Payload - Contiene los claims o declaraciones. Claims son declaraciones sobre una entidad (como el usuario) y metadatos adicionales. Hay tres tipos de claims: registered, public, and private claims.
- Signature - Para crear la firma, se toma el header codificado en base64, el payload codificado en base64, un secreto, el algoritmo especificado en el header y se firma el header y el payload.

Para usar JWT:
- El servidor crea un JWT firmado y lo devuelve al cliente.
- El cliente almacena el JWT y lo envía de vuelta en la cabecera Authorization en futuras solicitudes.
- El servidor valida el JWT en cada solicitud verificando la firma y claims.

### Modelo Admin
El sistema reconoce si el usuario que ingreso es Administrador mediante el rol que esta definido en la base de datos y devuelve un token con su llava única. Mediante el token y el Vuex, el sistema diferencia el tipo de usuario que ingresa a la página y presenta los permisos de acuerdo al diseño establecido

### Vuex
Es una librería para gestión del estado (State Management) de aplicaciones Vue.js. Sirve como un almacén centralizado para todos los componentes de una aplicación Vue, con reglas que garantizan que el estado se puede cambiar de manera predecible.

Donde:
- El estado es la fuente que impulsa nuestra aplicación;
- La vista, un mapeo declarativo del estado;
- Las acciones, las posibles formas en que el estado podría cambiar en respuesta a las entradas del usuario desde la vista.

Con esto, nuestro componente se convierte en una gran "Vista", y cualquier componente puede acceder al estado o desencadenar acciones, sin importar dónde se encuentren en el árbol.
![](https://unpocodejava.files.wordpress.com/2019/05/image006.jpg)
