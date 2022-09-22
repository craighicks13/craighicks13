export default interface IMessages {
  title: JSX.Element | string;
  content: JSX.Element | string;
  display: boolean;
  isError: boolean;
  closeWindow?: any;
}