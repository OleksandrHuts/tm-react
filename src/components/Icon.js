export default function Icon({iconColor}) {

    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7188 21H21.375V28H18.25V21H15.6875V18.125H18.25V15.9062C18.25 13.4062 19.75 12 22.0312 12C23.125 12 24.2812 12.2188 24.2812 12.2188V14.6875H23C21.75 14.6875 21.375 15.4375 21.375 16.25V18.125H24.1562L23.7188 21Z" fill={iconColor}/>
            <circle opacity="0.4" cx="20" cy="20" r="19.5" stroke={iconColor}/>
        </svg>
    );
}