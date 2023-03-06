# Casa Soñada - Backend

## Descripción

Esta es la parte backend del proyecto Casa Soñada.

## Herramientas usadas en el proyecto

- [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download): Herramienta para trabajar con .NET Framework.
- [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0): Framework para crear aplicaciones conectadas a internet.
- [C#](https://learn.microsoft.com/en-us/dotnet/csharp/): Lenguaje de programación moderno, basado en objetos y con seguridad de tipos.
- [Cloudinary](https://cloudinary.com/): Tecnología SaaS para la gestión de imágenes y vídeos basados en la nube.
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/): ORM para trabajar bases de datos usando objetos .NET.
- [JWT](https://jwt.io/): Objeto JavaScript para transmitir información de forma segura.
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/): IDE para el desarrollo de aplicaciones.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código.

---

## Cómo instalar el proyecto

### Con Visual Studio 2022

1. Instalar **Visual Studio 2022**.
2. Instalar **ASP.NET and web development** desde el **Visual Studio Installer**.
3. Abrir el archivo `.sln` ubicado en la raíz del proyecto backend.

### Con Visual Studio Code

1. Instalar **.NET 7.0 SDK**.
2. Instalar **Visual Studio Code**.
3. Instalar la extensión **C#** desde el apartado de **Extensiones**.
4. Esperar la notificación en Visual Studio Code indicando si se desea agregar los assets y presionar en Yes (Sí).

---

## Cómo ejecutar el proyecto

### Con Visual Studio 2022

1. Abrir el proyecto desde **Visual Studio 2022**.
2. Presionar `F5` para que se ejecute (o `Ctrl` + `F5` para ejecutarlo sin el debugger).
3. Abrirá el navegador predeterminado con la ejecuión del proyecto.

### Con Visual Studio Code

1. Abrir el proyecto con **Visual Studio Code**.
2. Presionar `Ctrl` + `F5` para la ejecución del proyecto.
3. Se abrirá el navegador con una página que no carga, para arreglar esto, ir a la barra de direcciones del navegador y al final del link agregar `/swagger` para que pueda cargar el proyecto.

---

### Nota

Si se usa una base de datos de forma local, se deberán cambiar los datos del `DefaultConnection` en el `ConnectionString` en el archivo `appsettings.json` situado en la raíz del proyecto backend.
