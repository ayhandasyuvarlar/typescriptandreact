
import { InpuProps } from "../types/InputProps";

const Input = (props: InpuProps) => {
  return <input value={props.value} onChange={props.onChange}></input>;
};

export default Input;
