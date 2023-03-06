# Casa Soñada - Frontend

## Descripción

Esta es la parte frontend del proyecto Casa Soñada.

---

## Herramientas usadas en el proyecto

- [Animate.css](https://animate.style/): Aplicar ciertas animaciones a ciertos elementos HTML.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html): Estilos CSS del build final.
- [HTML](https://www.w3schools.com/html/): Estructura básica del sitio web.
- [JavaScript](https://www.javascript.com/): Lenguaje de programación para la web.
- [JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx)/[TSX](https://www.typescriptlang.org/docs/handbook/react.html): Permite escribir HTML dentro de JavaScript o TypeScript. Extensión con la que trabaja React.
- [PNPM](https://pnpm.io/): Un gestor de paquetes rápido y de eficiente almacenamiento en disco. Una alternativa a NPM.
- [PrimeReact](https://primereact.org/) de [PrimeFaces](https://www.primefaces.org/): Biblioteca de componentes para trabajar con React.
- [React](https://reactjs.org/): Una biblioteca JavaScript para construir interfaces de usuario.
- [React Icons](https://react-icons.github.io/react-icons/): Biblioteca de íconos para usar con React.
- [Sass](https://sass-lang.com/): Extensión de CSS.
- [TailwindCSS](https://tailwindcss.com/): Un framework CSS.
- [Typescript](https://www.typescriptlang.org/): Super conjunto sintáctico estricto para JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código.
- [Vite](https://vitejs.dev/): Herramienta para crear aplicaciones frontend JavaScript.

---

## Cómo instalar el proyecto

1. Instalar **Visual Studio Code**.
2. Instalar **Node.js**.
3. Activar **PNPM** usando **Corepack**. Para esto, abrir la CMD, terminal o PowerShell y ejecutar `corepack enable`.
4. Para saber que se instaló ejecutar `pnpm -v` y se mostrará la versión instalada.
5. Abrir la CMD, terminal o PowerShell desde la raíz del proyecto frontend y ejecutar `pnpm i` para instalar los paquetes de Node.

---

## Cómo ejecutar el proyecto

1. Abrir la CMD, terminal o PowerShell desde la raíz del proyecto frontend y ejecutar `pnpm run dev` para ejecutar la aplicación.
2. En caso de no abrirse el navegaor, copiar el link y pegarlo en la barra de direcciones del navegador, o darle `Crtl`+ `clic` en caso de ser posible.

---

## Notas

- La parte backend de este proyecto se la ejecutó tanto en Visual Studio Code como en Visual Studio 2022 y en diferentes computadoras, esto podría cambiar la ruta de acceso a la API del backend. En caso de que el frontend no se conecte con el backend debido a esto, se deberá cambiar el valor de la variable `VITE_BASE_URL` ubicada en el archivo `.env` situado en la raíz del proyecto frontend por el valor correspondiente.
- Las imágenes no está alojadas localmente, en este caso se usó Cloudinary.
