import Hero from "@/components/Hero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

import { motion } from "framer-motion";

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#fbfbfb]"
    >
      <Hero title="Contact Us" image="../images/contact-bg.png" />
      <div className="container mt-[50px] pb-[100px] grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        <div className="max-w-[555px]">
          <h2 className="heading text-[40px]">Get in Touch</h2>
          <p className="text-gray-500">
            Using it can make you sound like you have been studying english for
            <br />a long time. Here’s the challenge
          </p>
          <div className="mt-[50px] gap-[30px] flex flex-col">
            <div className="flex gap-4 items-center pb-5 border-b border-gray-20">
              <div className="w-14 h-14 bg-primary-5 rounded-10 flex items-center justify-center">
                <img src="./icons/location.svg" alt="" />
              </div>
              <div>
                <p className="text-gray-500">Location</p>
                <p className="text-[18px] mt-2.5">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center pb-5 border-b border-gray-20">
              <div className="w-14 h-14 bg-primary-5 rounded-10 flex items-center justify-center">
                <img src="./icons/calling.svg" alt="" />
              </div>
              <div>
                <p className="text-gray-500">Phone Number</p>
                <p className="text-[18px] mt-2.5">(319) 555-0115</p>
              </div>
            </div>
            <div className="flex gap-4 items-center pb-5 border-b border-gray-20">
              <div className="w-14 h-14 bg-primary-5 rounded-10 flex items-center justify-center">
                <img src="./icons/share.svg" alt="" />
              </div>
              <div>
                <p className="text-gray-500">Follow Us</p>
                <div className="text-[18px] mt-2.5 flex gap-4">
                  <div className="relative cursor-pointer">
                    <span className="hover:animate-ping rounded-full opacity-0 hover:opacity-50 bg-primary-500 absolute top-0 bottom-0 right-0 left-0" />
                    <img
                      className="cursor-pointer"
                      src="../icons/facebook.svg"
                      alt="social icon"
                    />
                  </div>
                  <div className="relative cursor-pointer">
                    <span className="hover:animate-ping rounded-full opacity-0 hover:opacity-50 bg-primary-500 absolute top-0 bottom-0 right-0 left-0" />
                    <img
                      className="cursor-pointer"
                      src="../icons/instagram.svg"
                      alt="social icon"
                    />
                  </div>
                  <div className="relative cursor-pointer">
                    <span className="hover:animate-ping rounded-full opacity-0 hover:opacity-50 bg-primary-500 absolute top-0 bottom-0 right-0 left-0" />
                    <img
                      className="cursor-pointer"
                      src="../icons/twitter.svg"
                      alt="social icon"
                    />
                  </div>
                  <div className="relative cursor-pointer">
                    <span className="hover:animate-ping rounded-full opacity-0 hover:opacity-50 bg-primary-500 absolute top-0 bottom-0 right-0 left-0" />
                    <img
                      className="cursor-pointer"
                      src="../icons/linkedln.svg"
                      alt="social icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white rounded-10 p-5"
        >
          <div className="grid w-full items-center gap-3">
            <Label className="text-[12px]" htmlFor="name">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="grid w-full items-center gap-3">
            <Label className="text-[12px]" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="grid w-full items-center gap-3">
            <Label className="text-[12px]" htmlFor="phoneNumber">
              Phone Number
            </Label>
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="grid w-full items-center gap-3">
            <Label className="text-[12px]" htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button className="bg-primary-500 py-4 rounded-10 text-white">
            Send Enquiry
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
