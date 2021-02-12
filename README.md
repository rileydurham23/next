# Getting started

### Installation

Prerequisites:

- Nodejs 12+ is installed in the system.
- `yarn` is installed in the system as a package manager.

Clone the repo and init submodules with the actual docs:

```
git clone git@github.com:gravitational/next.git
git submodule init
```

To update docs to the latest version form master run:

```
git submodule update
```

Install dependencies with:

```
yarn
```

### Running docs

Now run one of the following commands:

- `yarn dev` - will run development server at `localhost:3000` that will autorefresh pages in real time then you edit markdown documents.
- `yarn build` - will build static production version.
- `yarn start` - will display documentation built with `npm run build` at `localhost:3000`.
- `yarn update-and-build` - shortcut for submodule update and build (this command is used on deploy to vercel). Do not use this command if you plan to edit docs locally - on run it will switch you branch to latest commit in `master` that can cause conflicts with your locally edited files.

### Development related commands

- `yarn test` - run tests. Used on CI.
- `yarn lint` - checks JS and TS files for errors and automatically fixes them.
- `yarn lint-check` - checks JS and TS files for errors, but didn't fix them. Checked in CI and on commit.
- `yarn typecheck` - validate TypeScript type-related errors. Used on CI.
- `yarn git-update` - shortcut for submodule update, laso used as part of `yarn update-and-build`.
- `yarn build-loaders` - command used to build custom webpack loaders.
- `yarn add-symlinks` - this command creates symlinks from different versions of docs to `pages` directory.

### Docs structure

`content/teleport/docs` - is a docs folder. Inside of it we have docs for diffrent teleport version with the following structure:

- `img/` - folder for images used inside the pages.
- `pages/` - `.md` or `.mdx` files with actual page content. Every file in this folder will be rendered as a page.
- `config.json` - docs version config. See below.

### `config.json`

TODO
