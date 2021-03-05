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

- `yarn test` – run tests. Used on CI.
- `yarn lint` – checks JS and TS files for errors and automatically fixes them.
- `yarn lint-check` – checks JS and TS files for errors, but didn't fix them. Checked in CI and on commit.
- `yarn typecheck` – validate TypeScript type-related errors. Used on CI.
- `yarn git-update` – shortcut for submodule update, laso used as part of `yarn update-and-build`.
- `yarn build-loaders` – command used to build custom webpack loaders.
- `yarn add-symlinks` – this command creates symlinks from different versions of docs to `pages` directory.
- `yarn markdown-lint` – lint `*.mdx` files inside `content/**/docs/pages/` folders for syntax errors.
- `yarn markdown-lint-external-links` – same as `yarn markdown-lint` but checks that external links works. Separate command because of slowness.

### Docs structure

`content/*.*/docs` - is a docs folder. Inside of it we have docs for diffrent teleport version with the following structure:

- `img/` - folder for images used inside the pages.
- `pages/` - `.md` or `.mdx` files with actual page content. Every file in this folder will be rendered as a page.
- `config.json` - docs version config.

### `config.json`

File that configures build options:

- `versions` - array of the available options, should match the names of the folders inside `content` dir. Will be shouwn in the version select in the inverted order.
- `latest` – name of the version that will be selected by default in the dropdown and rendered without `ver/*.*/` in the URLs.

### Adding new docs version

- Add new submodule: `git submodule add -b branch/*.* https://github.com/gravitational/teleport/ content/*.*` where `branch/*.*` is the name of the branch in the main Teleport repo and `content/*.*` is the name of the subfolder in the `content` folder there the docs will be stored. Name of the folder inside `content` should match the name of the version in the config. Folder name itself can contain any characters allowed in the URL. E.g. `6.0-rc`.
- Add version to the `versions` array in `config.json`.
- Change `latest` field to the new value if you want to make it default,
- Add branch name to the `branches` object to use for 'Edit' link.

### Changing the branch that the docs version is pointing to

- Open `.gitmodules` file.
- Find corresponding record. For example, for version `4.4` it will look like this:
  ```
  [submodule "content/4.4"]
    path = content/4.4
    url = https://github.com/gravitational/teleport/
    branch = branch/4.4
  ```
- Change `branch` field to the new branch name.
- Run `yarn git-update` – this will update all submodules to the HEAD commits
  of the corresponding branches.

### Removing exisitng docs version

Correct way to remove submodule:

```
# Remove the submodule entry from .git/config
git submodule deinit -f path/to/submodule

# Remove the submodule directory from the superproject's .git/modules directory
rm -rf .git/modules/path/to/submodule

# Remove the entry in .gitmodules and remove the submodule directory located at path/to/submodule
git rm -f path/to/submodule
```

[Source](https://stackoverflow.com/a/36593218/1008291).
