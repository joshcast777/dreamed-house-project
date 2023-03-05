# Casa Soñada - Backend

## Descripción

Esta es la parte backend del proyecto Casa Soñada.

## Herramientas

- [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0): Framework para crear aplicaciones conectadas a internet.
- [C#](https://learn.microsoft.com/en-us/dotnet/csharp/): Lenguaje de programación moderno, basado en objetos y con seguridad de tipos.
- [Cloudinary](https://cloudinary.com/): Tecnología SaaS para la gestión de imágenes y vídeos basados en la nube.
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/): ORM para trabajar bases de datos usando objetos .NET.
- [JWT](https://jwt.io/): Objeto JavaScript para transmitir información de forma segura.
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/): IDE para el desarrollo de aplicaciones.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código.

---

## Notas

### Nota 1

Si abre el proyecto backend en Visual Studio Code, necesitará instalar la extensión oficial para [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).

Deberá esperar la notificación de si desea agregar los assets y presionar en Sí (Yes).

Y presionar `Ctrl` + `F5` para ejecutar el proyecto.

### Nota 2

Si se ejecuta el proyecto backend desde Visual Studio Code, se abrirá en el navegador pero no cargará la página.

Al link en el navegador deberá agregarle al final `/swagger` y `Enter` para que cargue.

### Nota 3

Si se usa una base de datos de forma local, se deberá cambiar los datos del `DefaultConnection` en el `ConnectionString`.
