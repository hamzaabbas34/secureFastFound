// import React from "react";

// export default function Sbaloans() {
// 	return <div>Sbaloans</div>;
// }

import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../home/Footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/backServiceLoan.png";
import img2 from "../../../assets/images/sbnloan1.png";
import img3 from "../../../assets/images/sbn2.png";
import { Icon } from "@iconify/react";

const faqData = [
	{
		question: "What is an SBA Loan? ",
		answer:
			"An SBA Loan is a government-backed financing option designed to support small businesses in the United States. These loans offer lower interest rates, extended repayment terms, and lower down payment requirements compared to conventional loans.",
	},
	{
		question: "What types of SBA Loans are available?",
		answer:
			"The main types of SBA Loans include SBA 7(a) Loans, SBA 504 Loans, SBA Express Loans, SBA Microloans, and SBA Disaster Loans.",
	},
	{
		question: "What types of SBA Loans are available?",
		answer:
			"To qualify, your business must be U.S.-based, operate for profit, meet the SBA's size standards for your industry, and all owners with at least a 20% stake must provide a personal guarantee.",
	},
	{
		question: "What documentation is required for an SBA Loan?",
		answer:
			"You'll need to provide a valid ID, business bank account and routing numbers, the last three months of business bank statements, two years of business tax returns, and a schedule of debts.",
	},
	{
		question: "What are the benefits of choosing an SBA Loan?",
		answer:
			"SBA Loans offer flexible terms, lower interest rates, lower down payment requirements, longer repayment terms, and no balloon payments, making them an affordable and predictable financing solution.",
	},
	{
		question: "How do SBA Loans support small businesses?",
		answer:
			"SBA Loans provide accessible financing with comprehensive support for various business needs, including expansion, equipment purchases, real estate, and working capital, especially for businesses that struggle to obtain traditional loans.",
	},
	{
		question: "Can SBA Loans be used for purchasing equipment or real estate?",
		answer:
			"Yes, SBA Loans can be used for various purposes, including business acquisition, equipment financing, real estate purchases, and working capital.",
	},
];
export default function Sbaloans() {
	const [openIndex, setOpenIndex] = useState(0); // Track the index of the open accordion

	useEffect(() => {
		// Scroll to top when the component loads
		window.scrollTo(0, 0);
	}, []);
	const toggleAccordion = (index) => {
		if (openIndex === index) {
			setOpenIndex(null); // Close if already open
		} else {
			setOpenIndex(index); // Open the clicked one
		}
	};

	return (
		<div>
			<Navbar />
			<div className="">
				<div
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})`,
					}}
					className=" bg-center bg-cover mt-[90px] w-full h-[40vh] bg-red-100 flex justify-center items-center text-[48px] text-white">
					<h2 className="  px-8 font-Inter  text-3xl sm:text-5xl font-serif">
						SBA Loans
					</h2>
				</div>
				<div className=" grid  gap-5 lg:grid-cols-2 grid-cols-1 px-3  container  my-16 ">
					<div className=" w-[100%] h-auto">
						<img src={img2} alt="" className="h-auto  object-cover" />
					</div>
					<div className="font-poppins ">
						<h2 className="text-[28px] font-semibold  text-customBlue leading-relaxed">
							SBA Loans: Empower Your Business with Government-Backed Financing
						</h2>
						<h2 className="text-[26px] font-semibold py-3 xl:py-5 text-customGreen leading-relaxed">
							Unlock Long-Term Growth with SBA Loans - Your Path to Flexible,
							Affordable Business Financing
						</h2>
						<p className=" text-[16px] md:text-[20px] leading-10 ">
							An SBA Loan is a government-backed financing solution designed to
							support small businesses in the United States. Administered by the
							Small Business Administration (SBA), these loans offer businesses
							the opportunity to secure funding with lower interest rates,
							extended repayment terms, and lower down payment requirements
							compared to conventional loans.
						</p>
						<p className=" text-[16px] md:text-[20px] mt-3 leading-10 ">
							Whether you're looking to expand, purchase equipment, invest in
							new technology, or simply need additional working capital, an SBA
							loan can be a smart, long-term solution.
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
						className=" font-poppins   container mx-auto   
		">
						<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
							Benefits of Line of SBA Loans:
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-5 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Government Guarantee:{" "}
								</span>
								<span className="text-[20px]">
									SBA loans are partially guaranteed by the government, reducing
									the lender's risk and making it easier for businesses to
									qualify.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Comprehensive Support:{" "}
								</span>
								<span className="text-[20px]">
									From business acquisition and real estate purchases to
									equipment financing and working capital, SBA loans cover a
									broad range of business needs.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Accessible to Small Businesses:{" "}
								</span>
								<span className="text-[20px]">
									Tailored to meet the needs of small businesses that might
									otherwise struggle to obtain traditional financing.
								</span>
							</li>
							<hr className="my-2 bg-black   h-[2px] bg-opacity-20" />
						</ul>
						<h2 className="text-[28px] text-customBlue font-semibold pt-0 pb-3 ">
							Why Choose Our SBA Loans
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-10 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Flexible Terms:{" "}
								</span>
								<span className="text-[20px]">
									SBA loans offer more flexible structures and repayment terms,
									ranging from 1 year up to 30 years, tailored to meet your
									business's unique needs.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Lower Interest Rates:{" "}
								</span>
								<span className="text-[20px]">
									Benefit from competitive fixed or variable interest rates that
									are often lower than those of traditional business loans.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Lower Down Payment Requirements:{" "}
								</span>
								<span className="text-[20px]">
									Start your business journey with down payments as low as 10%,
									making it easier to access the capital you need.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Longer Repayment Terms:{" "}
								</span>
								<span className="text-[20px]">
									Enjoy the financial flexibility with longer repayment terms
									that mean lower monthly payments and better cash flow
									management.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									No Balloon Payments:{" "}
								</span>
								<span className="text-[20px]">
									Unlike many traditional loans, SBA loans do not require
									balloon payments, offering more predictability and stability.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div
					className=" font-poppins container  mx-auto  
			 px-0 lg:px-8
				py-10  
		">
					<div className="grid grid-cols-12 lg:grid-cols-12 px-3 sm:px-0">
						<div className="col-span-12 lg:col-span-7">
							<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5">
								Qualifications for an SBA Loans
							</h2>

							{/* Content Block 1 */}
							<div className="grid grid-cols-12 gap-5 place-content-center">
								<div className="col-span-1 w-9 h-9 sm:h-12 sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text-[20px] sm:text-[16px] relative my-auto">
									1
								</div>
								<p className="col-span-11 text-[16px] md:text-[22px] mt-2 ms-5 flex items-center">
									U.S.-Based and For-Profit: Your business must be registered in
									the United States and operate for profit.
								</p>
							</div>

							{/* Content Block 2 */}
							<div className="grid grid-cols-12 gap-5 place-content-center my-8">
								<div className="col-span-1 w-9 h-9 sm:h-12 sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text-[20px] sm:text-[16px] relative my-auto">
									2
								</div>
								<p className="col-span-11 text-[16px] md:text-[22px] mt-2 ms-5 flex items-center">
									Size Standards: Your business must meet the SBA's size
									requirements, which vary by industry.
								</p>
							</div>

							{/* Content Block 3 */}
							<div className="grid grid-cols-12 gap-5 place-content-center">
								<div className="col-span-1 w-9 h-9 sm:h-12 sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text-[20px] sm:text-[16px] relative my-auto">
									3
								</div>
								<p className="col-span-11 text-[16px] md:text-[22px] mt-2 ms-5 flex items-center">
									Personal Guarantee: All owners with at least a 20% stake must
									provide a personal guarantee.
								</p>
							</div>

							{/* Content Block 4 */}
							<div className="grid grid-cols-12 gap-5 place-content-center my-8">
								<div className="col-span-1 w-9 h-9 sm:h-12 sm:w-12 rounded-full bg-bgGreen text-white font-semibold flex justify-center items-center text-[20px] sm:text-[16px] relative my-auto">
									4
								</div>
								<p className="col-span-11 text-[16px] md:text-[22px] mt-2 ms-5 flex items-center">
									Collateral: Depending on the loan type and amount, collateral
									may be required.
								</p>
							</div>
						</div>

						<div className="mt-10 mx-auto lg:mt-0 lg:px-4 col-span-12 lg:col-span-5">
							<img src={img3} alt="" className="h-[100%] w-auto object-cover" />
						</div>
					</div>
				</div>
				<div className=" flex justify-center items-center mt-4 mb-16">
					<button className="px-10 py-2 border-[1px] bg-bgBlue text-white font-poppins hover:bg-inherit hover:border-[1px] border-customBlue hover:text-customBlue  rounded-md  text-[20px] ">
						<Link to="/Check_Eligibility">Apply Now</Link>
					</button>
				</div>
			</div>

			<div className="mt-[90px] text-center px-4">
				<h2 className="text-4xl font-poppins py-10 font-semibold text-customBlue">
					FAQ
				</h2>
			</div>

			<div className="container  mx-auto bg-[#F7F7FB] py-5 mb-10">
				<div>
					{/* Map through the FAQ data */}
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
							onClick={() => toggleAccordion(index)}>
							<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
								<h2>{faq.question}</h2>
								<div className="w-[50px]">
									<Icon
										icon="ri:arrow-down-s-line"
										width="1.8rem"
										height="1.8rem"
										className={`transition-transform duration-75 ${
											openIndex === index ? "rotate-180" : ""
										}`}
										style={{ color: "#081c8c" }}
									/>
								</div>
							</div>
							<div
								className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
									openIndex === index ? "max-h-[300px]" : "max-h-0"
								}`}
								style={{ transitionProperty: "max-height" }}>
								<p className="mt-3 text-black text-opacity-50 font-poppins">
									{faq.answer}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
