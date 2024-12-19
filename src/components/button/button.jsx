export default function Button({
    icon,
    children,
    onClick,
    className,
  }) {
    return (
      <button onClick={onClick} className={`flex items-center justify-center ${className}`}>
        {icon && <img src={icon} alt="icon" width={20} height={20} />}
        {children}
      </button>
    );
  }
  