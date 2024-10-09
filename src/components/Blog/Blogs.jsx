import React from "react";
import Navbar from "../Navbar/Navbar";
import "./blog.css";
import profile from "../../assets/images/profileblog.png";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog5 from "../../assets/images/blog5.webp";
import Footer from "../home/Footer/Footer";
export default function Blogs() {
	return (
		<div>
			<Navbar />
			<div className="h-[200px]  w-full blogimg1 flex justify-center items-center">
				<div className="flex flex-col font-poppins gap-6  text-white text-center">
					<h2 className="text-[40px]">Blogs</h2>
					<p className="text-[20px]">Get the latest updates</p>
				</div>
			</div>
			<div className="container px-3 grid grid-cols-12 py-16  md:gap-4">
				<div className="lg:col-span-8  md:col-span-12 col-span-12  ">
					<div className=" flex flex-col gap-4">
						<div className="flex justify-center gap-6 flex-col md:flex-row relative shadow-lg rounded-xl overflow-hidden  myshadow ">
							<img
								src={blog1}
								className="md:w-[40%] w-full  bg-center  h-[250px]      "
								alt=""
							/>
							<div className="flex flex-col items-start gap-1 xl:pe-[4rem] lg:pe-[3.5rem] md:pe-[5rem] pe-[0rem] px-[1rem] md:px-0  py-[1rem] md:w-[60%] w-full ">
								<h2 className=" font-roboto text-[24px] font-[500] leading-7  ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className=" font-roboto text-[15px] xl:mb-6 lg:mb-2 mb-4 ">
									Looking for small business ideas ? Discover how to attract
									investors and secure funding by exploring top ideas. To speed
									up your business path, study new businesses, smart finance
									plans, and investor advice.
								</p>
								<div className="flex gap-2 justify-center items-center">
									<img src={profile} alt="" />
									<p className="font-poppins  ">September 05, 2024</p>
								</div>
							</div>
						</div>
						<div className="flex justify-center gap-6 flex-col md:flex-row relative myshadow myshadow rounded-xl overflow-hidden">
							<img
								src={blog2}
								className="md:w-[40%] w-full  bg-center  h-[250px]      "
								alt=""
							/>
							<div className="flex flex-col items-start gap-1 xl:pe-[4rem] lg:pe-[3.5rem] md:pe-[5rem] pe-[0rem] px-[1rem] md:px-0  py-[1rem] md:w-[60%] w-full ">
								<h2 className=" font-roboto text-[24px] font-[500] leading-7  ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className=" font-roboto text-[15px] xl:mb-4 lg:mb-2 mb-4 ">
									Looking for small business ideas ? Discover how to attract
									investors and secure funding by exploring top ideas. To speed
									up your business path, study new businesses, smart finance
									plans, and investor advice.
								</p>
								<div className="flex gap-2 justify-center items-center">
									<img src={profile} alt="" />
									<p className="font-poppins  ">September 05, 2024</p>
								</div>
							</div>
						</div>
						<div className="flex justify-center gap-6 flex-col md:flex-row relative myshadow myshadow rounded-xl overflow-hidden">
							<img
								src={blog3}
								className="md:w-[40%] w-full  bg-center  h-[250px]      "
								alt=""
							/>
							<div className="flex flex-col items-start gap-1 xl:pe-[4rem] lg:pe-[3.5rem] md:pe-[5rem] pe-[0rem] px-[1rem] md:px-0  py-[1rem] md:w-[60%] w-full ">
								<h2 className=" font-roboto text-[24px] font-[500] leading-7  ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className=" font-roboto text-[15px] xl:mb-4 lg:mb-2 mb-4 ">
									Looking for small business ideas ? Discover how to attract
									investors and secure funding by exploring top ideas. To speed
									up your business path, study new businesses, smart finance
									plans, and investor advice.
								</p>
								<div className="flex gap-2 justify-center items-center">
									<img src={profile} alt="" />
									<p className="font-poppins  ">September 05, 2024</p>
								</div>
							</div>
						</div>
						<div className="flex justify-center gap-6 flex-col md:flex-row relative myshadow myshadow rounded-xl overflow-hidden">
							<img
								src={blog4}
								className="md:w-[40%] w-full  bg-center  h-[250px]      "
								alt=""
							/>
							<div className="flex flex-col items-start gap-1 xl:pe-[4rem] lg:pe-[3.5rem] md:pe-[5rem] pe-[0rem] px-[1rem] md:px-0  py-[1rem] md:w-[60%] w-full ">
								<h2 className=" font-roboto text-[24px] font-[500] leading-7  ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className=" font-roboto text-[15px] xl:mb-4 lg:mb-2 mb-4 ">
									Looking for small business ideas ? Discover how to attract
									investors and secure funding by exploring top ideas. To speed
									up your business path, study new businesses, smart finance
									plans, and investor advice.
								</p>
								<div className="flex gap-2 justify-center items-center">
									<img src={profile} alt="" />
									<p className="font-poppins  ">September 05, 2024</p>
								</div>
							</div>
						</div>
						<div className="flex justify-center gap-6 flex-col md:flex-row relative myshadow myshadow rounded-xl overflow-hidden">
							<img
								src={blog5}
								className="md:w-[40%] w-full  bg-center  h-[250px]      "
								alt=""
							/>
							<div className="flex flex-col items-start gap-1 xl:pe-[4rem] lg:pe-[3.5rem] md:pe-[5rem] pe-[0rem] px-[1rem] md:px-0  py-[1rem] md:w-[60%] w-full ">
								<h2 className=" font-roboto text-[24px] font-[500] leading-7  ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className=" font-roboto text-[15px] xl:mb-4 lg:mb-2 mb-4 ">
									Looking for small business ideas ? Discover how to attract
									investors and secure funding by exploring top ideas. To speed
									up your business path, study new businesses, smart finance
									plans, and investor advice.
								</p>
								<div className="flex gap-2 justify-center items-center">
									<img src={profile} alt="" />
									<p className="font-poppins  ">September 05, 2024</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:col-span-4   md:col-span-12 col-span-12  flex flex-col gap-3">
					<div className=" lg:w-full md:w-[50%] w-[80%] mx-auto   sticky top-28  ">
						<div className="flex gap-1  mt-5 md:mt-0 ">
							<input
								type="text"
								className="md:w-[80%] w-[75%]  h-[60px] font-poppins px-2 border-[1px] border-black border-opacity-45 text-black "
								placeholder="search here ...."
							/>
							<div className=" md:w-[20%] w-[25%] h-[60px] font-poppins  ">
								<button className=" w-full h-full font-poppins bg-[#00bf63] text-white ">
									search
								</button>
							</div>
						</div>
						<div className=" md:myshadow  flex xl:flex-row lg:flex-col gap-2 justify-start my-5">
							<div className="imdiv h-[120px] xl:w-[38%]   w-full ">
								<img
									src={blog1}
									alt=""
									className=" w-full h-full rounded-md "
								/>
							</div>
							<div className=" font-poppins p-[10px]  xl:w-[60%]">
								<h2 className="text-[12px] font-normal ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className="text-[10px] font-[500]">
									Looking for small business ideas ? Discover how to attract
									Learn More
								</p>
								<div className="flex gap-2 justify-start items-center mt-2">
									<img src={profile} alt="" className="w-[20px] h-[20px]" />
									<p className="font-poppins  text-[9px] ">
										September 05, 2024
									</p>
								</div>
							</div>
						</div>
						<div className=" md:myshadow  flex xl:flex-row lg:flex-col gap-2 justify-start my-5">
							<div className="imdiv h-[120px] xl:w-[38%]   w-full ">
								<img
									src={blog2}
									alt=""
									className=" w-full h-full rounded-md "
								/>
							</div>
							<div className=" font-poppins p-[10px]  xl:w-[60%]">
								<h2 className="text-[12px] font-normal ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className="text-[10px] font-[500]">
									Looking for small business ideas ? Discover how to attract
									Learn More
								</p>
								<div className="flex gap-2 justify-start items-center mt-2">
									<img src={profile} alt="" className="w-[20px] h-[20px]" />
									<p className="font-poppins  text-[9px] ">
										September 05, 2024
									</p>
								</div>
							</div>
						</div>
						<div className=" md:myshadow  flex xl:flex-row lg:flex-col gap-2 justify-start my-5">
							<div className="imdiv h-[120px] xl:w-[38%]   w-full ">
								<img
									src={blog3}
									alt=""
									className=" w-full h-full rounded-md "
								/>
							</div>
							<div className=" font-poppins p-[10px]  xl:w-[60%]">
								<h2 className="text-[12px] font-normal ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className="text-[10px] font-[500]">
									Looking for small business ideas ? Discover how to attract
									Learn More
								</p>
								<div className="flex gap-2 justify-start items-center mt-2">
									<img src={profile} alt="" className="w-[20px] h-[20px]" />
									<p className="font-poppins  text-[9px] ">
										September 05, 2024
									</p>
								</div>
							</div>
						</div>
						<div className=" md:myshadow  flex xl:flex-row lg:flex-col gap-2 justify-start my-5">
							<div className="imdiv h-[120px] xl:w-[38%]   w-full ">
								<img
									src={blog4}
									alt=""
									className=" w-full h-full rounded-md "
								/>
							</div>
							<div className=" font-poppins p-[10px]  xl:w-[60%]">
								<h2 className="text-[12px] font-normal ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className="text-[10px] font-[500]">
									Looking for small business ideas ? Discover how to attract
									Learn More
								</p>
								<div className="flex gap-2 justify-start items-center mt-2">
									<img src={profile} alt="" className="w-[20px] h-[20px]" />
									<p className="font-poppins  text-[9px] ">
										September 05, 2024
									</p>
								</div>
							</div>
						</div>
						<div className=" md:myshadow  flex xl:flex-row lg:flex-col gap-2 justify-start my-5">
							<div className="imdiv h-[120px] xl:w-[38%]   w-full ">
								<img
									src={blog5}
									alt=""
									className=" w-full h-full rounded-md "
								/>
							</div>
							<div className=" font-poppins p-[10px]  xl:w-[60%]">
								<h2 className="text-[12px] font-normal ">
									Top Small Business Ideas to Accelerate Growth
								</h2>
								<p className="text-[10px] font-[500]">
									Looking for small business ideas ? Discover how to attract
									Learn More
								</p>
								<div className="flex gap-2 justify-start items-center mt-2">
									<img src={profile} alt="" className="w-[20px] h-[20px]" />
									<p className="font-poppins  text-[9px] ">
										September 05, 2024
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
