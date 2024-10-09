import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../home/Footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/backServiceLoan.png";
import img2 from "../../assets/images/clock.png";
import img3 from "../../assets/images/respnse.png";
import img4 from "../../assets/images/responsi2.png";
import img5 from "../../assets/images/respone3.png";
import img6 from "../../assets/images/imageloan3.png";
import img7 from "../../assets/images/imageloan4.png";
import img8 from "../../assets/images/imageloan2.png";
import img9 from "../../assets/images/imageloan1.png";
import img10 from "../../assets/images/Button.png";
export default function LoanServies() {
	useEffect(() => {
		// Scroll to top when the component loads
		window.scrollTo(0, 0);
	}, []);
	function clickBtnScrollNone() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<div>
			<Navbar />
			<div
				onClick={clickBtnScrollNone}
				className=" w-fit h-fit fixed bottom-10  right-10 ">
				<button>
					<img src={img10} alt="" />
				</button>
			</div>
			<div className="">
				<div
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})`,
					}}
					className=" bg-center bg-cover mt-[90px] w-full h-[40vh] bg-red-100 flex justify-center items-center text-[48px] text-white">
					<h2 className="    px-8 font-Inter  text-3xl sm:text-5xl font-serif ">
						Equipment Financing
					</h2>
				</div>
				<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 text-white gap-5 ">
					<div className=" bg-bgGreen flex justify-start flex-col items-center py-14 rounded-md gap-3">
						<img src={img2} alt="" className="w-auto  h-12" />
						<h2 className="  md:text-[20px] lg:text-[24px] font-semibold mt-1 ">
							Instant Response
						</h2>
					</div>
					<div className=" bg-bgGreen flex justify-center flex-col items-center py-14 rounded-md gap-3 ">
						<img src={img3} alt="" className="w-auto  h-12" />
						<h2 className="  md:text-[20px] lg:text-[24px] font-semibold mt-1">
							Instant Response
						</h2>
					</div>
					<div className=" bg-bgGreen flex justify-center flex-col items-center py-14 rounded-md gap-3">
						<img src={img4} alt="" className="w-auto  h-12" />
						<h2 className="  md:text-[20px] lg:text-[24px] font-semibold">
							Instant Response
						</h2>
					</div>
					<div className=" bg-bgGreen flex justify-center flex-col items-center py-14 rounded-md gap-3">
						<img src={img5} alt="" className="w-auto  h-12" />
						<h2 className="  md:text-[20px] lg:text-[24px] font-semibold">
							Instant Response
						</h2>
					</div>
				</div>

				<div className="container flex justify-center items-center">
					<div className="w-fit  font-poppins flex flex-col gap-2 items-center ">
						<h2 className="md:text-[40px] text-[30px]   font-semibold  text-customBlue">
							Equipment Financing
						</h2>
						<div className="   h-2 rounded-full  bg-bgBlue w-1/2  "></div>
					</div>
				</div>
				<div className=" grid  gap-5 lg:grid-cols-2 grid-cols-1 px-3  container  my-16 font-poppins ">
					<div className=" w-full h-full relative">
						<div className=" w-[110px] sm:w-[200px] md:w-[250px] h-auto absolute left-0  top-0">
							<img src={img8} alt="" />
						</div>
						<div className="w-[120px] sm:w-[250px] md:w-[300px] h-auto absolute right-0  bottom-0">
							<img src={img9} alt="" />
						</div>
						<img
							src={img7}
							className="absolute right-0 top-0  w-16  md:w-24"
							alt=""
						/>
						<div className=" h-[100%] flex justify-start items-end ">
							<img
								src={img6}
								alt=""
								className="h-[90%] w-[90%]   object-cover"
							/>
						</div>
					</div>

					{/* 
                     
                     
                     currently i am working here 
                     */}
					<div className="font-poppins ">
						<h2 className="text-[28px]  font-semibold  text-customBlue leading-relaxed">
							Upgrade Your Business with Tailored Equipment Financing
						</h2>
						<h2 className="text-[26px] font-[600] py-3 xl:py-5 text-customGreen leading-relaxed">
							Empower Your Business with Essential Equipment-Financing Made
							Easy!
						</h2>
						<p className=" text-[16px] md:text-[20px] leading-10 ">
							In today's fast-paced business world, having the right equipment
							is critical to your success. Whether you're running a small coffee
							shop or managing a construction company, the tools and machinery
							you rely on can make or break your business. Our equipment
							financing isn't limited to one type of business. You can lease new
							or pre-owned equipment. Whether you need heavy machinery,
							agriculture equipment, medical devices, restaurant appliances, or
							office technology, we've got you covered. That's where our
							equipment financing solutions come in.
						</p>
						<div className=" pt-3 xl:pt-5">
							<button className=" px-10 py-3 bg-bgBlue text-white rounded-md">
								<Link to="/Check_Eligibility">Apply Now</Link>
							</button>
						</div>
					</div>
				</div>

				<div className="bg-[#ecf8ef] px-3 sm:px-0">
					<div
						className=" font-poppins  container w-full mx-auto   
		">
						<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
							Benefits of Equipment Financing:
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-10 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Preserve Cash Flow:{" "}
								</span>
								<span className="text-[20px]">
									Avoid large upfront costs and maintain your working capital
									for other business needs.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Tax Deductions:{" "}
								</span>
								<span className="text-[20px]">
									Save money by listing equipment financing as a tax deduction
									under Section 179
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Expert Guidance:{" "}
								</span>
								<span className="text-[20px]">
									Work with our dedicated financing experts who understand your
									industry and can guide you through the process.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									No Down Payment Required:{" "}
								</span>
								<span className="text-[20px]">
									Get the equipment you need without the burden of a large
									initial payment.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Improve Efficiency:{" "}
								</span>
								<span className="text-[20px]">
									Help operations run smoother with new equipment, with capital
									to fund other important parts of your business
								</span>
							</li>

							<hr className="my-2" />
							<h2 className="text-[28px] text-customBlue font-semibold pt-0 pb-3 ">
								Why Choose Equipment Financing?
							</h2>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Uninterrupted Operations:{" "}
								</span>
								<span className="text-[20px]">
									Secure the equipment your business needs without draining your
									working capital.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Customized Solutions:{" "}
								</span>
								<span className="text-[20px]">
									Finance up to $10 million with terms as flexible as your
									business needs.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Quick and Easy Process:{" "}
								</span>
								<span className="text-[20px]">
									Get approval in as little as 4 hours, ensuring your business
									stays on track.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Leverage Your Equipment:{" "}
								</span>
								<span className="text-[20px]">
									With your new machinery serving as collateral, qualifying for
									financing is easier, and your cash flow remains intact.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div
					className=" font-poppins  container  w-full mx-auto  
			 px-0 lg:px-8
				py-10  
		">
					<div className=" grid grid-cols-12 px-3 sm:px-0">
						<div className=" col-span-12 lg:col-span-7">
							<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
								Qualifications:
							</h2>

							<div className="grid grid-cols-12 gap-5 place-content-center  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									1
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									With your new machinery serving as collateral, qualifying for
									financing is easier, and your cash flow remains intact.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center  py-8 ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative mt-3 sm:mt-1  ">
									2
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Time in Business: At least 1 year in operation.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative mt-3 sm:mt-1  ">
									3
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Monthly Revenue: Minimum of $25,000 in deposits.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center  my-8 ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative mt-3 sm:mt-1  ">
									4
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]       md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Credit Score: A FICO score of 550 or higher.
								</p>
							</div>
						</div>
						<div className="  mt-10 mx-auto  xl:m-0 md:px-4 col-span-12 lg:col-span-5 ">
							<div className=" w-full h-full relative">
								<div className="w-[110px] sm:w-[180px] md:w-[230px] h-auto absolute right-0  bottom-0">
									<img src={img9} alt="" />
								</div>
								<img
									src={img7}
									className="absolute right-0 top-0  w-16  md:w-24"
									alt=""
								/>
								<div className=" h-[100%] flex justify-start items-end ">
									<img
										src={img6}
										alt=""
										className="h-[90%] w-[90%]   object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" flex justify-center items-center mt-4 mb-16  ">
					<button className="px-10 py-3 bg-bgBlue border-2 border-customBlue text-white font-poppins hover:bg-inherit hover:border-2 hover:text-customBlue rounded-md  text-[20px] ">
						<Link to="/Check_Eligibility">Apply Now</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
/******  5ac6f9c6-4ea0-4c95-9237-5a1e776d89f1  *******/
