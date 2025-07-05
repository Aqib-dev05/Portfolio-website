import React from 'react'
import Button from "../Button"

function PortChild({alignment = "flex-row",borderColor = "aqua",title,description,id,image,link}) {
  return (
    <div className={`w-full  gap-6 py-8 ${alignment} border-gray-400 border-b-[1px]  flex max-lg:flex-col items-center justify-center `} >
        <div style={{borderColor:borderColor}} className={`lg:w-[50%] overflow-hidden  max-sm:w-[98%] w-[500px]  max-sm:h-[200px] max-md:h-[250px] h-[300px]    rounded-2xl max-lg:border-[8px] lg:border-[12px] `} >
            <img src={image} alt="as" className='object-fill  w-[100%] h-full hover:scale-[1.15] transition-all duration-400 '   />
        </div>
        <div className='lg:w-[50%] w-full flex justify-center items-center lg:block flex-col  '>
            <h4 className='text-[blue] text-xl  ' >Project {id}</h4>
            <h3 className='font-semibold text-3xl my-2' >{title}</h3>
            <p className='md:w-[86%]  my-5 text-xl max-lg:text-center max-lg:px-1' >{description}</p>
             <a href={link} target='_blank'  ><Button text="View Details" varient='shadowed' /></a>
        </div>
    </div>
  )
}

export default PortChild