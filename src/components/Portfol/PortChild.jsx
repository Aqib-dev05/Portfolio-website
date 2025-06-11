import React from 'react'
import Pic from "../../assets/Pics/WeatherApp.png"
import Button from "../Button"

function PortChild({alignment = "flex-row" }) {
  return (
    <div className={`w-full my-4 gap-6 py-2 ${alignment}  flex max-lg:flex-col items-center justify-center `} >
        <div className='lg:w-[50%]  max-sm:w-[310px] w-[500px]  h-fit  border-green-300  rounded-2xl max-lg:border-[8px] lg:border-[12px] ' >
            <img className='object-cover w-[100%] '  src={Pic} alt="" />
        </div>
        <div className='lg:w-[50%] w-full flex justify-center items-center lg:block flex-col  '>
            <h4 className='text-[blue] text-xl  ' >Project 1</h4>
            <h3 className='font-semibold text-3xl my-2' >Weather App</h3>
            <p className='md:w-[86%]  my-5 text-xl max-lg:text-center max-lg:px-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet praesentium recusandae voluptate vitae labore fugiat?</p>
             <Button text="View Details" varient='shadowed' />
        </div>
    </div>
  )
}

export default PortChild