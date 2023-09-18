type RadioButtonProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  checked: boolean;
};

const RadioButton = ({
  label,
  value,
  onChange,
  type,
  name,
  checked,
}: RadioButtonProps) => {
  return (
    <label className="inline-flex items-center mr-4 cursor-pointer">
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 cursor-pointer"
      />
      <span className="ml-2 text-sm ">{label}</span>
    </label>
  );
};

export default RadioButton;
