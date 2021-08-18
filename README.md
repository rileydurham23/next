# Getting started

## Prerequisites

**Node.js 12+ is installed in the system.**

If you don't have Node.js installed, or it's version is smaller than 12, then follow
[this guide](https://nodejs.org/en/download/package-manager/) to install it.

**`yarn` is installed in the system as a package manager.**

Yarn in an alternative package manager for Node.js. It needs to be installed separately.
If you already have Node.js installed run the following command to add Yarn:

```
npm install --global yarn
```

## Installation

Clone the repo and init submodules with the actual docs:

```
git clone git@github.com:gravitational/next.git
cd next
git submodule init
```

To update docs to the latest version from master run:

```
yarn git-update
```

Install dependencies with:

```
yarn
```

## Running docs

Now run one of the following commands:

- `yarn dev` - will run development server for docs at `localhost:3000/docs` that will autorefresh pages in real time then you edit markdown documents.
- `yarn build` - will build static production version.
- `yarn start` - will display documentation built with `npm run build` at `localhost:3000`.
- `yarn update-and-build` - shortcut for submodule update and build (this command is used on deploy to vercel). Do not use this command if you plan to edit docs locally - on run it will switch you branch to latest commit in `master` that can cause conflicts with your locally edited files.

## Development related commands

- `yarn test` – run tests. Used on CI.
- `yarn lint` – checks JS and TS files for errors and automatically fixes them.
- `yarn lint-check` – checks JS and TS files for errors, but didn't fix them. Checked in CI and on commit.
- `yarn typecheck` – validate TypeScript type-related errors. Used on CI.
- `yarn git-update` – shortcut for submodule update, laso used as part of `yarn update-and-build`.
- `yarn build-loaders` – command used to build custom webpack loaders.
- `yarn add-symlinks` – this command creates symlinks from different versions of docs to `pages` directory.
- `yarn markdown-lint` – lint `*.mdx` files inside `content/**/docs/pages/` folders for syntax errors.
- `yarn markdown-lint-external-links` – same as `yarn markdown-lint` but checks that external links works. Separate command because of slowness.
- `yarn markdown-fix` – automatically fix syntax in `*.mdx` files inside `content/**/docs/pages/`.
- `yarn storybook` – run [Storybook](https://storybook.js.org/) instance at the `6006` port. You can check existing components here and try different options.
- `yarn build-storybook` – build static version of Storybook.

## `config.json`

File that configures build options:

- `versions` - array of the available options, should match the names of the folders inside `content` dir. Will be shown in the version select in the inverted order.
- `redirects` - optional array of redirects. Uses [Next.js syntax](https://nextjs.org/docs/api-reference/next.config.js/redirects) inside.

Format of version entry:

- `name` - required. Name of the folder in `content` and name of branch in versions dropdown on the site.
- `branch` - required. Name of branch for this version. Will be used for `edit` links on the docs pages.
- `latest` - not required. First entry with this field will be current version. If no entries has this field, then the last version in array will be considered the latest.

## Working with docs files

### Docs folders structure

`content/*.*/docs` - is a docs folder. Inside of it we have docs for different Teleport version with the following structure:

- `img/` - folder for images used inside the pages.
- `pages/` - `.md` or `.mdx` files with actual page content. Every file in this folder will be rendered as a page.
- `config.json` - docs version config.

### Adding new docs version

- Add new submodule: `git submodule add -b branch/*.* https://github.com/gravitational/teleport/ content/*.*` where `branch/*.*` is the name of the branch in the main Teleport repo and `content/*.*` is the name of the subfolder in the `content` folder there the docs will be stored. Name of the folder inside `content` should match the name of the version in the config. Folder name itself can contain any characters allowed in the URL. E.g. `6.0-rc`.
- Add new entry to the `versions` array in `config.json` with name and branch field.
- Change `latest` field to the new value if you want to make it default.

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

### Removing existing docs version

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

## Custom syntaxes used in the docs

- `(= variable =)` – will insert variable from `docs/config.json`'s `varaibles` field.
- `(! path-to-file.yaml !)` - will insert files content in the docs. Path should be relative to submodule's root.

## Working with images

Suffix `@Nx` at the end of the image name will tell browser to scale image down by the number after the `@`.

E. g. `filename@2x.png` mans that this image is retina-ready and should be rendered at half size. Same with `@3x`, `@1.5x`, etc.

## How to add video banner

To display the banner, we have to add the key `videoBanner` in the page's meta information (where we write title, h1, etc.). In the value of this key, we have to provide the ID of the YouTube video.

### ID of the YouTube video

We should open YouTube with the video which we want to insert to the page. In the URL of the video, we have to take part should be followed after symbols `?v=`

For example, in URL, we have link `https://www.youtube.com/watch?v=UFhT52d5bYg`, we have to take that string `UFhT52d5bYg` - it's ID of this video.

Once we have prescribed key `videoBanner` with video ID in meta information, we may see a video banner with a fake title and preview on the page. It's connected that in your local stand missing the YouTube API Key.

### Adding YouTube API Key

At the root of the project, we have to create `.env.local` file. Inside this file, we have to add `YOUTUBE_API_KEY` variable with the API key value:

```
YOUTUBE_API_KEY=[key-for-google-api]
```

API key we can get via this [instruction](https://developers.google.com/youtube/v3/getting-started#intro).
