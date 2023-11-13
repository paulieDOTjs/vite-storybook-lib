# vite-storybook-lib

A basic implementation of Storybook with React using Vite as the builder/server

## dev modes

There are two different modes for running the code base

### react app

```bash
yarn dev
```

will run a React application. The root of this React application is `./src/dev/index.tsx`

### storybook dev

```bash
yarn start
```

will run storybook in development mode. For more information on storybook you can find the documentation [here](https://storybook.js.org/)

## build files

When you run

```bash
yarn build
```

Two different outputs will be built.

### lib

```bash
yarn build:lib
```

outputs whatever is exported from the lib folder found here `./src/lib/index.ts`

### storybook

```bash
yarn build:storybook
```

outputs the storybook documentation in production mode. This is the production version of running `yarn start`. The storybook output is dependent on the build of the library so that the production build of the documentation uses the production build of the library.

## aliasing

In the `./.storybook/main.ts` file in the `viteFinal` method aliasing is applied. This allows the storybook files to reference the direct reference of the files during development mode by with `@lib` while using the production build of the lib during build time. It is highly recommended to reference the library with `@lib` like so

```typescript
import { Button } from `@lib`
```
