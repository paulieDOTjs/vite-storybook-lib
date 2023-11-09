import cssVars from "./vars.module.scss";

export const applyCSSVars = () => {
  const root = document.querySelector(":root") as HTMLAnchorElement | null;

  if (!root) {
    console.error("Unable to find root. Site colors may not be accurate.");
    return;
  }

  Object.entries(cssVars)
    // the filter is removing all imported variables that start with vite-storybook-lib.
    // since the hashing of the class names of this app prepends all classes with "vite-storybook-lib"
    // this filter removes all classnames since those shouldn't as css variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, cssVarValue]) => !cssVarValue.startsWith("vite-storybook-lib"))
    .forEach(([cssVarName, cssVarValue]) => {
      root.style.setProperty(`--vite-storybook-lib-${cssVarName}`, cssVarValue);
    });
};
