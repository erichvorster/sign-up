type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  type: string;
  name: string;
  placeholder: string;
};
const Input = ({
  label,
  value,
  onChange,
  error,
  type,
  name,
  placeholder,
}: InputProps) => {
  return (
    <div className="mb-5 relative flex flex-col">
      <label
        htmlFor={name}
        className="block text-gray-700 font-bold mb-1 tracking-wide text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-2 py-1 border-2 rounded bg-gray-100 autofill:bg-gray-100 placeholder:text-xs focus:border-2 focus:outline-yellow-200 ${
          error && "border-red-300"
        }`}
      />
      <span className="text-red-300 text-xs absolute -bottom-5">{error}</span>
    </div>
  );
};

export default Input;
