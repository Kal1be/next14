import Body from "@/components/component/Body";
import Second from "@/components/component/Second";
import Signup from "@/components/component/Signup";
import Tutor from "@/components/component/Tutor";
import Image from "next/image";

export default function Home() {
  return (
    <div>
   <div className="md:flex items-center pb-16 pt-12 md:px-12 px-2" id="btom">
    <div className="lg:w-[650px]">
      <h2 className="md:text-4xl md:font-extrabold text-green-500 text-2xl font-bold ">Discover new data analytics tools</h2>
      <h3 className="text-blue-950 md:text-6xl font-extrabold md:py-6 py-2 text-3xl">Data science for SEO</h3>
      <p className="md:text-xl text-lg font-medium opacity-70" id="mypa">Learn to gather and analyze data provided by Google Analytics,
         search consoles & web servers with our new data science course.</p>
    </div>
    <div>
      <img src="/first.png" alt="" className="lg:w-[650px]"/>
    </div>
   </div>
   <div className="md:flex -my-12 bg-white justify-between shadow-2xl border  md:mx-12 ">
   <div className="py-10 md:flex justify-center gap-16  px-4">
   <div className="px-6 my-2 py-2">
    <h2 className="text-6xl font-extrabold text-green-500">20-23 nd</h2>
    <h3 className="text-4xl font-extrabold text-blue-950 py-4">February</h3>
    <p className="pt-4 text-gray-400 font-medium">6 day of intence work</p>
    </div>
    <div className="px-6 my-2 py-2" id="bord">
      <h2  className="text-6xl font-extrabold text-green-500">24</h2>
      <h3 className="text-4xl font-extrabold text-blue-950 py-4">Hours</h3>
      <p className="pt-4 text-gray-400 font-medium">10:00 AM - 06:00 PM</p>
    </div>
    <div className="px-6 my-2 py-2" id="bord">
      <h2 className="text-6xl font-extrabold text-green-500">20</h2>
      <h3 className="text-4xl font-extrabold text-blue-950 py-4">Seats</h3>
      <p className="pt-4 text-gray-400 font-medium">Limited number of seats</p>
    </div>
   </div>
    <div className=" bg-green-400 md:w-[300px] w-full px-12 py-8">
      <h2 className="text-4xl font-extrabold text-blue-950 ">Price</h2>
      <h3 className="text-6xl font-extrabold text-blue-950 py-4">$ 300</h3>
      <p className="pt-4 text-gray-900 font-medium">Best offer</p>
    </div>
   </div>
   <Body/>
   <Second/>
   <Signup/>
   <Tutor/>
   </div>
  );
}