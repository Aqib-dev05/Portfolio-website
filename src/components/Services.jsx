import React from "react";
import { Code, Layout, Globe, Search, ChevronRight } from "lucide-react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. Focused on delivering clean code, modern UI, and seamless user experience.",
      icon: <Layout className="w-6 h-6 text-white zzz"  />,
    },
    {
      id: 2,
      title: "Website Development",
      description:
        "Building dynamic websites tailored for businesses and individuals. From static pages to fully interactive platforms, optimized for speed and mobile performance.",
      icon: <Globe className="w-6 h-6 text-white zzz"  />,
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Improving website visibility on search engines with both on-page and off-page SEO strategies, boosting organic traffic and helping businesses grow online.",
      icon: <Search className="w-6 h-6 text-white zzz"  />,
    },
    {
      id: 4,
      title: "Custom Web Solutions",
      description:
        "Creating tailored solutions for unique business needs, whether it’s a service site, portfolio, or product display—designed for both aesthetics and functionality.",
      icon: <Code className="w-6 h-6 text-white zzz"  />,
    },
  ];

  return (
    <section className="w-full py-10">
      <h2 className="text-center font-[Dance] py-4 text-5xl border-b-4 border-[#a80a27] w-fit mx-auto font-extrabold">
        Our{" "}
        <span className="bg-gradient-to-b  from-[#a80a27] to-[#6a039e] blen text-transparent">
          Services
        </span>
      </h2>
      <p className="lg:w-[40%] w-[86%] text-center mx-auto my-5 text-lg">
        We deliver high-quality digital solutions crafted to meet your specific
        needs and exceed expectations.
      </p>
      <div className="w-full xl:w-[85%] mx-auto md:p-6 p-2  rounded-lg  flex flex-wrap justify-center items-center gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className=" service-card transition-all duration-300 flex  w-[310px]  h-[400px] max-sm:h-[auto] max-sm:px-2 max-sm:py-5  bg-[#a80a272a] rounded-2xl  flex-col items-start gap-4 p-3 border-b border-gray-200"
          >
            <div className="flex sr-ico transition-all duration-600 items-center justify-center w-11 h-11 bg-[#a80a27] rounded-full">
              {service.icon}
            </div>
            <div>
              <h3 className="text-[23px] my-3 font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 text-[18px] ">
                {service.description}
              </p>
            </div>
            <a
              href="#"
              className="flex transition-all duration-500 items-center justify-center text-lg text-[#a80a27] font-medium "
            >
              Learn More <ChevronRight />{" "}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
