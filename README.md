# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Astro](https://astro.build/) app
- `@af-library/ui-react`: a stub React component library shared by both `web` and `docs` applications
- `@af-library/ui-vue`: a stub Vue component library shared by both `web` and `docs` applications
- `@af-library/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@af-library/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@af-library/config-tailwind`: `tailwind.config.ts` used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

To develop a specific app or package, run the following command:

```
// react
pnpm dev --filter=@af-library/react

// vue
pnpm dev --filter=@af-library/vue

// docs
pnpm dev --filter=@af-library/docs
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Radix - Radix-vue vs Ark-ui

Radix and Radix-vue use different api and do not export the same components.
For example, Radix does not have a combobox component, but Radix-vue does.
They are not maintained by the same team.

Ark-ui is maintained by the same team and component do not differ depending on the framework.

## TODO

- [ ] README.md
  - 🚧 root
  - [ ] ui-react
  - [ ] ui-vue
  - [ ] config-tailwind
  - [ ] utils
  - [ ] docs
  - [ ] config-eslint
  - [ ] config-typescript
  - [ ] config-prettier
- [ ] add changelog
  - 🚧 [changesets](https://github.com/changesets/changesets)
- [ ] .vscode
  - ✅ extensions.json (vue, astro, tailwind)
  - 🚧 settings.json
- ❌ radix
- ❌ radix-vue
- ✅ ark-ui (vue and react)
- ✅ remove docs and web apps
- ✅ remove @repo/ui
- [ ] eslint config package ?
- [ ] prettier config package ?
- [ ] typescript config package
- [ ] storybook
- 🚧 documentation website
- [ ] publish packages to npm
  - [ ] ui-react
  - [ ] ui-vue
  - [ ] config-tailwind
  - [ ] utils
- ✅ react 19
- [ ] deploy storybook
- [ ] deploy documentation website
- [ ] use biome instead of eslint and prettier
  - [ ] vue (not supported)
  - [ ] astro (not supported)
  - [ ] react
- [ ] replace favicons
- ✅ example components using composition
- [ ] use tailwind v4 once it's released
- [ ] vue-i18n compatibility with ui-vue
- ✅ clean all dist .turbo node_modules
- ✅ plugin css tailwind
- [ ] prettier plugin tailwind
