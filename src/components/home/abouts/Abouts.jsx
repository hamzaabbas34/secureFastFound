import React from "react";

export default function Abouts() {
	return (
		<div className="px-3 md:px-20 lg:px-32 xl:px-40 2xl:px-48 grid grid-cols-1 lg:grid-cols-2   gap-5 my-16">
			<div className="">
				<img src="./images/about1_img.jpg" alt="" />
			</div>
			<div className=" flex flex-col gap-4">
				<div className="w-fit">
					<h4 className="text-[35px]  font-poppins  text-customblue font-poppins600	 ">
						About Us
					</h4>
					<div className="lines w-3/5 h-[3px] bg-bgBlue rounded-full"></div>
				</div>
				<p className=" font-poppins text-[17px]">
				At Secure Fast Funding, we understand the challengesâ€”building a business isnâ€™t easy, and neither is finding the right support. Thatâ€™s why weâ€™re here.
				</p>
				<p className=" font-poppins text-[17px]">
				We deliver transparency, trust, and inclusive financing options while being with you every step of your entrepreneurial journey. Whether you're expanding, adopting new technologies, or navigating industry trends, we're by your side with customized support and expert financial guidance.
				</p>
				<p className=" font-poppins text-[17px]">
				Backed by our only missionâ€” Our SME clients have turned their visions into thriving realities from the first application to your business's continued success.
				</p>
				<p className=" font-poppins text-[17px]">Let's write your success story together!</p>
			</div>
		</div>
	);
}
