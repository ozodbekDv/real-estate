import { ChevronRight, Heart, MapPin, Plus, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertiesCard } from "@/components";
import { Progress } from "@/components/ui/progress";

import BackForwardBtns from "@/components/BackForwardBtns";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const userData = [
  {
    name: "Alexa Mate",
    title: "Luxury Apartment in",
    secondTitle: "California",
    price: 250000,
    profileImage: "../images/alexa-mate.png",
    image: "../images/alexa-bg.png",
  },
  {
    name: "Joe Smith",
    title: "Elegant Villa sale in",
    secondTitle: "Miami",
    price: 7500000,
    profileImage: "../images/joe-smith.png",
    image: "../images/joe-bg.png",
  },
  {
    name: "Perry John",
    title: "Duplex Apartment for",
    secondTitle: "Rent in California ",
    price: 4378,
    profileImage: "../images/perry-john.png",
    image: "../images/perry-bg.png",
  },
];

const featuersData = [
  {
    title: "Swimming Pool",
    icon: "../icons/product/pool.svg",
  },
  {
    title: "24 Hours Security",
    icon: "../icons/product/user-polygon.svg",
  },
  {
    title: "Parking",
    icon: "../icons/product/driving.svg",
  },
  {
    title: "Private Lift",
    icon: "../icons/product/door-lift.svg",
  },
  {
    title: "Indoor Games",
    icon: "../icons/product/basket-ball.svg",
  },
  {
    title: "Wifi",
    icon: "../icons/product/wifi.svg",
  },
  {
    title: "Sit Out",
    icon: "../icons/product/sitting.svg",
  },
  {
    title: "Gym",
    icon: "../icons/product/gym.svg",
  },
  {
    title: "24 Hours Water",
    icon: "../icons/product/water.svg",
  },
];

