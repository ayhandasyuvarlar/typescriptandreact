import { InpuProps } from "../types/InputProps.types";

const Input = ({ value, onChange }: InpuProps) => {
  return <input value={value} onChange={onChange}></input>;
};

export default Input;
