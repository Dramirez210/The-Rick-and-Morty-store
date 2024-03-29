## Consumo de una API usando JavaScript: [The Rick and Morty API](https://rickandmortyapi.com/api/character).

![The Rick and Morty](img/Captura.PNG)

## Ver [Demo](https://dramirez210.github.io/The-Rick-and-Morty-store/).

A continuación se indica cómo trabajar con el uso de este recurso.

Si usted clona mi repositorio necesitará ejecutar en la terminal el siguiente comando:

```sh
npm start
```

Posiblemente marque error ya que no reconocerá el paquete “snowpack” pero puede utilizar:

```sh
npm install snowpack
```

Y volver a ejecutar el comando anterior.

Para crear una plantilla desde cero siga los siguientes pasos:

# Snowpack Tailwind

> ✨ Bootstrapped with Create Snowpack App (CSA).

Ready-to-go template to create awesome websites using Tailwind on top of Snowpack and autopublish to GitHub pages using GitHub Actions.

- [Quick start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)

## Quick start

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky

# Start the development server
npm start
```

✨ Optional: [Enable autopublish](#q-how-do-i-enable-auto-publish-to-github-pages) to get your site deployed on GitHub Pages on every commit you push.

#### Optional install using Yarn:

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind --use-yarn

# Enable Prettier on git-commit
cd my-app
yarn install:husky
```

## Features

- Snowpack, of course.
- Tailwind.
- Prettier.
- Force prettier on git-commit.
- Autopublish on Github Pages.

### Q: How do I enable auto publish to GitHub Pages?

1. Update the value of `homepage` in `package.json`. It should look like `https://<your-username>.github.io/<your-repo-name>` (no trailing slash).
1. Push your changes into a new GitHub repository.
1. You should see an Action running on `https://github.com/<your-username>/<repo-name>/actions`
1. Make sure to [enable GitHub pages for your repo](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) and select the `gh-pages` branch
1. Give GH Pages some minutes, your site should be live on `https://<your-username>.github.io/<your-repo-name>`
1. Enjoy :)

### Q: How do I disable auto publish to GitHub Pages?

Remove the `.github/workflows/publish.yml` file.

### Q: How do I check my code syntax (Prettier) on git-commit?

Run `npm run install:husky`.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
