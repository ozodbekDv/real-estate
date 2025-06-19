import Hero from "@/components/Hero";

function Contact() {
  return (
    <div>
      <Hero title="Contact Us" image="../images/contact-bg.png" />
      <div className="container mt-[50px] mb-[100px]">
        <div className="max-w-[555px]">
          <h2 className="heading text-[40px]">Get in Touch</h2>
          <p className="text-gray-500">
            Using it can make you sound like you have been studying english for{" "}
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
                <p className="text-[18px] mt-2.5 flex gap-4">
                  <img src="../icons/facebook.svg" alt="" />
                  <img src="../icons/instagram.svg" alt="" />
                  <img src="../icons/twitter.svg" alt="" />
                  <img src="../icons/linkedln.svg" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <form></form>
      </div>
    </div>
  );
}

export default Contact;
