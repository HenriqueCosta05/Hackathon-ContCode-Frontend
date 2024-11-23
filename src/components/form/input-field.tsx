import React from "react";

interface InputFieldProps {
    type: string;
    label: string;
    placeholder: string;
    required: boolean;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    name: string;
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    label,
    placeholder,
    required,
    value,
    onChange,
    name,
}) => {
    return (
        <div className="w-full">
            <label className="space-x-3 block">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                name={name}
                className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
            />
        </div>
    );
};

export default InputField;
