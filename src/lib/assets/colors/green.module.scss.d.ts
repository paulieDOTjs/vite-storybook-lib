export type Styles = {
  green10: string;
  green20: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
