# Supachart Tansutiraphong Portfolio

## Content

[Demo](#demo)

[Technologies used](#technologies-used)

[Installation](#installation)

[Usage](#usage)

## Demo
[Live Demo](#https://supachart.github.io)

## Technologies used
* **[React](https://facebook.github.io/react/)** (16.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Typescript](https://www.typescriptlang.org/)** (3.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
* [Babel](http://babeljs.io/) (7.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (5.x)

## Installation
1. Clone/download repo
2. `npm install` (or `yarn install` for npm)

## Usage
**Development**

`npm run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

`npm run start-prod`

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist/`
`npm run test` | Run tests
`npm run lint` | Run Typescript linter
`npm run lint --fix` | Run Typescript linter and fix issues
`npm run start` | (alias of `npm run start-dev`)

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
