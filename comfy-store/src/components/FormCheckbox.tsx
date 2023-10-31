function FormCheckbox({ label, name, defaultValue, size }: any) {
  return (
    <div className="form-control items-center">
      <label htmlFor={label} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
}

export default FormCheckbox;
