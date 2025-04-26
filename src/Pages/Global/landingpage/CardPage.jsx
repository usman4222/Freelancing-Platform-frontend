import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import BreadCrumb2 from "./explor/BreadCrumb2";
import {
  AudioLines,
  CalendarClock,
  Heart,
  MapPinned,
  MoveUpRight,
  Package2,
  Plus,
  Share,
  Star,
  TriangleAlert,
  Truck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
const cards = [
  {
    title:
      "You will get WordPress Website Designer, WordPress Expert/WordPress Design/Redesign",
    img: "/assets/images/Cards/Personal-pix.webp",
    name: "Muhammad Shoaib",
    iconStar: <Star fill="gold" color="gold" size={18} />,
    views: <CalendarClock />,
    deliveryIcon: <Package2 size={30} />,
    englishFluentIcon: <AudioLines size={30} />,
    locationIcon: <MapPinned size={30} />,
    headerPicture: "/assets/images/explorer/services-10.webp",
    price: "$10.00 - $50.00 / hr ",
    skill: "Graphic Desiger",
    city: "Pakistan",
  },
];

const para = [
  {
    header: "Frequently Asked Questions",
    title: " How long does it take to build a WordPress website?",
    iconPlus: <Plus />,
    para: "The time to complete a website depends on the complexity and the features you need. A standard website can take 2-4 weeks or less, more complex sites, such as eCommerce or custom platforms, may take 4-8 weeks. I will provide a more accurate timeline",
  },
];

const Headings = ["Startter Package", "Standerd Package", "Advanced Package"];

const Packages = [
  {
    price: "$50.00",
    Days: "1 LANDING PAGE WITH 3-5 SECTIONS",
    loading: <Truck color="green" />,
    delivery: " 2 Days Delivery",
  },
];

const LogoDesignPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-20">
      <SectionWrapper className="px-20">
        <BreadCrumb2 startRoute="/" startRoutesName="Home" page="Services" />
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-700">
              You will get WordPress Website Designer, WordPress Expert,
              WordPress Design/Redesign
            </p>
            <div className="flex gap-3 justify-center items-center ">
              <div className="flex items-center gap-3 cursour-pointer">
                <span className="bg-white hover:bg-primary-custom/80  ease-in transition p-2 border rounded-full">
                  <Share size={16} />
                </span>
                <p>Share</p>
              </div>
              <div className="flex  items-center gap-3 cursur-pointer">
                <span className="bg-white  hover:bg-primary-custom/80 ease-in transition p-2 border rounded-full">
                  <Heart size={16} />
                </span>
                <p>Save</p>
              </div>
              <TriangleAlert color="gray" fill="gold" />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-20">
          <div className=" w-[1200px] pt-8">
            <div className="bg-white p-5 border rounded-xl shadow-lg">
              <div>
                {cards.map((item, index) => {
                  return (
                    <div key={index}>
                      <h1 className="text-2xl font-semibold py-3">
                        {item.title}
                      </h1>
                      <div className="flex gap-4 justify-start items-center border-b pb-3">
                        <img
                          className="w-[90px] rounded-full border"
                          src={item.img}
                          alt=""
                        />
                        <p className="font-medium hover:text-primary-custom ease-in transition">
                          {item.name}
                        </p>
                        <div>{item.iconStar}</div>
                        <p className="font-medium hover:text-primary-custom ease-in transition">
                          {" "}
                          0.0 (0 Reviews)
                        </p>
                        <div>{item.views}</div>
                        <p className="font-medium hover:text-primary-custom ease-in transition">
                          {" "}
                          0 Views
                        </p>
                      </div>
                      <div className="flex gap-4 justify-start items-center py-10">
                        <div className="flex gap-5 w-[200px] justify-center items-center">
                          <div>{item.deliveryIcon}</div>
                          <div>
                            <p>Delivery Time</p>
                            <p>2 Days</p>
                          </div>
                        </div>
                        <div className="flex gap-5  w-[200px] justify-center items-center">
                          <div>{item.englishFluentIcon}</div>
                          <div>
                            <p>English level</p>
                            <p>Fluent</p>
                          </div>
                        </div>
                        <div className="flex gap-5  w-[200px] justify-center items-center">
                          <div>{item.locationIcon}</div>
                          <div>
                            <p>Location</p>
                            <p>Nigeria</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
            </div>
            <div className="pt-10">
              <img
                className="w-full"
                src={"/assets/images/explorer/services-10.webp"}
                alt=""
              />
            </div>
            <div>
              {cards.map((img, index) => {
                return (
                  <div key={index}>
                    <img
                      className="w-[200px] pt-5"
                      src={img.headerPicture}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className="  pt-10">
              <div className="bg-white p-5 rounded-xl border  pt-10 shadow-lg">
                <h2 className="text-2xl font-semibold py-5">
                  Service Description
                </h2>
                <div className="flex flex-col gap-3 text-gray-600 space-y-3 ">
                  <p>
                    With years of hands-on experience, I specialize in creating
                    dynamic, user-friendly WordPress websites across a wide
                    range of industries. Whether you're a business looking for
                    an eCommerce solution, a professional needing a personal
                    portfolio, or an organization requiring a content-rich
                    platform, I have the expertise to bring your vision to life.
                  </p>
                  <p>
                    I’ve successfully designed websites for various categories,
                    including:
                  </p>
                  <div>
                    <strong>eCommerce:</strong>
                    <p>
                      {" "}
                      From sleek product showcases to seamless checkout
                      processes, I design online stores that convert visitors
                      into repeat customers.
                    </p>
                    <strong>Blogs & News Portals:</strong>
                    <p>
                      Designed for readability and engagement, these sites will
                      deliver content that resonates with your audience's
                      desires.
                    </p>
                  </div>
                  <p>
                    What sets my services apart is my commitment to delivering
                    each project to your specific needs, ensuring your website
                    is not only visually appealing but also optimized for
                    performance, security, and SEO.
                  </p>
                  <p>
                    Let’s build a website that not only meets your expectations
                    but exceeds them. Your success is my priority, and together
                    we can create your unique digital presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="bg-white p-5 rounded-xl border  pt-10 shadow-lg">
                {para.map((item, index) => {
                  return (
                    <div>
                      <h2 className="text-2xl font-semibold">{item.header}</h2>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {" "}
                            <h2 className="text-xl font-semibold pt-5">
                              {item.title}
                            </h2>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="bg-gray-100 p-4 rounded-xl ">
                              <p>{item.para}</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pt-5">
              <div className="bg-white p-4 rounded-xl shadow-lg ">
                <div>
                  0 Review
                  <div className=" flex gap-3 ">
                    <div className="bg-gray-100 p-5 w-[350px] py-28 flex flex-col justify-center items-center gap-2 text-center ">
                      <p className="text-3xl font-bold">0.0</p>
                      <div className="flex">
                        <Star size={16} fill="black" />
                        <Star size={16} fill="black" />
                        <Star size={16} fill="black" />
                        <Star size={16} fill="black" />
                        <Star size={16} fill="black" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full justify-center">
                      <div className="flex justify-center items-center gap-2">
                        {" "}
                        <span>5Star</span>
                        <Progress
                          fill="black"
                          size={10}
                          color="black"
                          value={100}
                        />
                        <span>0%</span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        {" "}
                        <span>4Star</span>
                        <Progress
                          fill="black"
                          size={10}
                          color="black"
                          value={100}
                        />
                        <span>0%</span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        {" "}
                        <span>3Star</span>
                        <Progress
                          fill="black"
                          size={10}
                          color="black"
                          value={100}
                        />
                        <span>0%</span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        {" "}
                        <span>2Star</span>
                        <Progress
                          fill="black"
                          size={10}
                          color="black"
                          value={100}
                        />
                        <span>0%</span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        {" "}
                        <span>1Star</span>
                        <Progress
                          className="mt-4"
                          fill="black"
                          size={10}
                          color="black"
                          value={100}
                        />
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className=" pt-8">
            <div className="w-full ">
              <div className="bg-white p-8 w-full rounded-xl border shadow-lg">
                <div className="flex gap-5 w-[300px] overflow-y-auto ">
                  {Headings.map((heading, index) => {
                    return (
                      <div key={index} className="text-md font-semibold ">
                        {heading}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 py-4">
                  {Packages.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-4">
                        <div className="text-2xl font-semibold">
                          {item.price}
                        </div>
                        <div>{item.Days}</div>
                        <div className="flex gap-4">
                          <div>{item.loading}</div>
                          <div>{item.delivery}</div>
                        </div>
                        <Button className="mt-4 py-6 w-full bg-green-100 duration-500 text-primary-custom  rounded group-hover:bg-primary-custom group-hover:text-white transition-all">
                          Buy Now $10.00
                          <MoveUpRight />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pt-10 flex flex-col justify-center items-center">
                <div className="bg-white e p-8 w-full rounded-xl border shadow-lg">
                  <h2>About The Seller</h2>
                  {cards.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="flex flex-col justify-between">
                          <div className="pt-10 flex items-center justify-between">
                            <img
                              className="w-[90px] rounded-full border"
                              src={item.img}
                              alt=""
                            />
                            <div>
                              <p className=" text-lg font-medium hover:text-primary-custom ease-in transition cursor-pointer">
                                {item.name}
                              </p>
                              <p className="font-medium hover:text-primary-custom ease-in transition cursur-pointer">
                                {item.skill}
                              </p>
                            </div>
                          </div>
                          <div className="flex  justify-between mt-10">
                            <div>
                              <div>
                                <p className="font-semibold text-lg">
                                  Location
                                </p>
                              </div>
                              <div>{item.city}</div>
                            </div>
                            <div>
                              <div>
                                <p className="font-semibold text-lg">Rate:</p>
                              </div>
                              <div>{item.price}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Button className="mt-4 py-6 text-white  duration-500   rounded bg-primary-custom ">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LogoDesignPage;
