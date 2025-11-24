interface propsText {
  value: string;
  onChange: (value: string) => void;
}
export function InputText(props: propsText) {
  const { value, onChange } = props;
  return (
    <>
      <div className="mb-3">

        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
}
