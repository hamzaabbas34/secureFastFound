import React from "react";

export default function LeftRight({
	imgurl,
	pargraph,
	btnName,
	heading2,
	heading1,
}) 

{
	
	return (
		<>
			<div className=" w-full h-full">
				<img
					src={`./images/${imgurl}`}
					alt=""
					className="h-full  object-cover"
				/>
			</div>
			<div className="font-poppins ">
				<h2 className="text-[28px] font-semibold  text-customBlue">
					{heading1}
				</h2>
				<h2 className="text-[28px] font-semibold py-3 xl:py-5 text-customGreen">
					{heading2}
				</h2>
				<p className=" text-[16px] md:text-[20px] leading-10 ">{pargraph}</p>
				<div className=" py-3 xl:py-5">
					<button className=" px-10 py-3 bg-bgBlue text-white rounded-md">
						{btnName}
					</button>
				</div>
			</div>
		</>
	);
}
