"use client"

const Button = ({label, outline, onClick, disabled}) => {
  return (
    <button 
        onClick={onClick}
        disabled={disabled}
        className={`
        relative
        rounded-lg
        hover:opacity-80
        transition
        w-32 h-9
        border-2
        border-theme1
        font-medium
        ${outline ? 'bg-white' : 'bg-theme1'}
        ${outline ? 'text-black' : 'text-white'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}>
        {label}
    </button>
  )
}

export default Button