import React from 'react'

function IconCircle({ icon, url }) {
    return (
        <a href={url} target='_blank' className='w-[60px] h-[60px] bg-transparent border-4 border-[#a80a27] rounded-[50%] flex justify-center items-center text-[#a80a27] hover:text-white hover:bg-gradient-to-b  from-[#a80a27] to-[#6a039e] transition-all duration-300 ease-in  ' >{icon}</a>
    )
}

export default IconCircle