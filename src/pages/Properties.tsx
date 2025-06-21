import { ArrowLeftIcon, ArrowRightIcon, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import PropertiesCardHor from "@/components/PropertiesCardHor";

import { motion } from "framer-motion";

const userData = [
  {
    name: "Alexa Mate",
    title: "Luxury Apartment in California",
    price: 250000,
    profileImage: "../images/alexa-mate.png",
    image: "../images/alexa-bg.png",
  },
  {
    name: "Joe Smith",
    title: "Elegant Villa sale in Miami",
    price: 7500000,
    profileImage: "../images/joe-smith.png",
    image: "../images/joe-bg.png",
  },
  {
    name: "Perry John",
    title: "Duplex Apartment for Rent in California",
    secondTitle: " ",
    price: 4378,
    profileImage: "../images/perry-john.png",
    image: "../images/perry-bg.png",
  },
  {
    name: "Wade Warren",
    title: "Elegant Villa sale in Miami",
    price: 400000,
    profileImage: "../images/wade-warren.png",
    image: "../images/wade-bg.png",
  },
  {
    name: "John Willions",
    title: "Duplex Apartment for Rent in California",
    price: 7865,
    profileImage: "../images/john-willions.png",
    image: "../images/john-bg.png",
  },
  {
    name: "Robert Fox",
    title: "Luxury Apartment in California",
    price: 4579920,
    profileImage: "../images/robert-fox.png",
    image: "../images/robert-bg.png",
  },
  {
    name: "John Willions",
    title: "Duplex Apartment for Rent in California",
    price: 7865,
    profileImage: "../images/john-willions.png",
    image: "../images/john-bg.png",
  },
];

function Properties() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mb-[100px]"
    >
      <h2 className="flex text-[14px] my-[50px]">
        <Link to="/">Home</Link>
        <ChevronRight className="text-dark-500 w-[15px] mx-[7px]" />
        Properties
      </h2>
      <div className="flex gap-[50px]">
        {/* Filter left */}
        <div className="w-[244px] sticky top-10">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["item-1"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                Select Location
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="California">California</SelectItem>
                    <SelectItem value="Miami">Miami</SelectItem>
                    <SelectItem value="NewYork">New York</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                Property Type
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2.5 text-balance">
                <div className="flex gap-2.5">
                  <Checkbox id="buy" name="buy" />
                  <Label htmlFor="buy">Buy</Label>
                </div>

                <div className="flex gap-2.5">
                  <Checkbox id="rent" name="rent" />
                  <Label htmlFor="rent">Rent</Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">
                Categories
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="flex gap-2.5">
                  <Checkbox id="Apartment" name="Apartment" />
                  <Label htmlFor="Apartment">Apartment</Label>
                </div>
                <div className="flex gap-2.5">
                  <Checkbox id="Villa" name="Villa" />
                  <Label htmlFor="Villa">Villa</Label>
                </div>
                <div className="flex gap-2.5">
                  <Checkbox id="Duplex" name="Duplex" />
                  <Label htmlFor="Duplex">Duplex</Label>
                </div>
                <div className="flex gap-2.5">
                  <Checkbox id="Houses" name="Houses" />
                  <Label htmlFor="Houses">Houses</Label>
                </div>
                <div className="flex gap-2.5">
                  <Checkbox id="Penthouse" name="Penthouse" />
                  <Label htmlFor="Penthouse">Penthouse</Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:no-underline">
                Property Size
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>Size: $0 - $2400 sqft</p>
                <Slider />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="hover:no-underline">
                Price Range
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-[16px]">
                <p>Price: $10000 - $30000</p>
                <img className="-mb-4" src="../images/chart-bg.png" alt="" />
                <Slider />
                <div className="flex justify-between">
                  <p>$10000</p>
                  <p>$30000</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="hover:no-underline">
                Rooms
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <span>Bedroom</span>
                <Select name="bedroom" defaultValue="5">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
                <p>Bathroom</p>
                <Select name="bathroom" defaultValue="3">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="">
          <div className="flex justify-between">
            <p>Showing 1–16 of 72 results</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Shot by Price: Low to High" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="California">California</SelectItem>
                <SelectItem value="Miami">Miami</SelectItem>
                <SelectItem value="NewYork">New York</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-[30px] mt-[30px]">
            {userData.map((item, index) => (
              <PropertiesCardHor key={index} user={item} />
            ))}
            <Pagination>
              <PaginationContent className="flex gap-2.5">
                <PaginationItem>
                  <ArrowLeftIcon />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="bg-primary-500 text-white hover:bg-primary-700 hover:text-white">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <ArrowRightIcon />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Properties;
