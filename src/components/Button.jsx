import React from 'react'

export default function Button({text,type="button",className="",varient="default",onClick,icon}) {

    const baseStyles = "font-semibold flex items-center max-sm:gap-1  gap-2 justify-center text-[20px] w-fit h-[50px] font-medium px-6 max-sm:px-3 rounded-[6px] cursor-pointer border transition-all duration-300 ";
    const varientStyles = {
        default: " bg-gradient-to-b  from-[#a80a27] to-[#6a039e] text-white  border-none hover:bg-gradient-to-r",
        outlined: "bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-400",
        shadowed: "bg-white text-black border-none  shadow-[rgba(0,0,0,.4)] hover:shadow-lg  transition-all duration-200 ",
    };

    return (
        <button type={type}  onClick={onClick} className={`${baseStyles}  ${varientStyles[varient]} ${className}  `}  >{text} {icon} </button>
    )
}
