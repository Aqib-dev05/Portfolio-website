import React from 'react'
import Button from "../Button"

function PortChild({alignment = "flex-row",borderColor = "aqua",title,description,id,image,link}) {
  return (
    <div className={`w-full my-4 gap-6 py-2 ${alignment}  flex max-lg:flex-col items-center justify-center `} >
        <div style={{borderColor:borderColor}} className={`lg:w-[50%] overflow-hidden  max-sm:w-[310px] w-[500px]  h-fit max-h-[400px]    rounded-2xl max-lg:border-[8px] lg:border-[12px] `} >
            <img src={image} alt="as" className='object-cover w-[100%] hover:scale-[1.25] transition-all duration-300 '   />
        </div>
        <div className='lg:w-[50%] w-full flex justify-center items-center lg:block flex-col  '>
            <h4 className='text-[blue] text-xl  ' >Project {id}</h4>
            <h3 className='font-semibold text-3xl my-2' >{title}</h3>
            <p className='md:w-[86%]  my-5 text-xl max-lg:text-center max-lg:px-1' >{description}</p>
             <a href={link}  ><Button text="View Details" varient='shadowed' /></a>
        </div>
    </div>
  )
}

export default PortChild