function Product() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="flex text-[14px] my-[50px] container">
        <Link to="/">Home</Link>
        <ChevronRight className="text-dark-500 w-[15px] mx-[7px]" />
        <Link to="/properties">Properties</Link>
        <ChevronRight className="text-dark-500 w-[15px] mx-[7px]" />
        <Link to="#">Elegant Villa sale in Miami</Link>
      </h2>

      <img
        className="sticky right-0 left-0 w-[100vw]"
        src="../images/product-bg.png"
        alt=""
      />

      <div className="container">
        <div className="flex gap-5 translate-y-[-50%]">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              className="rounded-10"
              src="../images/product/product-page-1.png"
              alt=""
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              className="rounded-10"
              src="../images/product/product-page-2.png"
              alt=""
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              className="rounded-10"
              src="../images/product/product-page-3.png"
              alt=""
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              className="rounded-10"
              src="../images/product/product-page-4.png"
              alt=""
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              className="rounded-10"
              src="../images/product/product-page-5.png"
              alt=""
            />
          </motion.div>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h2 className="heading text-[30px] mb-3">Beton Elegant Villa</h2>
            <p className="flex gap-2.5">
              <MapPin />
              3891 Ranchview Dr. Richardson, California 62639
            </p>
            <p className="font-bold text-[30px] mt-5">$7500000</p>
          </div>
          <div className="flex gap-2 items-center">
            <button className="button-share">
              <Plus />
            </button>
            <button className="button-share">
              <Heart />
            </button>
            <button className="button-share">
              <Share2 />
            </button>
          </div>
        </div>

        <hr className="border-0 bg-gray-20 h-[1px] mt-5 mb-[50px]" />
        <div>
          <div className="flex gap-[30px]">
            <Tabs defaultValue="Descriptions" className="w-[653px]">
              <TabsList className="flex gap-[30px]">
                <TabsTrigger value="Descriptions">Descriptions</TabsTrigger>
                <TabsTrigger value="Features">Features</TabsTrigger>
                <TabsTrigger value="calculator">
                  Mortgage Calculator
                </TabsTrigger>
                <TabsTrigger value="tour">Schedule a Tour</TabsTrigger>
              </TabsList>
              <TabsContent className="pt-5" value="Descriptions">
                <div className="flex flex-col gap-5">
                  <p>
                    t is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy.
                  </p>
                  <p>
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the
                    like). There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </p>
                  <p>
                    It uses a dictionary of over 200 Latin words, combined with
                    a handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </p>
                </div>
                <hr className="p-0 m-0 border-0 bg-gray-20 h-[1px] my-[20px]" />
                <div>
                  <h3 className="font-bold text-[18px] mb-5">Details</h3>
                  <div className="flex gap-[76px] ">
                    <div className="flex gap-5">
                      <div className="font-bold flex flex-col gap-4">
                        <h4>Built Up Area (sqft):</h4>
                        <h4>Dimensions:</h4>
                        <h4>Carpet Area (sqft):</h4>
                        <h4>Built Year:</h4>
                        <h4>Parking:</h4>
                      </div>
                      <div className="flex flex-col gap-4">
                        <h4>3240 sqft</h4>
                        <h4>40x50</h4>
                        <h4>2560 sqft</h4>
                        <h4>2017</h4>
                        <h4>2</h4>
                      </div>
                    </div>
                    <hr className="bg-gray-20 w-[1px] h-[179px]" />
                    <div className="flex gap-5">
                      <div className="font-bold flex flex-col gap-4">
                        <h4>Built Up Area (sqft):</h4>
                        <h4>Dimensions:</h4>
                        <h4>Carpet Area (sqft):</h4>
                        <h4>Built Year:</h4>
                        <h4>Parking:</h4>
                      </div>
                      <div className="flex flex-col gap-4">
                        <h4>3240 sqft</h4>
                        <h4>40x50</h4>
                        <h4>2560 sqft</h4>
                        <h4>2017</h4>
                        <h4>2</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="p-0 m-0 border-0 bg-gray-20 h-[1px] my-[20px]" />
                <div>
                  <h3 className="font-bold text-[18px] mb-5">Floor Plan</h3>
                  <div className="flex gap-2.5">
                    <img
                      src="../images/product/floor.png"
                      alt="floor project"
                    />
                    <img
                      src="../images/product/floor-2.png"
                      alt="floor project"
                    />
                  </div>
                </div>
                <hr className="p-0 m-0 border-0 bg-gray-20 h-[1px] my-[20px]" />
                <div>
                  <h3 className="font-bold text-[18px] mb-5">Location</h3>
                  <img src="../images/product/location.png" alt="location" />
                </div>
              </TabsContent>
              <TabsContent className="pt-5" value="Features">
                <div>
                  <p className="mb-5">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable.
                  </p>
                  <p>
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                </div>
                <hr className="p-0 m-0 border-0 bg-gray-20 h-[1px] my-[20px]" />
                <div className="grid md:grid-cols-3 gap-[30px]">
                  {featuersData.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-10 p-5 flex flex-col items-center gap-2.5"
                    >
                      <img src={item.icon} alt={item.title + " icon"} />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="calculator">
                <div>
                  <p>
                    <span className="font-bold text-[20px]">$8000</span> /Month
                  </p>
                  <Progress value={80} className="my-3" />
                  <div className="flex flex-col gap-4">
                    <span>
                      <span className="w-2.5 h-2.5 bg-primary-500 rounded-full mr-2.5 inline-block" />
                      Principle & Interest
                    </span>
                    <span>
                      <span className="w-2.5 h-2.5 bg-primary-200 rounded-full mr-2.5 inline-block" />
                      Home Insurance
                    </span>
                  </div>
                </div>
                <hr className="p-0 m-0 border-0 bg-gray-20 h-[1px] my-[20px]" />
                <div className="grid grid-cols-2 gap-x-[11px] gap-y-5">
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="amount" className="mb-[5px]">
                      Loan Amount
                    </Label>
                    <Input type="text" id="amount" placeholder="Amount" />
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="Payment" className="mb-[5px]">
                      Down Payment
                    </Label>
                    <Input type="text" id="Payment" placeholder="Payment" />
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="Rate" className="mb-[5px]">
                      Interest Rate
                    </Label>
                    <Input type="text" id="Rate" placeholder="Rate" />
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="Terms" className="mb-[5px]">
                      Loan Terms (Years)
                    </Label>
                    <Input type="text" id="Terms" placeholder="Terms" />
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="Insurance" className="mb-[5px]">
                      Home Insurance
                    </Label>
                    <Input type="text" id="Insurance" placeholder="Insurance" />
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="Tax" className="mb-[5px]">
                      Property Tax
                    </Label>
                    <Input type="text" id="Tax" placeholder="Tax" />
                  </div>
                </div>
                <button className="rounded-10 bg-primary-500 py-4 px-[70px] mt-[30px] text-white">
                  Calculate
                </button>
              </TabsContent>
              <TabsContent value="tour">
                <form className="flex flex-col gap-5">
                  <div className="flex gap-5">
                    <div className="w-full items-center gap-3">
                      <Label htmlFor="Insurance" className="mb-[5px]">
                        Date
                      </Label>
                      <Input
                        className="py-4"
                        type="date"
                        id="Insurance"
                        placeholder="Insurance"
                      />
                    </div>
                    <div className="w-full items-center gap-3">
                      <Label htmlFor="Insurance" className="mb-[5px]">
                        Time
                      </Label>
                      <Input
                        className="py-4"
                        type="time"
                        id="Insurance"
                        placeholder="Insurance"
                      />
                    </div>
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="name" className="mb-[5px]">
                      Name
                    </Label>
                    <Input
                      className="py-4"
                      type="text"
                      id="name"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="email" className="mb-[5px]">
                      Email Address
                    </Label>
                    <Input
                      className="py-4"
                      type="email"
                      id="email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="w-full items-center gap-3">
                    <Label htmlFor="phone" className="mb-[5px]">
                      Phone Number
                    </Label>
                    <Input
                      className="py-4"
                      type="text"
                      id="phone"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      className="h-[200px]"
                      placeholder="Enter Your Message"
                    />
                  </div>
                  <button className="rounded-10 bg-primary-500 py-4 px-[70px] text-white w-[250px] ">
                    Submit Request
                  </button>
                </form>
              </TabsContent>
            </Tabs>
            <div className="bg-white h-full p-5 rounded-2xl">
              <div className="flex gap-2.5">
                <img
                  className="w-[70px] h-[70px] rounded-10"
                  src="../images/agent-Leasie.png"
                  alt="user image"
                />
                <div>
                  <p className="text-[24px] heading mb-2.5">Leasie Willions</p>
                  <p className="text-gray-500">Real Estate Agent</p>
                </div>
              </div>
              <hr className="border-0 bg-gray-20 h-[1px] mt-5 mb-[50px]" />
              <form className="flex gap-5 flex-col w-[417px]">
                <div className="w-full items-center gap-3">
                  <Label htmlFor="name" className="mb-[5px]">
                    Name
                  </Label>
                  <Input
                    className="py-4"
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="w-full items-center gap-3">
                  <Label htmlFor="email" className="mb-[5px]">
                    Email
                  </Label>
                  <Input
                    className="py-4"
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="w-full items-center gap-3">
                  <Label htmlFor="phone" className="mb-[5px]">
                    Phone Number
                  </Label>
                  <Input
                    className="py-4"
                    type="text"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div>
                  <Label htmlFor="agenteMssage">Message</Label>
                  <Textarea
                    id="agenteMssage"
                    name="agenteMssage"
                    placeholder="Enter Your Message"
                    className="h-[104px]"
                  />
                </div>
                <div>
                  <button className="rounded-10 bg-primary-500 py-4 px-[70px] text-white w-full ">
                    Send Enquiry
                  </button>
                  <div className="flex gap-3 mt-3">
                    <button
                      type="button"
                      className="rounded-10 bg-white border-primary-500 border py-4 px-[70px] text-primary-500 w-full inline-flex gap-2.5 items-center"
                    >
                      <img src="../icons/calling.svg" alt="calling icon" />
                      Call
                    </button>
                    <button
                      type="button"
                      className="rounded-10 bg-white border-primary-500 border py-4 px-[70px] text-primary-500 w-full inline-flex gap-2.5 items-center"
                    >
                      <img src="../icons/whatsapp.svg" alt="whatsup icon" />
                      Whatsapp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="my-[100px]">
            <div className="flex justify-between mb-[50px]">
              <h2 className="font-secondary text-[40px]">Similar Properties</h2>
              <BackForwardBtns />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
              {userData.map((user, index) => (
                <PropertiesCard user={user} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
