export type Styles = {
  blue10: string;
  blue20: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
