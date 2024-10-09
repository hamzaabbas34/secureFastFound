import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Icon } from "@iconify/react";
import Footer from "../home/Footer/Footer";

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(0); // Track the index of the open accordion

	// Toggle the accordion open or closed based on the index
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

	// FAQ Data
	const faqData = [
		{
			question: "What types of financing does Secure Fast Funding offer?",
			answer:
				"We provide a variety of loan services including Term Loans, Equipment Financing, SBA Loans, Invoice Factoring, Revenue-Driven Financing, Purchase Order Financing, Merchant Cash Advances, Business Loans, and Lines of Credit.",
		},
		{
			question: "How does Secure Fast Funding evaluate creditworthiness?",
			answer:
				"We consider factors like your business revenue, time in business, credit score, and industry when evaluating creditworthiness.",
		},
		{
			question:
				"What types of equipment can I finance with Secure Fast Funding?",
			answer:
				"You can finance a wide range of equipment, including heavy machinery, agricultural equipment, medical devices, restaurant appliances, and office technology.",
		},
		{
			question: "What is a business line of credit?",
			answer:
				"A business line of credit provides continuous working capital, allowing you to access funds as needed to manage cash flow, cover unexpected expenses, or seize new business opportunities.",
		},
		{
			question: "What is an SBA Loan?",
			answer:
				"An SBA Loan is a government-backed financing option designed to support small businesses in the United States. These loans offer lower interest rates, extended repayment terms, and lower down payment requirements compared to conventional loans.",
		},
		{
			question: "What is a business term loan?",
			answer:
				"A business term loan is a lump-sum financing option that provides your business with the capital it needs for various purposes, such as expansion, equipment upgrades, or debt refinancing. The loan is repaid through fixed monthly installments over a predetermined period.",
		},
		{
			question: "What is invoice factoring?",
			answer:
				"Invoice factoring is a financial solution that allows businesses to convert their outstanding invoices into immediate cash by selling them to a factoring company at a discounted rate. The factoring company then collects the payments directly from your customers.",
		},
		{
			question: "What is Revenue-Based Financing (RBF)?",
			answer:
				"Revenue-Based Financing (RBF) is a flexible financing option that provides your business with a lump sum of capital in exchange for a percentage of your future revenue. This model is ideal for businesses with recurring income, such as SaaS or subscription-based companies.",
		},
		{
			question: "What is Purchase Order Financing?",
			answer:
				"Purchase Order Financing (PO Financing) is a funding solution that provides businesses with the necessary capital to fulfill large orders without affecting their cash flow. This financing covers up to 100% of the cost required to produce and deliver products, allowing you to focus on fulfilling orders without worrying about upfront expenses.",
		},
		{
			question: "What is a Business Loan?",
			answer:
				"A business loan is a financing solution designed to help businesses manage their short- and long-term financial needs. It provides the necessary capital for various purposes, such as covering operational costs, expanding operations, or investing in new opportunities",
		},
	];

	return (
		<div>
			<Navbar />
			<div className="mt-[90px] text-center px-4">
				<h2 className="text-4xl font-poppins py-10 font-semibold text-customBlue">
					FAQ
				</h2>
			</div>

			<div className="container  mx-auto bg-[#F7F7FB] py-5">
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


