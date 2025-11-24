interface propsNumber {
  value: number;
  onChange: (value: number) => void;
}
export function InputNumber(props: propsNumber) {
  const { value, onChange } = props;
  return (
    <>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </>
  );
}
