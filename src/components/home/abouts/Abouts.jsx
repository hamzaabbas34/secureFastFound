import React from "react";
import img1 from "../../../assets/images/about1_img.jpg";
export default function Abouts() {
	return (
		<div className="container px-4 sm:px-6 md:px-2  lg:px-2 xl:px-2 mx-auto grid grid-cols-1 lg:grid-cols-2   gap-5 my-10">
			<div className=" w-4/5 m-auto ">
				<img src={img1} alt="" className="rounded-lg" />
			</div>
			<div className=" flex flex-col gap-4">
				<div className="w-fit">
					<h4 className="text-[35px]  font-poppins  text-customblue font-poppins600	 ">
						About Us
					</h4>
					<div className="lines w-3/5 h-[3px] bg-bgBlue rounded-full"></div>
				</div>
				<p className=" font-poppins text-[16px]" style={{ wordSpacing: "2px" }}>
					At Secure Fast Funding, we understand the challenges—building a
					business isn't easy, and neither is finding the right support. That's
					why we're here.
				</p>
				<p className=" font-poppins text-[16px]">
					We deliver transparency, trust, and inclusive financing options while
					being with you every step of your entrepreneurial journey. Whether
					you're expanding, adopting new technologies, or navigating industry
					trends, we're by your side with customized support and expert
					financial guidance.
				</p>
				<p className=" font-poppins text-[16px]">
					Backed by our only mission— Our SME clients have turned their visions
					into thriving realities from the first application to your business's
					continued success.
				</p>
				<p className=" font-poppins text-[16px]">
					Let's write your success story together!
				</p>
				<button className="px-10  text-white py-3 bg-bgBlue rounded-md font-poppins font-medium w-[178px] hover:border-2  hover:text-customBlue border-2 hover:bg-inherit border-customBlue hover:border-customBlue ">
					Apply
				</button>
			</div>
		</div>
	);
}
