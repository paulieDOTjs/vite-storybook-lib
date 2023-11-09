import classNames from "classnames";
import styles from "./css-var-provider.module.scss";
import { applyCSSVars } from "../../assets/cssVars";
import { useEffect } from "react";

export type CssVarProviderProps = Omit<JSX.IntrinsicElements["div"], "ref">;

export const CssVarProvider: (props: CssVarProviderProps) => JSX.Element = ({
  className,
  ...rest
}) => {
  useEffect(() => {
    applyCSSVars();
  }, []);

  return (
    <div
      {...rest}
      className={classNames(styles["css-var-provider"], className)}
    />
  );
};
