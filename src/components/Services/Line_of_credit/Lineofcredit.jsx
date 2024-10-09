import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../home/Footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/backServiceLoan.png";
import img2 from "../../../assets/images/line_of_credit_img_1.png";
import img3 from "../../../assets/images/linelast.png";
export default function Lineofcredit() {
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
					<h2 className="  px-8 font-Inter  text-3xl sm:text-5xl  font-serif">
						Line of credit
					</h2>
				</div>
				<div className=" grid  gap-5 lg:grid-cols-2 grid-cols-1 px-3 container my-16 ">
					<div className=" w-full h-full">
						<img src={img2} alt="" className="h-full  object-cover" />
					</div>
					<div className="font-poppins ">
						<h2 className="text-[28px] font-semibold  text-customBlue">
							Upgrade Your Business with a Line of Credit Financing
						</h2>
						<h2 className="text-[28px] font-semibold py-3 xl:py-5 text-customGreen">
							Empower Your Business with Flexible Funding: Your Line of Credit
							Awaits!
						</h2>
						<p className=" text-[16px] md:text-[20px] leading-10 ">
							A business line of credit is your lifeline to continuous working
							capital. Whether managing cash flow, handling unexpected expenses,
							or seizing new business opportunities, a line of credit provides
							quick and flexible access to funds when you need them most. Unlike
							traditional loans, you only pay for what you use, making it a
							cost-effective solution for your business's ever-changing needs.
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
						className=" font-poppins  xl:w-[1320px] lg:w-[1024px] md:w-[720px]  sm:w-[600px] w-full mx-auto   
		">
						<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
							Benefits of Line of Credit:
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-5 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Quick Access to Cash:{" "}
								</span>
								<span className="text-[20px]">
									Secure funds for your business with a credit line ranging from
									$5,000 to $600,000.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Adaptable:{" "}
								</span>
								<span className="text-[20px]">
									Ideal for managing inventory during peak seasons, covering
									operational costs, or dealing with emergencies. Cost
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Cost-Effective:{" "}
								</span>
								<span className="text-[20px]">
									Only pay interest on the amount you draw, keeping costs
									manageable and aligned with your business's needs.
								</span>
							</li>

							<hr className="my-2 bg-black  h-[2px] bg-opacity-45" />
						</ul>
						<h2 className="text-[28px] text-customBlue font-semibold pt-0 pb-3 ">
							Why Choose Our Line of Credit?
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-10 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Flexible Access:{" "}
								</span>
								<span className="text-[20px]">
									Borrow up to your credit limit, and pay only for the amount
									you use. Once repaid, the funds become available again, giving
									you ongoing access to capital.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Tailored Terms:{" "}
								</span>
								<span className="text-[20px]">
									Enjoy financing terms from 3 to 24 months, with interest rates
									as low as 3-5% per month. Choose from daily, weekly, or
									monthly repayment schedules that best suit your cash flow.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Fast and Efficient:{" "}
								</span>
								<span className="text-[20px]">
									Get approval and funding in as fast as 4 hours, so your
									business doesnâ€™t miss any leads.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div
					className=" font-poppins  container px-3 w-full mx-auto  lg:px-8
				py-10  
		">
					<div className=" grid grid-cols-12 px-3 sm:px-0">
						<div className="col-span-12 lg:col-span-7   ">
							<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
								Qualifications
							</h2>

							<div className="grid grid-cols-12 gap-5 place-content-center  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									1
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Operating in the United States
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center my-8 ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									2
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									6+ months in business
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									3
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									$20,000+ in monthly revenue
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center my-8 ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  my-auto  ">
									4
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									A credit score of 675+
								</p>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-5   mt-10 mx-auto  xl:m-0 md:px-4">
							<img
								src={img3}
								alt=""
								className=" h-full  w-auto object-cover "
							/>
						</div>
					</div>
				</div>
				<div className=" flex justify-center items-center mt-4 mb-16">
					<button className="px-10 py-3 bg-bgBlue border-[1px] text-white font-poppins hover:bg-inherit hover:border-[1px] border-customBlue hover:text-customBlue rounded-md  text-[20px] ">
						<Link to="/Check_Eligibility">Apply Now</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
