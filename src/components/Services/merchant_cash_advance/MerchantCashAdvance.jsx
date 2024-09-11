import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../home/Footer/Footer";
export default function MerchantCashAdvance() {
	return (
		<div>
			<Navbar />
			<div className="">
				<div className="mt-[90px] w-full h-[40vh] bg-red-100 flex justify-center items-center text-[48px] text-white">
					<h2 className="  px-8 font-Inter  text-3xl sm:text-5xl ">
						Merchant Cash Advance
					</h2>
				</div>
				<div className=" grid  gap-5 lg:grid-cols-2 grid-cols-1 px-8  md:px-20 lg:px-28 xl:px-40 2xl:px-48  my-16 ">
					<div className=" w-full h-full">
						<img
							src="./images/sba_IMG_1.webp"
							alt=""
							className="h-full  object-cover"
						/>
					</div>
					<div className="font-poppins ">
						<h2 className="text-[28px] font-semibold  text-customBlue">
							Power Your Business Growth with a Merchant Cash Advance
						</h2>
						<h2 className="text-[28px] font-semibold py-3 xl:py-5 text-customGreen">
							Fast, Flexible Funding for Your Business Needs!
						</h2>
						<p className=" text-[16px] md:text-[20px] leading-10 ">
							A Merchant Cash Advance (MCA) provides businesses with quick
							access to working capital based on future sales. Unlike
							traditional loans, an MCA offers a lump sum upfront in exchange
							for a portion of your future credit card or receivable sales,
							making it an excellent option for businesses needing immediate
							funds without the lengthy approval process while operating
							seasonally or having fluctuating sales.
						</p>
						<p className=" text-[16px] md:text-[20px] leading-10  mt-3">
							Whatever your business requirements: purchasing new inventory or
							equipment, covering payroll during peak seasons, funding marketing
							campaigns, or handling emergency repairs or unexpected expensesâ€”
							Secure Fast Fundingâ€™s MCA is all your calling!
						</p>

						<div className=" py-3 xl:py-5">
							<button className=" px-10 py-3 bg-bgBlue text-white rounded-md">
								Apply Now
							</button>
						</div>
					</div>
				</div>
				<div className="bg-[#ecf8ef] px-3 sm:px-0">
					<div
						className=" font-poppins  xl:w-[1320px] lg:w-[1024px] md:w-[720px]  sm:w-[600px] w-full mx-auto   
		">
						<h2 className="text-[28px] text-customBlue font-semibold pt-10 pb-5 ">
							Merchant Cash Advance Benefits:
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-5 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Funding Amount:{" "}
								</span>
								<span className="text-[20px]">
									Access $5,000 to $600,000 in capital.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Rapid Approval:{" "}
								</span>
								<span className="text-[20px]">
									Get approved in as little as 4 hours.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Flexible Payments:{" "}
								</span>
								<span className="text-[20px]">
									Payments are automatically deducted from your daily credit
									card sales or receivables.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Tailored Support:{" "}
								</span>
								<span className="text-[20px]">
									Our team is here to help you find the best funding solution
									for your business.
								</span>
							</li>
							<hr className="my-2 bg-black  h-[2px] bg-opacity-45" />
						</ul>
						<h2 className="text-[28px] text-customBlue font-semibold pt-0 pb-3 ">
							Why Choose a Merchant Cash Advance?
						</h2>
						<ul className="list-disc custom-list flex flex-col gap-3  px-3 sm:px-8  pb-10 ">
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Speedy Access to Funds:{" "}
								</span>
								<span className="text-[20px]">
									Get approved and access up to $600,000 in as little as 4
									hours.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Flexible Repayment:{" "}
								</span>
								<span className="text-[20px]">
									Payments are based on a percentage of your daily credit card
									sales or other receivables, so you only pay what you can
									afford.
								</span>
							</li>
							<li>
								<span className="text-[22px] font-semibold  text-customGreen">
									Simple Qualification:{" "}
								</span>
								<span className="text-[20px]">
									Easier to qualify for than traditional loans, especially for
									businesses with high credit card sales or those that are
									seasonal.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
