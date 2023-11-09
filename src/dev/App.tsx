import classNames from "classnames";
import styles from "./App.module.scss";
import { Button, CssVarProvider } from "../lib";

export const App = () => {
  return (
    <CssVarProvider>
      <div className={classNames(styles.App)}>
        hello
        <div>
          <Button isCool={true}>i am a button</Button>
        </div>
      </div>
    </CssVarProvider>
  );
};
