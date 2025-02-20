import './Input.scss'
export default function Input({className, type, placeholder, onChangeFunction}) {

    return (
        <input
            onChange={(e) => onChangeFunction(e.target.value)}
            className={`page-input ${className}`}
            type={type}
            placeholder={placeholder}
        />
    );
}