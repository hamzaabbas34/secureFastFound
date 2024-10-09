import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../home/Footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/backServiceLoan.png";
import img2 from "../../../assets/images/revenue_img_1.png";
import img3 from "../../../assets/images/revenue_img_2.png";

export default function RevenueBased() {
	useEffect(() => {
		// Scroll to top when the component loads
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Navbar />
			<div className="">
				<div
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})`,
					}}
					className="bg-center bg-cover mt-[90px] w-full h-[40vh] bg-red-100 flex justify-center items-center text-[48px] text-white">
					<h2 className="  px-8 font-Inter  text-3xl sm:text-5xl font-serif ">
						Revenue-Based Financing
					</h2>
				</div>
				<div className=" grid  gap-5 lg:grid-cols-2 grid-cols-1 px-3  container  my-16 ">
					<div className=" w-full h-full">
						<img src={img2} alt="" className="w-full lg:h-[80%]  mx-0  object-cover" />
					</div>
					<div className="font-poppins ">
						<h2 className="text-[28px] font-semibold  text-customBlue">
							Revenue-Based Financing
						</h2>
						<h2 className="text-[26px] font-semibold py-3 xl:py-5 text-customGreen">
							Fuel Your Business Growth with Flexible Financing
						</h2>
						<p
							style={{ wordSpacing: "2px" }}
							className=" text-[16px] md:text-[20px] leading-10 ">
							Looking for a financing solution that adapts to your business's
							success? Revenue-Based Financing (RBF) offers a flexible,
							non-traditional loan option designed for businesses with recurring
							revenue streams. This model provides a lump sum of capital in
							exchange for a percentage of future sales, making it especially
							beneficial for companies with fluctuating income, such as SaaS or
							subscription-based businesses. The loan amount can be up to 200%
							of your monthly revenue, and repayments are tied to daily or
							weekly sales, allowing for lower payments during slower periods.
							RBF typically doesn't require collateral, making it an unsecured
							and versatile option for businesses seeking to fund growth
							strategies like expanding sales and marketing, investing in
							product development, improving customer retention, buying out
							equity partners, or refinancing debt.
						</p>

						<div className=" py-3 xl:py-5">
							<button className=" px-10 py-3 bg-bgBlue text-white rounded-md">
								<Link to="/Check_Eligibility">Apply Now</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="bg-[#ecf8ef] px-3 sm:px-0">
					<div
						className=" font-poppins  container  mx-auto   
		">
						<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
							Benefits of Revenue-Based Financing:
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-5 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Quick Approval and Funding:{" "}
								</span>
								<span className="text-[20px]">
									Fast decision-making and same-day payouts allow you to access
									the capital you need without delay.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Predictable and Manageable Payments:{" "}
								</span>
								<span className="text-[20px]">
									Fixed, weekly repayments align with your revenue, making cash
									flow forecasts straightforward and reducing financial stress.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Top-Up Option:{" "}
								</span>
								<span className="text-[20px]">
									As your business grows, you can apply for additional funds
									without reapplying for a new loan.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Working Capital:{" "}
								</span>
								<span className="text-[20px]">
									Smooth out day-to-day operations by bolstering your cash flow.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Marketing:{" "}
								</span>
								<span className="text-[20px]">
									Smooth out day-to-day operations by bolstering your cash flow.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Equipment Purchase:{" "}
								</span>
								<span className="text-[20px]">
									Upgrade to cutting-edge equipment that boosts efficiency
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Inventory Management:{" "}
								</span>
								<span className="text-[20px]">
									Stock up to meet demand and drive sales.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Debt Settlement:{" "}
								</span>
								<span className="text-[20px]">
									Consolidate and clear outstanding bills to regain financial
									control.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Emergency Repairs:{" "}
								</span>
								<span className="text-[20px]">
									Address urgent repairs promptly to avoid disruptions.
								</span>
							</li>

							<hr className="my-2 bg-black  h-[2px] bg-opacity-45" />
						</ul>
						<h2 className="text-[28px] text-customBlue font-semibold pt-0 pb-3 ">
							Why Choose Revenue-Based Financing?
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-10 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									No Equity Dilution:{" "}
								</span>
								<span className="text-[20px]">
									Unlike equity financing, RBF allows you to retain full
									ownership of your business. Thereâ€™s no need to give up any
									control or ownership stakes.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Fast and Flexible Funding:{" "}
								</span>
								<span className="text-[20px]">
									Secure funds quickly, often within 24 hours, to capitalize on
									opportunities or address urgent needs. The approval process is
									streamlined and doesnâ€™t require complex valuations or pitch
									presentations
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Adaptable Repayments:{" "}
								</span>
								<span className="text-[20px]">
									Repayments are based on your revenue flow, making cash
									management easier and more predictable.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									No Personal Guarantee Required:{" "}
								</span>
								<span className="text-[20px]">
									RBF typically doesnâ€™t require you to tie up personal assets,
									making it a lower-risk option for your business.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Scalable with Growth:{" "}
								</span>
								<span className="text-[20px]">
									As your business grows, your funding can scale with it,
									providing additional capital as needed
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div
					className=" font-poppins  xl:w-[1320px] lg:w-[1024px] md:w-[720px]  sm:w-[600px] w-full mx-auto  
			 px-0 lg:px-8
				py-10  
		">
					<div className=" grid grid-cols-12  px-3 sm:px-0">
						<div className=" col-span-12 lg:col-span-7  ">
							<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
								Qualifications
							</h2>

							<div className="grid grid-cols-12 gap-5 place-content-center  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									1
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Operational History:Your business should have been operational
									for over a year.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center my-8 ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									2
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Annual Revenue: A minimum of $500,000 in annual revenue is
									required.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center my-8  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									3
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Revenue-driven: The business should prefer a funding solution
									that ties repayment to revenue performance without affecting
									equity or ownership.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									4
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Credit Score: A FICO score of 550 or higher.
								</p>
							</div>
						</div>
						<div className="  mt-10 mx-auto  xl:m-0 md:px-4 col-span-12 lg:col-span-5 ">
							<img
								src={img3}
								alt=""
								className=" h-full  w-auto object-cover "
							/>
						</div>
					</div>
				</div>
				<div className=" flex justify-center items-center mt-4 mb-16">
					<button className="px-10 py-3 bg-bgBlue  text-white font-poppins hover:bg-inherit hover:border-[1px] border-customBlue hover:text-customBlue rounded-md  text-[20px] border-[1px] ">
						<Link to="/Check_Eligibility ">Apply Now</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
