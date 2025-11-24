import { InputNumber } from "../Atomos/InputNumber";
import { LabelNombre } from "../Atomos/label";

interface propsInputLabelNumber {
  label: string;
  value: number;
  onChange: (value: number) => void;
}
export function LabelInputNumber(props: propsInputLabelNumber) {
  const { label, value, onChange } = props;
  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <LabelNombre nombre={label}></LabelNombre>
        </div>
        <div className="col-auto">
          <InputNumber value={value} onChange={onChange} />
        </div>
      </div>
    </>
  );
}
