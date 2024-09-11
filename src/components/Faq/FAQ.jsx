

import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Icon } from "@iconify/react";

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null); // Track the index of the open accordion

	// Toggle the accordion open or closed based on the index
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
			<div className="mt-[90px] text-center px-4">
				<h2 className="text-4xl font-poppins py-10 font-semibold text-customBlue">
					FAQ
				</h2>
			</div>

			<div className="w-full xl:max-w-[1280px] lg:max-w-[1000px] md:max-w-[900px] mx-auto bg-[#F7F7FB] py-5">
				<div className="">
					{/* Accordion Item 1 */}
					<div
						className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
						onClick={() => toggleAccordion(0)}>
						<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
							<h2>What types of financing does Secure Fast Funding offer?</h2>
							<div className="w-[50px]">
								<Icon
									icon="ri:arrow-down-s-line"
									width="1.8rem"
									height="1.8rem"
									className={`transition-transform duration-300 ${
										openIndex === 0 ? "rotate-180" : ""
									}`}
									style={{ color: "#081c8c" }}
								/>
							</div>
						</div>
						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === 0 ? "max-h-[300px]" : "max-h-0"
							}`}
							style={{ transitionProperty: "max-height" }}>
							<p className="mt-3 text-black text-opacity-50 font-poppins">
								We provide a variety of loan services including Term Loans,
								Equipment Financing, SBA Loans, Invoice Factoring,
								Revenue-Driven Financing, Purchase Order Financing, Merchant
								Cash Advances, Business Loans, and Lines of Credit.
							</p>
						</div>
					</div>

					{/* Accordion Item 2 */}
					<div
						className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
						onClick={() => toggleAccordion(1)}>
						<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
							<h2>How does Secure Fast Funding evaluate creditworthiness?</h2>
							<div className="w-[50px]">
								<Icon
									icon="ri:arrow-down-s-line"
									width="1.8rem"
									height="1.8rem"
									className={`transition-transform duration-300 ${
										openIndex === 1 ? "rotate-180" : ""
									}`}
									style={{ color: "#081c8c" }}
								/>
							</div>
						</div>
						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === 1 ? "max-h-[300px]" : "max-h-0"
							}`}
							style={{ transitionProperty: "max-height" }}>
							<p className="mt-3 text-black text-opacity-50 font-poppins">
								We provide a variety of loan services including Term Loans,
								Equipment Financing, SBA Loans, Invoice Factoring,
								Revenue-Driven Financing, Purchase Order Financing, Merchant
								Cash Advances, Business Loans, and Lines of Credit.
							</p>
						</div>
					</div>
					<div
						className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
						onClick={() => toggleAccordion(2)}>
						<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
							<h2>How does Secure Fast Funding evaluate creditworthiness?</h2>
							<div className="w-[50px]">
								<Icon
									icon="ri:arrow-down-s-line"
									width="1.8rem"
									height="1.8rem"
									className={`transition-transform duration-300 ${
										openIndex === 2 ? "rotate-180" : ""
									}`}
									style={{ color: "#081c8c" }}
								/>
							</div>
						</div>
						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === 2 ? "max-h-[300px]" : "max-h-0"
							}`}
							style={{ transitionProperty: "max-height" }}>
							<p className="mt-3 text-black text-opacity-50 font-poppins">
								We provide a variety of loan services including Term Loans,
								Equipment Financing, SBA Loans, Invoice Factoring,
								Revenue-Driven Financing, Purchase Order Financing, Merchant
								Cash Advances, Business Loans, and Lines of Credit.
							</p>
						</div>
					</div>
					<div
						className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
						onClick={() => toggleAccordion(3)}>
						<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
							<h2>How does Secure Fast Funding evaluate creditworthiness?</h2>
							<div className="w-[50px]">
								<Icon
									icon="ri:arrow-down-s-line"
									width="1.8rem"
									height="1.8rem"
									className={`transition-transform duration-300 ${
										openIndex === 3 ? "rotate-180" : ""
									}`}
									style={{ color: "#081c8c" }}
								/>
							</div>
						</div>
						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === 3 ? "max-h-[300px]" : "max-h-0"
							}`}
							style={{ transitionProperty: "max-height" }}>
							<p className="mt-3 text-black text-opacity-50 font-poppins">
								We provide a variety of loan services including Term Loans,
								Equipment Financing, SBA Loans, Invoice Factoring,
								Revenue-Driven Financing, Purchase Order Financing, Merchant
								Cash Advances, Business Loans, and Lines of Credit.
							</p>
						</div>
					</div>
					<div
						className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
						onClick={() => toggleAccordion(4)}>
						<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
							<h2>How does Secure Fast Funding evaluate creditworthiness?</h2>
							<div className="w-[50px]">
								<Icon
									icon="ri:arrow-down-s-line"
									width="1.8rem"
									height="1.8rem"
									className={`transition-transform duration-300 ${
										openIndex === 4 ? "rotate-180" : ""
									}`}
									style={{ color: "#081c8c" }}
								/>
							</div>
						</div>
						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === 4 ? "max-h-[300px]" : "max-h-0"
							}`}
							style={{ transitionProperty: "max-height" }}>
							<p className="mt-3 text-black text-opacity-50 font-poppins">
								We provide a variety of loan services including Term Loans,
								Equipment Financing, SBA Loans, Invoice Factoring,
								Revenue-Driven Financing, Purchase Order Financing, Merchant
								Cash Advances, Business Loans, and Lines of Credit.
							</p>
						</div>
					</div>
					<div
						className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
						onClick={() => toggleAccordion(5)}>
						<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
							<h2>How does Secure Fast Funding evaluate creditworthiness?</h2>
							<div className="w-[50px]">
								<Icon
									icon="ri:arrow-down-s-line"
									width="1.8rem"
									height="1.8rem"
									className={`transition-transform duration-300 ${
										openIndex === 5 ? "rotate-180" : ""
									}`}
									style={{ color: "#081c8c" }}
								/>
							</div>
						</div>
						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === 5 ? "max-h-[300px]" : "max-h-0"
							}`}
							style={{ transitionProperty: "max-height" }}>
							<p className="mt-3 text-black text-opacity-50 font-poppins">
								We provide a variety of loan services including Term Loans,
								Equipment Financing, SBA Loans, Invoice Factoring,
								Revenue-Driven Financing, Purchase Order Financing, Merchant
								Cash Advances, Business Loans, and Lines of Credit.
							</p>
						</div>
					</div>
					<div
						className="mx-auto grid grid-cols-1 bg-white px-4 py-10 my-5 shadow-xl rounded-lg xl:max-w-[1020px] lg:max-w-[800px] md:max-w-[700px] w-full"
						onClick={() => toggleAccordion(6)}>
						<div className="flex justify-between items-center font-poppins text-[20px] text-customDarkBlue font-[500] cursor-pointer">
							<h2>How does Secure Fast Funding evaluate creditworthiness?</h2>
							<div className="w-[50px]">
								<Icon
									icon="ri:arrow-down-s-line"
									width="1.8rem"
									height="1.8rem"
									className={`transition-transform duration-300 ${
										openIndex === 6 ? "rotate-180" : ""
									}`}
									style={{ color: "#081c8c" }}
								/>
							</div>
						</div>
						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === 6 ? "max-h-[300px]" : "max-h-0"
							}`}
							style={{ transitionProperty: "max-height" }}>
							<p className="mt-3 text-black text-opacity-50 font-poppins">
								We provide a variety of loan services including Term Loans,
								Equipment Financing, SBA Loans, Invoice Factoring,
								Revenue-Driven Financing, Purchase Order Financing, Merchant
								Cash Advances, Business Loans, and Lines of Credit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
