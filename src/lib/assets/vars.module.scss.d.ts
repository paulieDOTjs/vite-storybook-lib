export type Styles = {
  blue10: string;
  blue20: string;
  green10: string;
  green20: string;
  "some-class": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
