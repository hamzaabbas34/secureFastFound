import React, { useEffect } from "react";
import "./home.css";
// import { Icon } from "@iconify/react";

import Navbar from "../Navbar/Navbar";
import Abouts from "./abouts/Abouts";
import Sours from "./sours/Sours";
import OurLon from "./ourLoan/OurLon";
import Process from "./Proces/Process";
import Slider from "./slider/Silder";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Navbar />
			<div className="myhome  w-100">
				<div className=" container px-4 sm:px-6 md:px-2  lg:px-2 xl:px-2 mx-auto    ">
					<div className=" lg:w-4/5  xl:w-4/5 2xl:w-2/3  ">
						<h2 className=" lg:text-[40px] leading-[40px]  md:text-[36px] text-[2.1rem] md:leading-[50px] font-poppins font-black  my-6 ">
							Lift Your Small Business Wings With Secure Fast Funding
						</h2>
						<p className="text-[20px] md:text-[25px] font-poppins font-normal">
							Get the Exact Loan Your Business Needs to Succeed!
						</p>
					</div>
					<div className="btn flex align-center my-7 gap-4  flex-wrap ">
						<button className="px-10 py-3 bg-bgBlue rounded-md font-poppins font-medium w-[178px] hover:border-2 hover:border-white border-2 hover:bg-inherit border-customBlue ">
							apply Now
						</button>
					</div>
				</div>
			</div>
			<Sours />
			<Abouts />
			<OurLon />
			<Process />
			<div className="relative  flex flex-col bg-green-300">
				<div className=" font-poppins   text-center pt-10 pb-2">
					<h2 className=" font-semibold text-[42px] text-customBlue">
						What Our Clients Are Saying
					</h2>
					<p className="text-white text-[1.2rem] py-2">
						Real Stories of Success and Satisfaction
					</p>
				</div>
				<div className=" flex justify-center md:px-10">
					<Slider />
				</div>
			</div>
			<div className=" mb-[-85px] bg-green-300  ">
				<div className=" w-full flex justify-center items-center md:mt-[-10px] z-20 mt-[0px]   md:mb-5  relative  ">
					<div className=" lg:w-[600px] md:w-[450px]  sm:w-[400px]  justify-center gap-10 items-center border-[#00000033] border-2  rounded-3xl   w-[300px]  mb-8 sm:mb-10 md:mb-0 flex py-6  lg:py-12 mx-3 bg-[#83e0b3] flex-wrap  px-2">
						<button className="w-[175px] hover:border-2  border-2 border-customBlue py-3 bg-bgBlue text-white rounded-md  hover:bg-inherit hover:text-customBlue  ">
							<Link to="/Check_Eligibility">Apply Now</Link>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
