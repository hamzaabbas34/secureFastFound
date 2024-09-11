import React from "react";

export default function Sours() {
	return (
		<div>
			<div className="px-3 md:px-20 lg:px-32 xl:px-40 2xl:px-48 grid grid-cols-1 lg:grid-cols-2 gap-5 my-16">
				<div className=" flex flex-col gap-4">
					<div className="w-fit">
						<h4 className="text-[35px]  font-poppins  text-customblue font-poppins600	 ">
							Secure Fast Funding
						</h4>
						<div className="lines w-3/5 h-[3px] bg-bgBlue rounded-full"></div>
					</div>
					<p className=" font-poppins text-[17px]">
						Every business has a story, and at Secure Fast Fundingâ€” weâ€™re
						here to help yours unfold!
					</p>
					<p className=" font-poppins text-[17px]">
						We know the sleepless nights, the endless to-do lists, and the
						passion that drives you forward. Thatâ€™s why we offer more than
						just fundingâ€”we offer solutions that understand where youâ€™re
						coming from and where you want to go.
					</p>
					<p className=" font-poppins text-[17px]">
						Whether itâ€™s a term loan to fuel expansion, equipment financing to
						stay competitive, or a line of credit to stabilize cash flow. With a
						commitment to customization, transparency, and inclusive financing,
						we stand out by offering the financial support you need, right when
						you need it.Â{" "}
					</p>
					<p className=" font-poppins text-[17px]">You need it?</p>
				</div>
				<div className="">
					<img src="./images/leftside.jpg" alt="" />
				</div>
			</div>
		</div>
	);
}
