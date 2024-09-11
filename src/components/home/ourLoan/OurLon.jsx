import React from "react";
import Card from "./Card";

export default function OurLon() {
	return (
		<div className=" bg-bgBlue  px-3  md:px-20   lg:px-32  xl:px-40   2xl:px-48   py-10 ">
			<div className="flex justify-center items-center flex-col gap-5">
				<h2 className=" text-4xl font-poppins  text-white font-semibold">
					Our Loan Services
				</h2>
				<div className="w-fit">
					<p className="  font-poppins   text-[16px]  text-white 	 ">
						Tailored Financing Solutions to Meet Your Needs
					</p>
					<div className="lines w-100 h-[8px] mt-3 bg-white rounded-full"></div>
				</div>
			</div>
			<div className=" grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20">
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img7.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img6.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img6.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img2.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img2.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img3.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img3.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img5.png"
				/>
				<Card
					para="lNeed a boost for your next big project? Our Term Loans provide the
						straightforward capital you need, with flexible approval to help you
						get startedâ€”even if credit is a concern. Get a lump sum and a
						fixed repayment plan to move forward confidently."
					title="Term Loan"
					imgurl="img3.png"
				/>
			</div>
		</div>
	);
}
