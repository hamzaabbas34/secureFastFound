import React from "react";
import Card from "./Card";
import img1 from '../../../assets/images/our1png.png'
import img2 from '../../../assets/images/ou2.png'
import img3 from '../../../assets/images/our3.png'
import img4 from '../../../assets/images/our4.png'
import img5 from '../../../assets/images/our5.png'
import img6 from '../../../assets/images/our6.png'
import img7 from '../../../assets/images/our7.png'
import img8 from '../../../assets/images/our8.png'
import img9 from '../../../assets/images/our9.png'


export default function OurLon() {
	return (
		<div className=" bg-bgBlue     py-10 ">
			<div className="flex   justify-center items-center flex-col gap-5">
				<h2 className="  text-[27px] md:text[32px] lg:text-[45px] font-poppins  text-white font-semibold">
					Our Loan Services
				</h2>
				<div className="w-fit">
					<p className="  font-poppins  text-[14px] md:text-[16px]  text-white 	 ">
						Tailored Financing Solutions to Meet Your Needs
					</p>
					<div className="lines w-100 h-[8px] mt-3 bg-white rounded-full"></div>
				</div>
			</div>
			<div className=" grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20 container">
				<Card
					para="Need a boost for your next big project? Our Term Loans provide the straightforward capital you need, with flexible approval to help you get started—even if credit is a concern. Get a lump sum and a fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl={img1}
					path="/teamloan"
				/>
				<Card
					para="Upgrade your tools and technology without emptying your cash reserves. With Equipment Financing, you can access the latest equipment through our network, ensuring you stay competitive and efficient. Your business is equipped for success!"
					title="Equipment Financing"
					imgurl={img2}
					path="/EquipmentFinancing"
				/>
				<Card
					para="For well-established businesses seeking capital to expand, our SBA Loans offer government-backed funding with favorable terms. This is your chance to grow, with the security and backing of a trusted partner."
					title="SBA Loans"
					imgurl={img3}
					path="/Sbaloans"
				/>
				<Card
					para="Waiting for invoices to be paid? Our Invoice Factoring turns those receivables into immediate cash flow, helping you manage operations smoothly and seize new opportunities without delay."
					title="Invoice Factoring"
					imgurl={img4}
					path="/invoice_factoring_loan"
				/>
				<Card
					para="Need quick access to cash for emergencies or opportunities? Our Revenue-Driven Financing offers a fixed-cost, flexible solution based on your revenue, so you can address pressing needs without stress."
					title="Revenue-Driven Financing"
					imgurl={img5}
					path="/RevenueBased"
				/>
				<Card
					para="Need help managing large orders or supplier payments? Our Purchase Order Financing helps you pay suppliers and meet customer demands on time so that you can grow your business without delays."
					title="Purchase Order Financing"
					imgurl={img6}
					path="/Purchase_Order_Financing"
				/>
				<Card
					para="Need fast funds without the hassle? Our Merchant Cash Advance lets you borrow against future sales, minimizing risk to your assets. No personal guarantees, just a quick solution to keep your business moving."
					title="Merchant Cash Advance"
					imgurl={img7}
					path="/merchant_cash_advance"
				/>
				<Card
					para="Whether you need short-term cash flow or long-term growth capital, our Business Loans offer flexible solutions to keep your business running smoothly and prepared for whatever comes next."
					title="Business Loans"
					imgurl={img8}
					path="/businessloan"
				/>
				<Card
					para="Our Line of Credit helps you manage cash flow and strengthen your working capital, providing a safety net for your business. Access funds when you need them and maintain your growth trajectory with ease."
					title="Line of Credit"
					imgurl={img9}
					path="/Line_of_credit"
				/>
			</div>
		</div>
	);
}
