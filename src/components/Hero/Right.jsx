import React from 'react'
import { motion as Motion } from 'motion/react';
import Image from "../../assets/Pics/Me/aqib.jpeg";
import { useRef, useEffect, useState } from 'react';
function Right() {
  const text = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const width = viewportWidth;

    if (text.current) {
      const content = "I'm a Full Stack MERN Developer ";
      const radius =
        width >= 10 && width < 640 ? "175px" :
        width >= 640 && width < 1280 ? "246px" :
        "280px";

      text.current.innerHTML = content
        .split("")
        .map((char, index) => {
          return `<span className="roti" style="position: absolute; transform-origin: 0 ${radius}; transform: rotate(${index * 11}deg)">${char}</span>`;
        })
        .join("");
    }
  }, [viewportWidth]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Motion.div initial={{ y: 26, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, damping: 60 }} className="lg:w-[45%] w-full p-3 overflow-hidden flex items-center justify-center">
      <div className="p-5 max-sm:p-2" style={{
        // background: 'linear-gradient(to bottom, #a80a27, #6a058e)',
        borderRadius: '50%',
        animation: 'gradientMove 15s linear infinite'
      }}>
        <style>
          {`
            @keyframes gradientMove {
              0% { background: linear-gradient(to bottom, #a80a27, #6a058e); }
              25% { background: linear-gradient(to right, #a80a27, #6a058e); }
              50% { background: linear-gradient(to top, #a80a27, #6a058e); }
              75% { background: linear-gradient(to left, #a80a27, #6a058e); }
              100% { background: linear-gradient(to bottom, #a80a27, #6a058e); }
            }
          `}
        </style>
        <div className="rounded-[50%] bg-[var(--surface-elevated)]">
          <div className='rounded-[50%]'>
            <div
              className="xl:w-[450px] relative xl:h-[450px] max-sm:w-[290px] max-sm:h-[290px] w-[400px] h-[400px] rounded-[50%] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Image})` }}
            >
              <div className="absolute w-full h-full animate-spin" style={{ animation: 'spin 50s linear infinite' }}>
                <p ref={text} className='ss absolute xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg'
                  style={{
                    top:
                      (viewportWidth >= 10 && viewportWidth < 640) ? '-32px' :
                      (viewportWidth >= 640 && viewportWidth < 1280) ? '-45px' :
                      '-54px',
                    left:
                      (viewportWidth >= 10 && viewportWidth < 640) ? '49.9%' : '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    textAlign: 'center'
                  }}>
                  Full Stack MERN Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}

export default Right