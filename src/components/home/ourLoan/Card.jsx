import React from "react";
import { Link } from "react-router-dom";

export default function Card({ para, title, imgurl, path }) {
	return (
		<div className=" bg-white p-6 rounded-[40px] file: flex flex-col justify-between ">
			<div className="">
				<img src={imgurl} alt="" className=" w-10 mb-4" />
				<h2 className=" font-poppins font-semibold text-[22px] my-2 text-customBlue leading-[30px]">
					{title}
				</h2>
				<p
					style={{ wordSpacing: "2px" }}
					className="font-poppins  leading-[30px]  mb-8">
					{para}
				</p>
			</div>

			<div className=" mb-0 ">
				<button className="px-10 font-poppins py-[10px] border-2 border-customGreen   bg-bgGreen text-white mt-10 rounded-md hover:bg-inherit hover:border-2 hover:text-customGreen font-bold">
					<Link to={path}> Learn More</Link>
				</button>
			</div>
		</div>
	);
}
