import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
	return (
		<div className="px-3  md:px-20   lg:px-20  xl:px-40   2xl:px-48  bg-[#253238] pt-20 pb-10">
			

			<div class="grid grid-cols-12 gap-4  ">
				<div class="xl:col-span-5 lg:col-span-5 md:col-span-6 col-span-12  xl:p-4 text-white font-poppins">
					<h2 className=" font-poppins text-4xl font-bold text-customGreen mb-6 ">
						Secure Fast <br />
						<span className="text-customBlue">Funding</span>
					</h2>
					<p>Copyright Â© 2024</p>
					<p className="my-4">All rights reserved</p>
					<div className="flex gap-2">
						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
							<Icon
								icon="pepicons-pencil:internet"
								width="1.6rem"
								height="1.6rem"
								style={{ color: "white" }}
							/>
						</div>
						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
							<Icon
								icon="ant-design:instagram-outlined"
								width="1.6rem"
								height="1.6rem"
								style={{ color: "white" }}
							/>
						</div>
						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
							<Icon
								icon="ant-design:twitter-outlined"
								width="1.6rem"
								height="1.6rem"
								style={{ color: "white" }}
							/>
						</div>
						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
							<Icon
								icon="prime:youtube"
								width="1.6rem"
								height="1.6rem"
								style={{ color: "white" }}
							/>
						</div>
					</div>
				</div>
				<div class="xl:col-span-2 md:col-span-6 lg:col-span-2 col-span-12   font-poppins    xl:ps-4  text-white">
					<h2 className="text-[20px] font-semibold ">Company</h2>
					<p className="my-2">Home</p>
					<p className="my-2">Loan Servics</p>
					<p>Check Eligibility</p>
				</div>
				<div class="xl:col-span-2 md:col-span-6 lg:col-span-2 col-span-12  font-poppins xl:ps-4  text-white ">
					<h2 className="text-[20px] font-semibold ">Support</h2>
					<p className="my-2">Contact us</p>
					<p className="my-2">Privacy Policy</p>
					<p>FAQ</p>
				</div>
				<div class="xl:col-span-3 lg:col-span-3  md:col-span-6 col-span-12 xl:p-4 text-white">
					<h2 className="text-[20px] font-semibold ">Stay up to date</h2>
					<div className="relative w-100 my-5">
						<button className="absolute right-2  top-2">
							<Icon
								icon="lucide:send"
								width="1.5rem"
								height="1.5rem"
								style={{ color: "white" }}
							/>
						</button>
						<input
							type="text"
							className="w-[100%] font-poppins p-2 text-white  bg-[#515b60] rounded-md outline-white  hover:border-white  "
							placeholder="Enter Email "
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
