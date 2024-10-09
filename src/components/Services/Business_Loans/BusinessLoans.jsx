import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../home/Footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/backServiceLoan.png";
import img2 from "../../../assets/images/buisness_loan_img_1.png";
import img3 from "../../../assets/images/buisness_loan_img_2.png";
export default function BusinessLoans() {
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
					className="bg-center bg-cover mt-[90px] w-full h-[40vh] bg-red-100 flex justify-center items-center  text-[48px] text-white">
					<h2 className="  px-8 font-Inter  text-3xl sm:text-5xl  font-serif">
						Business Loans
					</h2>
				</div>
				<div className=" grid  gap-5 lg:grid-cols-2 grid-cols-1 px-3  container  my-16 ">
					<div className=" w-full h-full">
						<img src={img2} alt="" className="h-full  object-cover" />
					</div>
					<div className="font-poppins ">
						<h2 className="text-[28px] font-semibold  text-customBlue">
							Business Loans: Power Your Business Forward
						</h2>
						<h2 className="text-[28px] font-semibold py-3 xl:py-5 text-customGreen">
							Empower Your Business with Customized Financing!
						</h2>
						<p className=" text-[16px] md:text-[20px] leading-10 ">
							Keep your business running smoothly and ready for anything with
							funding for both short- and long-term needs. Whether you're
							covering immediate expenses, expanding your operations, or
							investing in new opportunities, our business loans offer the
							flexibility and support you need to succeed in a competitive
							market.
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
						className=" font-poppins  container mx-auto   
		">
						<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
							Benefits
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-10 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Flexible Funding Options:{" "}
								</span>
								<span className="text-[20px]">
									Access a variety of loan types, including working capital
									loans, expansion loans, and equipment financing.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Quick Approval Process:{" "}
								</span>
								<span className="text-[20px]">
									Benefit from a streamlined application process that ensures
									fast access to the funds you need, keeping your business
									operations uninterrupted.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Competitive Rates:{" "}
								</span>
								<span className="text-[20px]">
									Secure favorable terms that help reduce financing costs,
									allowing you to reinvest savings back into your business for
									sustained growth.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Diverse Loan Types:{" "}
								</span>
								<span className="text-[20px]">
									Whether you need funds for inventory, payroll, or capital
									improvements, our loans can be customized to suit any business
									objective.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Bigger Loan Sizes:{" "}
								</span>
								<span className="text-[20px]">
									For businesses that have outgrown traditional small business
									loans, secure up to $500,000 to meet your larger financing
									needs.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Pay for Major Upgrades:{" "}
								</span>
								<span className="text-[20px]">
									Finance significant expenses like office renovations, new
									locations, or hiring skilled employees to help your business
									thrive.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Flexible Financing Solutions:{" "}
								</span>
								<span className="text-[20px]">
									Create a customized loan with flexible repayment terms that
									help maintain cash flow as you repay the loan.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									No Collateral Required:{" "}
								</span>
								<span className="text-[20px]">
									Many of our loan options do not require collateral, making it
									easier for businesses to access funds without risking valuable
									assets.
								</span>
							</li>
							<hr className="my-2" />
							<h2 className="text-[28px] text-customBlue font-semibold pt-0 pb-3 ">
								Benefits
							</h2>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Versatility:{" "}
								</span>
								<span className="text-[20px]">
									Business loans can be used for a wide range of needs, from
									daily operational costs to significant expansion projects,
									making them a versatile tool for any business
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Growth Potential:{" "}
								</span>
								<span className="text-[20px]">
									With access to the necessary funds, you can take advantage of
									growth opportunities, such as entering new markets or
									upgrading your equipment, without delay.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Cash Flow Management:{" "}
								</span>
								<span className="text-[20px]">
									Business loans provide the liquidity needed to maintain steady
									cash flow, ensuring that your business can cover expenses even
									during lean periods.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									No Equity Dilution:{" "}
								</span>
								<span className="text-[20px]">
									Unlike equity financing, business loans allow you to retain
									full ownership of your company, ensuring that your business
									decisions remain your own.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Industry-Specific Support:{" "}
								</span>
								<span className="text-[20px]">
									Whether you're in agriculture, healthcare, retail, or another
									sector, our loans are designed to meet the unique challenges
									and opportunities of your industry.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className=" font-poppins container w-full mx-auto  px-3 lg:px-8 py-10 	">
					<div className=" grid grid-cols-12 px-3 sm:px-0">
						<div className="col-span-12 lg:col-span-7   ">
							<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
								Qualifications:
							</h2>

							<div className="grid grid-cols-12  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative ">
									1
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2  ms-5 ">
									Credit Score: 600 or higher.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5  my-8">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative  ">
									2
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2  ms-5 ">
									Credit Score: 600 or higher.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center  ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative mt-3 sm:mt-1  ">
									3
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]      md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Time in Business: At least 1 year in operation.
								</p>
							</div>
							<div className="grid grid-cols-12 gap-5 place-content-center  my-8 ">
								<div className=" col-span-1  sm:col-span-1   w-9 h-9 sm:h-12  sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text[20px] sm:text[16px]   relative mt-3 sm:mt-1  ">
									4
								</div>
								<p className="  col-span-11 sm:col-span-11 text-[16px]       md:text-[22px]  mt-2 md:sm: ms-5 s-2 flex items-center">
									Demonstrated ability to repay the loan, based on financial
									statements and revenue history.
								</p>
							</div>
						</div>
						<div className="  mt-10 mx-auto  xl:m-0 col-span-12 lg:col-span-5">
							<img
								src={img3}
								alt=""
								className=" h-full  w-auto object-cover "
							/>
						</div>
					</div>
				</div>
				<div className=" flex justify-center items-center mt-4 mb-16">
					<button className="px-10 py-3 border-2 bg-bgBlue text-white font-poppins hover:bg-inherit hover:border-2 border-customBlue hover:text-customBlue rounded-md  text-[20px] ">
					<Link to="/Check_Eligibility">Apply Now</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
