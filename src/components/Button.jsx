import React from 'react'

export default function Button({text,className="",varient="default",onClick}) {

    const baseStyles = "font-semibold text-[20px] w-fit h-[50px] font-medium px-6 rounded-[6px] cursor-pointer border transition-all duration-300 ";
    const varientStyles = {
        default: " bg-gradient-to-b  from-[#a80a27] to-[#6a039e] text-white  border-none hover:bg-gradient-to-r",
        outlined: "bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-400",
        shadowed: "bg-white text-black border-none shadow-lg hover:bg-gradient-to-r from-[crimson] to-[purple] hover:text-white hover:border-none",
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${varientStyles[varient]} ${className}  `}  >{text}</button>
    )
}
