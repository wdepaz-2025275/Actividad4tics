# Actividad 4 - Lista de usuarios

Mini app web para mostrar los usuarios de la API JSONPlaceholder de prueba, la pagina trae usuarios desde la API y los muestra en tarjetas.

## Que hace la pagina
- Al darle click al boton "Cargar usuarios" trae los datos con fetch()
- Muestra el nombre, correo y ciudad de cada usuario
- Tiene una caja de texto para buscar usuarios por nombre

## API que se uso
- JSONPlaceholder: https://jsonplaceholder.typicode.com/users
- Es una API publica de prueba y no pide llave

## Archivos del proyecto
- `index.html`: la estructura de la pagina
- `style.css`: los colores y estilos
- `script.js`: el fetch, mostrar las tarjetas y el buscador
- `eslint.config.mjs`: las reglas de ESLint
- `.husky/pre-commit`: el hook que corre ESLint antes de cada commit

## Como lo hice
1. Cree la carpeta del proyecto en VSC con los tres archivos base
2. Hice el fetch a la API y mostre los usuarios en pantalla
3. Agregue el boton y el buscador
4. Inicie el repositorio con `git init`
5. Instale Husky:
   npm install husky --save-dev
   npx husky init

6. Instale ESLint y cree el archivo `eslint.config.mjs` con reglas de punto y coma, comillas dobles y variables sin usar:
   npm install eslint --save-dev

7. Cambie el archivo `.husky/pre-commit` para que en vez de `npm test` ejecute:
   npx eslint .

## Prueba de Husky
Para comprobar que funcionaba le quite un `;` a una linea de `script.js` y trate de hacer un commit. ESLint mostro el error (`Missing semicolon`) y Husky cancelo el commit. Cuando volvi a poner el `;` el commit ya paso.