import React from 'react'
import Image from "../../assets/Pics/3d-cartoon-style-character.png";

function Right() {

  return (
    <div className="lg:w-[45%] w-full  flex items-center justify-center">

    

        <div className="p-3 max-sm:p-2" style={{
          background: 'linear-gradient(to bottom, #a80a27, #6a058e)',
          borderRadius: '50%'
        }}>
          <div className="rounded-[50%] bg-white">
            <div className='border-blue-600 border-6 max-sm:border-4 rounded-[50%]' >
              <div
                className="xl:w-[450px] xl:h-[450px] max-sm:w-[290px] max-sm:h-[290px] w-[400px] h-[400px] rounded-[50%] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Image})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

    
  )
}

export default Right