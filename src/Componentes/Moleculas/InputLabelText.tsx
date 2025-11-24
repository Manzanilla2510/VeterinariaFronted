import { InputText } from "../Atomos/InputText";
import { LabelNombre } from "../Atomos/label";
interface propsInputLabelText {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function LabelInputText(props: propsInputLabelText) {
  const { label, value, onChange } = props;
  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto" >
          <LabelNombre nombre={label}></LabelNombre>
        </div>
        <div className="col-auto">
          <InputText value={value} onChange={onChange} />
        </div>
      </div>
    </>
  );
}
