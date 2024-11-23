interface InputFieldProps {
    type: 'text' | 'email' | 'password' | 'select' | 'textarea';
    label: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    name: string;
    className: string;
    children?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    label,
    placeholder,
    required,
    value,
    onChange,
    name,
    className,
    children,
}) => {
    if (type === 'select') {
        return (
            <div className="w-full">
                <label className="block">{label}</label>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={className}
                >
                    {children}
                </select>
            </div>
        );
    }

    if (type === 'textarea') {
        return (
            <div className="w-full">
                <label className="block">{label}</label>
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={className}
                />
            </div>
        );
    }

    return (
        <div className="w-full">
            <label className="block">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={className}
            />
        </div>
    );
};

export default InputField