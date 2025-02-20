import './Button.scss';
import Icon from './Icon';

export default function Button({ className, label, iconColor, clickHandler }) {

    return (
        <button onClick={clickHandler} className={`btn ${className}`}>
            {label}
            <Icon iconColor={iconColor} />
        </button>
    );
}