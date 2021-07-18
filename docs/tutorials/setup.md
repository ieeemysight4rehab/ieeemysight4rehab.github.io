# Setup

Follow the instructions below to install, build, and run the
website locally in less than 15 minutes.

## Install the Aura App and dependencies

1. [Fork repository](https://github.com/ieeemysight4rehab/ieeemysight4rehab.github.io) and clone it locally
2. Setup Environment
   - Install [Node.js (v8.9.4 or above)](https://nodejs.org/en/download/)
3. Install project dependencies: `npm install`
4. Compiles and hot-reloads for development: `npm run serve`
5. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)
6. For production: `npm run build` and then one dir will be created `dist`
7. For testing: `npm run test`

## Directory structure

The diagram below is a brief summary of the directories within the project.

    /
    |---dist/
    |---docs/
    |---public/
    |---node_modules/
    |---src/
    |   |---assets/
    |   |---components/
    |   |---config/
    |   |---filters/
    |   |---plugins/
    |   |---views/
    |

- `dist/` is the directory to deploy to production.
- `public/` folder with all `index.html`, `img`, `Favicon Icon`, `manifest.json` data for the template.
- `docs/` documentation.
- `node_modules/` is the place of Node dependencies.
- `src/` is where you store all of your source code and do all of your development.

## Build and serve

1. Run locally
   - `cd` into the base directory
   - `npm install`
   - `npm run serve`
2. Build for the Production
   - `npm run build`
3. Deploy into Netlify
   - Create Pull Request (PR) from dev to staging branch in GitHub

## Next steps

Now your website is fully configured, learn how to [deploy][deploy] web app using Netlify.

[deploy]: deploy.md
