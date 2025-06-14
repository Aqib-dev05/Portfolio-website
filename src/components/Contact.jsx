import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import Logo from "../assets/logos/logo-dark-transparent.png";
import Button from "./Button";


function Contact() {

  const [state, handleSubmit] = useForm("xpwrrako");
  const year = new Date().getFullYear();


  useEffect(() => {
    if (state.succeeded) {
      window.location.reload();
    }
  }, [state.succeeded]);

  const FooterIcons = [
    {
      icon: <Instagram strokeWidth={2} size={30} />,
      link: "https://instagram.com/aqibali025",
    },
    {
      icon: <Github strokeWidth={2} size={30} />,
      link: "https://github.com/Aqib-dev05",
    },
    {
      icon: <Facebook strokeWidth={2} size={30} />,
      link: "https://facebook.com/profile.php?id=100059532027132&mibextid=rS40aB7S9Ucbxw6v",
    },
    {
      icon: <Linkedin strokeWidth={2} size={30} />,
      link: "https://linkedin.com/in/aqib-ali-37a6a3357",
    },
    {
      icon: <Twitter strokeWidth={2} size={30} />,
      link: "https://www.twitter.com",
    },
  ];
  return (
    <>
      <section id="contact" className=" pt-30 flex py-8 max-lg:flex-col items-center gap-8 lg:px-4 xl:px-8 bg-gray-300 ">
        <div className="lg:w-[50%] w-full  p-1">
          <h3 className="text-3xl uppercase font-bold ">contact</h3>
          <h5 className="mt-8 text-xl font-bold">Drop Me a Message</h5>
          <p className="pb-6 mt-4">
            If you have any questions or want to work together, feel free to
            contact me. I'll get back to you as soon as possible.
          </p>

          <div className=" flex flex-col  gap-6">
            <div className="flex mt-6 gap-3  items-center">
              <div className="bg-white hover:text-white hover:bg-[#a80a27] transition-all duration-300 text-[#a80a27] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] ">
                <Phone />
              </div>

              <a
                className="hover:text-[#a80a27] hover:translate-x-2 transition-all duration-300 "
                target="_blank"
                href="tel:+923284169020"
              >
                {" "}
                +92 328 4169020{" "}
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-white hover:text-white hover:bg-[#a80a27] transition-all duration-300 text-[#a80a27] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] ">
                <Mail />
              </div>

              <a
                className="hover:text-[#a80a27] hover:translate-x-2 transition-all duration-300 "
                target="_blank"
                href="mailto:aqibgithub@gmail.com"
              >
                {" "}
                aqibgithub@gmail.com{" "}
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-white hover:text-white hover:bg-[#a80a27] transition-all duration-300 text-[#a80a27] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] ">
                <MapPin />
              </div>

              <a
                className="hover:text-[#a80a27] hover:translate-x-2 transition-all duration-300 "
                target="_blank"
                href="https://www.google.com/maps/place/Sharaqpur,+Pakistan"
              >
                {" "}
                Sharaqpur,Pakistan{" "}
              </a>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="lg:w-[50%] w-[96%] ">
          <form onSubmit={handleSubmit} className="flex flex-col px-7 py-7 max-md:px-4 max-xl:px-5 gap-5 rounded-3xl bg-gray-100 border-1 border-[#a80a27] items-center justify-center">
            <input
              className="w-full h-11 rounded-xl p-4  text-xl border-1 border-[#a80a27] focus:outline-0  bg-gray-100"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full h-11 rounded-xl p-4  text-xl border-1 border-[#a80a27] focus:outline-0  bg-gray-100"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full h-30 rounded-xl p-4  text-xl border-1 border-[#a80a27] focus:outline-0  bg-gray-100"
              name="message"
              placeholder="Message"
            ></textarea>

            <Button disabled={state.submitting} type="submit" text={state.submitting ? "sending" : "send"} className="w-full" />
          </form>
        </div>
      </section>
      <div className="h-[1px]  bg-gray-400" ></div>
      <footer className="bg-gray-300 flex-wrap flex items-center justify-between py-12 px-15 max-md:px-4 max-lg:px-9 ">
        <div className="flex items-center justify-center gap-2">
          <img className="w-[180px] max-lg:w-[140px] " src={Logo} alt="aqib" />
          <p>
            {"\u00A9"} {year} Protfolio.All rights reserved.{" "}
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 max-md:w-full max-md:mt-5  ">
          {
            FooterIcons.map((el, i) => (
              <a href={el.link} key={i} className="text-[#a80a27a8] hover:text-[#a80a27]  transition-all duration-300 " >
                {el.icon}
              </a>
            ))
          }
        </div>
      </footer>
    </>
  );
}

export default Contact;
