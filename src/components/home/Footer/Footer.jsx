// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import { Link } from "react-router-dom";

// export default function Footer() {
// 	const [formsubmit, setFormSubmit] = useState(false);
// 	const [loading, setLoading] = useState(false);
// 	const [subscriber, setSubscriber] = useState("");

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		setLoading(true);
// 		setTimeout(() => {
// 			setFormSubmit(true);
// 			setLoading(false);
// 			setSubscriber("");
// 		}, 500);
// 	}

// 	return (
// 		<div className="px-3    bg-[#253238] pt-20 pb-10">
// 			<div class="grid grid-cols-12 gap-4  container ">
// 				<div class="xl:col-span-5 lg:col-span-5 md:col-span-6 col-span-12  xl:p-4 text-white font-poppins">
// 					<h2 className=" font-poppins text-4xl font-bold text-customGreen mb-6 ">
// 						Secure Fast <br />
// 						<span className="text-customBlue">Funding</span>
// 					</h2>
// 					<p>Copyright © 2024</p>
// 					<p className="my-4">All rights reserved</p>
// 					<div className="flex gap-2">
// 						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
// 							<Icon
// 								icon="pepicons-pencil:internet"
// 								width="1.6rem"
// 								height="1.6rem"
// 								style={{ color: "white" }}
// 							/>
// 						</div>
// 						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
// 							<Icon
// 								icon="ant-design:instagram-outlined"
// 								width="1.6rem"
// 								height="1.6rem"
// 								style={{ color: "white" }}
// 							/>
// 						</div>
// 						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
// 							<Icon
// 								icon="ant-design:twitter-outlined"
// 								width="1.6rem"
// 								height="1.6rem"
// 								style={{ color: "white" }}
// 							/>
// 						</div>
// 						<div className="flex justify-center items-center rounded-full h-12 w-12 bg-slate-500 mt-6">
// 							<Icon
// 								icon="prime:youtube"
// 								width="1.6rem"
// 								height="1.6rem"
// 								style={{ color: "white" }}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 				<div class=" xl:col-span-2 md:col-span-6 lg:col-span-2 col-span-12   font-poppins    xl:ps-4  text-white">
// 					<h2 className="text-[20px] font-semibold ">Company</h2>
// 					<p className="my-4">
// 						<Link to="/" className="block ">
// 							Home
// 						</Link>
// 					</p>
// 					<p className="my-4">
// 						<Link to="/businessloan" className="block ">
// 							Business Loans
// 						</Link>
// 					</p>
// 					<p>
// 						<Link to="/Check_Eligibility" className="">
// 							Check Eligibility
// 						</Link>
// 					</p>
// 				</div>
// 				<div class="xl:col-span-2 md:col-span-6 lg:col-span-2 col-span-12  font-poppins xl:ps-4  text-white ">
// 					<h2 className="text-[20px] font-semibold ">Support</h2>
// 					<p className="my-4">
// 						<Link to="/contact" className="">
// 							Contact Us
// 						</Link>
// 					</p>
// 					<p className="my-4">
// 						<Link to="/privacy-policy" className="">
// 							Privacy Policy
// 						</Link>
// 					</p>

