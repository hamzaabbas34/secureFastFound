import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../home/Footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/backServiceLoan.png";
import img2 from "../../../assets/images/term_loan_1.jpg";
import img3 from "../../../assets/images/lastteamloan.jpg";

export default function TeamLoan() {
	useEffect(() => {
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
					className=" bg-center bg-cover  h-[40vh] mt-[90px] myb1 w-full bg-red-100 flex justify-center items-center text-[48px] text-white">
					<h2 className="  px-8 font-Inter  text-3xl sm:text-5xl  font-serif">
						Business Term Loans
					</h2>
				</div>
				<div className=" grid  gap-5 lg:grid-cols-2 grid-cols-1 px-3 container  my-16 ">
					<div className=" w-full h-full">
						<img src={img2} alt="" className="h-full  object-cover" />
					</div>
					<div className="font-poppins ">
						<h2 className="text-[28px] font-semibold  text-customBlue">
							Power Up Your Business with flexible-term loans
						</h2>
						<h2 className="text-[28px] font-semibold py-3 xl:py-5 text-customGreen">
							Access the Funding You Need-Fast and On Your Terms!
						</h2>
						<p className=" text-[16px] md:text-[20px] leading-10 ">
							In the ever-evolving business landscape, having access to capital
							when you need it is crucial for growth. Whether youre planning for
							business expansion, upgrading equipment and software, covering
							payroll and working capital, or refinancing debt to improve cash
							flow. With competitive rates, flexible terms, and fast funding our
							term loans are the classic, reliable solution for small businesses
							ready to scale.
						</p>
						<div className=" py-3 xl:py-5">
							<button className=" px-10 py-3 bg-bgBlue text-white rounded-md">
								<Link>Apply Now</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="bg-[#ecf8ef] px-3 sm:px-0">
					<div
						className=" font-poppins  container mx-auto   
                ">
						<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
							Benefits of Our Term Loans:
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-10 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Preserve Cash Flow:{" "}
								</span>
								<span className="text-[20px]">
									Avoid the strain of large upfront payments with manageable
									monthly installments.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Customized Solutions:{" "}
								</span>
								<span className="text-[20px]">
									Our loans are tailored to fit your unique business needs,
									whether you need a short-term boost or long-term financing.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Expert Support:
								</span>
								<span className="text-[20px]">
									Work with dedicated loan specialists who understand your
									industry and can guide you through the application process.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Quick Access to Funds:
								</span>
								<span className="text-[20px]">
									Secure funding amounts ranging from $5,000 to $2,000,000 with
									approvals as fast as 24 hours, so you never miss an
									opportunity.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Flexible Repayment Terms:
								</span>
								<span className="text-[20px]">
									Work with dedicated loan specialists who understand your
									industry and can guide you through the application process.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Competitive Interest Rates:
								</span>
								<span className="text-[20px]">
									Benefit from rates as low as 8.49%, allowing you to borrow
									with confidence and keep your costs manageable.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Predictable Payments:
								</span>
								<span className="text-[20px]">
									Enjoy the stability of fixed monthly payments, helping you
									plan your finances effectively and make accurate projections.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className=" font-poppins container  px-3 mx-auto   py-10  ">
					<div className="grid grid-cols-12 px-3 sm:px-0">
						{/* Left side (7 columns on large screens, 12 columns on mobile screens) */}
						<div className="col-span-12 lg:col-span-7">
							<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
								Benefits of Our Term Loans:
							</h2>

							<div className="grid grid-cols-12 gap-5">
								<div className="col-span-1 w-9 h-9 sm:h-12 sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text-[20px] sm:text-[16px] relative">
									1
								</div>
								<p className="col-span-11 text-[16px] md:text-[22px] mt-2 ms-5">
									Credit Score: 600 or higher.
								</p>
							</div>

							<div className="grid grid-cols-12 gap-5 my-8">
								<div className="col-span-1 w-9 h-9 sm:h-12 sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text-[20px] sm:text-[16px] relative">
									2
								</div>
								<p className="col-span-11 text-[16px] md:text-[22px] mt-2 ms-5">
									Credit Score: 600 or higher.
								</p>
							</div>

							<div className="grid grid-cols-12 gap-5 place-content-center">
								<div className="col-span-1 w-9 h-9 sm:h-12 sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text-[20px] sm:text-[16px] relative mt-3 sm:mt-1">
									3
								</div>
								<p className="col-span-11 text-[16px] md:text-[22px] mt-2 ms-5 s-2 flex items-center">
									Time in Business: At least 1 year in operation.
								</p>
							</div>
						</div>

						{/* Right side (5 columns on large screens, 12 columns on mobile screens) */}
						<div className="col-span-12 lg:col-span-5 mt-10  xl:m-0  border-red-50">
							<img src={img3} alt="Last Team Loan" className="h-full w-auto" />
						</div>
					</div>
				</div>
				<div className=" flex justify-center items-center mt-4 mb-16 grid-cols-5">
					<button className="px-10 py-3 bg-bgBlue border-[1px]   text-white font-poppins hover:bg-inherit hover:border-[1px3] border-customBlue hover:text-customBlue rounded-md  text-[20px] ">
						<Link to="/Check_Eligibility">Apply Now</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
