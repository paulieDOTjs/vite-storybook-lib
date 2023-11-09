export type Styles = {
  blue10: string;
  blue20: string;
  button: string;
  green10: string;
  green20: string;
  "is-cool": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
