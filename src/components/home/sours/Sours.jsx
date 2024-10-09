import React from "react";
import img1 from "../../../assets/images/leftside.jpg";
export default function Sours() {
	return (
		<div>
			<div className=" container px-4 sm:px-6 md:px-2  lg:px-2 xl:px-2 mx-auto   grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
				<div className=" flex flex-col gap-4 px-3  order-2 lg:order-1">
					<div className="w-fit">
						<h4 className="text-[35px]  text-[#004aad] font-poppins  text-customblue font-semibold 	 ">
							Secure Fast Funding
						</h4>
						<div className="lines w-3/4 h-[3px] bg-bgBlue rounded-full"></div>
					</div>
					<p
						style={{ wordSpacing: "3px" }}
						className=" font-poppins text-[16px] leading-[30px] text-[#212529]">
						Every business has a story, and at Secure Fast Funding— we're here
						to help yours unfold!
					</p>
					<p
						style={{ wordSpacing: "3px" }}
						className=" font-poppins text-[16px]  leading-[30px]">
						We know the sleepless nights, the endless to-do lists, and the
						passion that drives you forward. That's why we offer more than just
						funding—we offer solutions that understand where you're coming from
						and where you want to go.
					</p>
					<p
						style={{ wordSpacing: "3px" }}
						className=" font-poppins text-[16px]  leading-[30px]">
						Whether it's a term loan to fuel expansion, equipment financing to
						stay competitive, or a line of credit to stabilize cash flow. With a
						commitment to customization, transparency, and inclusive financing,
						we stand out by offering the financial support you need, right when
						you need it.
					</p>
					<p className=" font-poppins text-[17px]">You need it?</p>
				</div>
				<div className=" w-auto px-10   order-1 lg:order-2 ">
					<img
						src={img1}
						alt=""
						className=" rounded-lg  lg:w-[80%] md:w-[80%] mx-auto xl:w-[80%]  "
					/>
				</div>
			</div>
		</div>
	);
}
