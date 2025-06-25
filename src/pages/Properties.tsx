import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRight } from "lucide-react";
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

const properties = [
  {
    name: "Alexa Mate",
    title: "Luxury Apartment in California",
    price: 250000,
    profileImage: "../images/alexa-mate.png",
    image: "../images/alexa-bg.png",
    location: { country: "USA", city: "California" },
    type: "Buy",
    category: "Apartment",
    size: 1800,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    name: "Joe Smith",
    title: "Elegant Villa sale in Miami",
    price: 7500000,
    profileImage: "../images/joe-smith.png",
    image: "../images/joe-bg.png",
    location: { country: "USA", city: "Miami" },
    type: "Buy",
    category: "Villa",
    size: 2200,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    name: "Perry John",
    title: "Duplex Apartment for Rent in California",
    price: 4378,
    profileImage: "../images/perry-john.png",
    image: "../images/perry-bg.png",
    location: { country: "USA", city: "California" },
    type: "Rent",
    category: "Duplex",
    size: 1450,
    bedrooms: 2,
    bathrooms: 1,
  },
];

export default function Properties() {
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>();
  const [selectedType, setSelectedType] = useState<
    "Buy" | "Rent" | undefined
  >();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(3000);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [selectedBedrooms, setSelectedBedrooms] = useState<
    number | undefined
  >();
  const [selectedBathrooms, setSelectedBathrooms] = useState<
    number | undefined
  >();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>();

  const resetFilters = () => {
    setSelectedCountry(undefined);
    setSelectedType(undefined);
    setSelectedCategories([]);
    setMinSize(0);
    setMaxSize(3000);
    setMinPrice(0);
    setMaxPrice(10000000);
    setSelectedBedrooms(undefined);
    setSelectedBathrooms(undefined);
    setSortOrder(undefined);
  };

  const filtered = properties
    .filter((p) => !selectedCountry || p.location.city === selectedCountry)
    .filter((p) => !selectedType || p.type === selectedType)
    .filter(
      (p) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(p.category)
    )
    .filter((p) => p.size >= minSize && p.size <= maxSize)
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)
    .filter((p) => !selectedBedrooms || p.bedrooms === selectedBedrooms)
    .filter((p) => !selectedBathrooms || p.bathrooms === selectedBathrooms)
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

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
        {/* FILTER SECTION */}
        <div className="w-[244px] sticky top-10">
          <Accordion type="multiple" defaultValue={["item-1"]}>
            {/* Country */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Select Location</AccordionTrigger>
              <AccordionContent>
                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="California">California</SelectItem>
                    <SelectItem value="Miami">Miami</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Type */}
            <AccordionItem value="item-2">
              <AccordionTrigger>Property Type</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2.5">
                {["Buy", "Rent"].map((type) => (
                  <div key={type} className="flex gap-2.5">
                    <Checkbox
                      checked={selectedType === type}
                      onCheckedChange={(checked) =>
                        setSelectedType(
                          checked ? (type as "Buy" | "Rent") : undefined
                        )
                      }
                    />
                    <Label>{type}</Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Categories */}
            <AccordionItem value="item-3">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2.5">
                {["Apartment", "Villa", "Duplex"].map((cat) => (
                  <div key={cat} className="flex gap-2.5">
                    <Checkbox
                      checked={selectedCategories.includes(cat)}
                      onCheckedChange={(checked) =>
                        setSelectedCategories((prev) =>
                          checked
                            ? [...prev, cat]
                            : prev.filter((c) => c !== cat)
                        )
                      }
                    />
                    <Label>{cat}</Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Size */}
            <AccordionItem value="item-4">
              <AccordionTrigger>Property Size</AccordionTrigger>
              <AccordionContent>
                <Slider
                  min={0}
                  max={3000}
                  step={100}
                  value={[minSize, maxSize]}
                  onValueChange={([min, max]) => {
                    setMinSize(min);
                    setMaxSize(max);
                  }}
                />
                <div className="text-sm mt-2">
                  Size: {minSize} - {maxSize} sqft
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Price */}
            <AccordionItem value="item-5">
              <AccordionTrigger>Price Range</AccordionTrigger>
              <AccordionContent>
                <Slider
                  min={0}
                  max={10000000}
                  step={10000}
                  value={[minPrice, maxPrice]}
                  onValueChange={([min, max]) => {
                    setMinPrice(min);
                    setMaxPrice(max);
                  }}
                />
                <div className="text-sm mt-2">
                  Price: ${minPrice} - ${maxPrice}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Rooms */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Rooms</AccordionTrigger>
              <AccordionContent>
                <Label>Bedrooms</Label>
                <Select
                  value={selectedBedrooms?.toString()}
                  onValueChange={(val) => setSelectedBedrooms(Number(val))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <SelectItem key={n} value={n.toString()}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Label className="mt-4">Bathrooms</Label>
                <Select
                  value={selectedBathrooms?.toString()}
                  onValueChange={(val) => setSelectedBathrooms(Number(val))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <SelectItem key={n} value={n.toString()}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <button
            onClick={resetFilters}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Reset Filters
          </button>
        </div>

        {/* RESULTS */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p>Showing {filtered.length} results</p>
            <Select
              value={sortOrder}
              onValueChange={(val) => setSortOrder(val as "asc" | "desc")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Price: Low to High</SelectItem>
                <SelectItem value="desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-4">
            {filtered.map((item, idx) => (
              <PropertiesCardHor key={idx} user={item} />
            ))}
          </div>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <ArrowLeftIcon />
              </PaginationItem>
              {[1, 2, 3].map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink>{p}</PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <ArrowRightIcon />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </motion.div>
  );
}
