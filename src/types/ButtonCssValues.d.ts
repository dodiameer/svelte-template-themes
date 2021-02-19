export default interface ButtonCssValues {
  input: {
    textColor: string;
    backgroundColor: string;
    outlined: boolean;
    pill: boolean;
  };
  output: {
    color: string;
    background: string;
    border: string;
    "border-radius": string;
    focus: string;
  };
}
