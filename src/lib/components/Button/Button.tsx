import classNames from "classnames";
import styles from "./button.module.scss";

export type ButtonProps = { isCool?: boolean } & Omit<
  JSX.IntrinsicElements["button"],
  "ref"
>;

export const Button: (props: ButtonProps) => JSX.Element = ({
  isCool = false,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(
        styles["button"],
        isCool && styles["is-cool"],
        className
      )}
    ></button>
  );
};
