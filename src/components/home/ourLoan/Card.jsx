import React from "react";

export default function Card({ para, title, imgurl }) {
	return (
		<div className=" bg-white p-6 rounded-[40px] file: ">
			<img src={`./images/${imgurl}`} alt="" />
			<h2 className=" font-poppins font-semibold text-[22px] my-2  text-customblue">
				{title}
			</h2>
			<p className="font-poppins  leading-[30px] ">{para}</p>

			<button className="px-10 font-poppins py-[10px] border-2 border-customGreen  bg-bgGreen text-white mt-10 rounded-md hover:bg-inherit hover:border-2 hover:text-customGreen font-bold">
				Learn More
			</button>
		</div>
	);
}