// 					<p>
// 						<Link to="/FAQ" className="">
// 							FAQ
// 						</Link>
// 					</p>
// 				</div>
// 				<div class="xl:col-span-3 lg:col-span-3  md:col-span-6 col-span-12 xl:px-4 text-white">
// 					<h2 className="text-[20px] font-semibold ">Stay up to date</h2>
// 					<div className="relative w-100 my-5">
// 						<button className="absolute right-2  top-2" onClick={handleSubmit}>
// 							<Icon
// 								icon="lucide:send"
// 								width="1.5rem"
// 								height="1.5rem"
// 								style={{ color: "white" }}
// 							/>
// 						</button>
// 						<form action="" onSubmit={handleSubmit}>
// 							<input
// 								type="text"
// 								className="w-[100%]  border-2 font-poppins p-2 text-white  bg-[#515b60] rounded-md outline-white  hover:border-white  "
// 								placeholder="Enter Email "
// 								onCanPlay={(e) => setSubscriber(e.target.value)}
// 							/>
// 						</form>
// 					</div>
// 					{loading ? (
// 						<p className="font-poppins text-[12px]">loading....</p>
// 					) : formsubmit ? (
// 						<p className="font-poppins text-[12px]">
// 							Thank you for subscribing to our newsletter
// 						</p>
// 					) : (
// 						<p className="font-poppins text-[12px]">
// 							Subscribe to our newsletter to get all the latest news about
// 							Business Loans
// 						</p>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Footer() {
	const [formSubmit, setFormSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const [subscriber, setSubscriber] = useState("");
	const [error, setError] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		// Email validation regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(subscriber)) {
			setError("Please enter a valid email address");
			return;
		}

		setError(""); // Clear any previous errors
		setLoading(true);
		setTimeout(() => {
			setFormSubmit(true);
			setLoading(false);
			setSubscriber(""); // Clear input field on successful submission
		}, 500);
	}

	return (
		<div className="px-3 bg-[#253238] pt-20 pb-10">
			<div className="grid grid-cols-12 gap-4 container">
				<div className="xl:col-span-5 lg:col-span-5 md:col-span-6 col-span-12 xl:p-4 text-white font-poppins">
					<h2 className="font-poppins text-4xl font-bold text-customGreen mb-6">
						Secure Fast <br />
						<span className="text-customBlue">Funding</span>
					</h2>
					<p>Copyright © 2024</p>
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
				<div className="xl:col-span-2 md:col-span-6 lg:col-span-2 col-span-12 font-poppins xl:ps-4 text-white">
					<h2 className="text-[20px] font-semibold">Company</h2>
					<p className="my-4">
						<Link to="/" className="block">
							Home
						</Link>
					</p>
					<p className="my-4">
						<Link to="/businessloan" className="block">
							Business Loans
						</Link>
					</p>
					<p>
						<Link to="/Check_Eligibility" className="">
							Check Eligibility
						</Link>
					</p>
				</div>
				<div className="xl:col-span-2 md:col-span-6 lg:col-span-2 col-span-12 font-poppins xl:ps-4 text-white">
					<h2 className="text-[20px] font-semibold">Support</h2>
					<p className="my-4">
						<Link to="/contact" className="">
							Contact Us
						</Link>
					</p>
					<p className="my-4">
						<Link to="/privacy-policy" className="">
							Privacy Policy
						</Link>
					</p>

					<p>
						<Link to="/FAQ" className="">
							FAQ
						</Link>
					</p>
				</div>
				<div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12 xl:px-4 text-white">
					<h2 className="text-[20px] font-semibold">Stay up to date</h2>
					<div className="relative w-100 my-5">
						<button className="absolute right-2 top-2" onClick={handleSubmit}>
							<Icon
								icon="lucide:send"
								width="1.5rem"
								height="1.5rem"
								style={{ color: "white" }}
							/>
						</button>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								value={subscriber}
								onChange={(e) => setSubscriber(e.target.value)}
								className="w-[100%] border-2 font-poppins p-2 text-white bg-[#515b60] rounded-md outline-white hover:border-white"
								placeholder="Enter Email"
							/>
						</form>
					</div>
					{error && (
						<p className="text-red-500 font-poppins text-[12px]">{error}</p>
					)}
					{loading ? (
						<p className="font-poppins text-[12px]">loading....</p>
					) : formSubmit ? (
						<p className="font-poppins text-[12px]">
							Thank you for subscribing to our newsletter
						</p>
					) : (
						<p className="font-poppins text-[12px]">
							Subscribe to our newsletter to get all the latest news about
							Business Loans
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
