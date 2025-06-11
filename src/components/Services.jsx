import React from 'react'
import { Code, Layout, Globe, Search, ChevronRight } from "lucide-react";

function Services() {


  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. Focused on delivering clean code, modern UI, and seamless user experience.",
      icon: <Layout className="w-6 h-6 text-white" />,
    },
    {
      id: 2,
      title: "Website Development",
      description:
        "Building dynamic websites tailored for businesses and individuals. From static pages to fully interactive platforms, optimized for speed and mobile performance.",
      icon: <Globe className="w-6 h-6 text-white" />,
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Improving website visibility on search engines with both on-page and off-page SEO strategies, boosting organic traffic and helping businesses grow online.",
      icon: <Search className="w-6 h-6 text-white" />,
    },
    {
      id: 4,
      title: "Custom Web Solutions",
      description:
        "Creating tailored solutions for unique business needs, whether it’s a service site, portfolio, or product display—designed for both aesthetics and functionality.",
      icon: <Code className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className='w-full py-10'>
        <h2 className='text-center py-4 text-5xl border-b-4 border-[#a80a27] w-fit mx-auto font-extrabold'>Our <span className='bg-gradient-to-b  from-[#a80a27] to-[#6a039e] blen text-transparent' >Services</span></h2>
        <p className='lg:w-[40%] w-[86%] text-center mx-auto my-5 text-lg'>We deliver high-quality digital solutions crafted to meet your specific needs and exceed expectations.</p>
        <div className="w-full xl:w-[85%] mx-auto p-6  rounded-lg  flex flex-wrap justify-center items-center gap-8">
            {services.map((service) => (
                <div key={service.id} className="flex w-[250px] h-[450px] bg-[#a80a272a] rounded-2xl min-h-[300px] flex-col items-start gap-4 p-6 border-b border-gray-200">
                    <div className="flex items-center justify-center w-11 h-11 bg-[#a80a27] rounded-full">
                        {service.icon}
                    </div>
                    <div>
                        <h3 className="text-[23px] my-4 font-semibold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 mt-8 text-[16px] ">{service.description}</p>
                    </div>
                    <a href="#" className='flex items-center justify-center text-lg text-[#a80a27] font-medium '>Learn More <ChevronRight/> </a>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services