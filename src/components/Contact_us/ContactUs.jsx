import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Icon } from "@iconify/react";

import Footer from "../home/Footer/Footer";

export default function ContactUs() {
	const [formData, setFormData] = useState({
		fullName1: "",
		fullName2: "",
		contactNumber: "",
		object: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validation logic
		let newErrors = {};
		if (!formData.fullName1.trim())
			newErrors.fullName1 = "This field is required";
		if (!formData.fullName2.trim())
			newErrors.fullName2 = "This field is required";
		if (!formData.contactNumber.trim())
			newErrors.contactNumber = "This field is required";
		if (!formData.object.trim()) newErrors.object = "This field is required";
		if (!formData.message.trim()) newErrors.message = "This field is required";

		if (Object.keys(newErrors).length === 0) {
			// Submit the form
			console.log("Form submitted:", formData);
			setFormData({
				fullName1: "",
				fullName2: "",
				contactNumber: "",
				object: "",
				message: "",
			});
		} else {
			setErrors(newErrors);
		}
	};
	return (
		<div className="overflow-hidden">
			<Navbar />
			<div className="mt-[90px] text-center px-4 py-10">
				<h2 className="text-4xl font-poppins  font-semibold text-customBlue ">
					Contact Us
				</h2>
				<p className=" font-poppins text-[20px] mt-4">
					Any question or remarks? Just write us a message!
				</p>
			</div>
			<div className=" px-2  md:px-20 lg:px-28 xl:px-40 2xl:px-48  mb-16  ">
				<div
					style={{
						boxShadow:
							"0px 10px 15px rgba(0, 0, 0, 0.1) , 0px -10px 15px rgba(0, 0, 0, 0.1)",
					}}
					className="grid grid-cols-12 sm:p-6 p-0 gap-5  rounded-lg ">
					<div
						className=" xl:col-span-5 lg:col-span-6 col-span-12  flex flex-col gap-9 w-full  bg-bgGreen rounded-md py-10 sm:p-3 p-2
					 text-white font-poppins relative ">
						<div className=" absolute bottom-[-30px] right-[-30px] z-10  md:w-[250px]  w-[200px]">
							<img src="./images/circle.png" alt="" className="w-full" />
						</div>
						<div className=" absolute md:bottom-24 bottom-12 md:right-24 right-12 z-10">
							<img src="./images/circle.png" alt="" />
						</div>
						<div className="">
							<h2 className=" text-[27px] ">Contact Information</h2>
							<p className="text-[#dbdbdb]">
								Say something to start a live chat!
							</p>
						</div>
						<div className="flex flex-col gap-5">
							<h2 className="flex  justify-start items-center gap-2 sm:gap-4 ">
								<span>
									<Icon
										icon="carbon:email"
										width="2rem"
										height="2rem"
										style={{ color: "whtie" }}
									/>
								</span>
								<span className="flex-wrap">office@securefastfunding.com</span>
							</h2>
							<h2 className="flex  justify-start items-center gap-2 sm:gap-4  ">
								{" "}
								<span>
									<Icon
										icon="weui:location-filled"
										width="2rem"
										height="2rem"
										style={{ color: "white" }}
									/>
								</span>
								1905 Sherman Street Denver, CO 80203
							</h2>
						</div>
						<div className="flex gap-3">
							<img src="./images/f.png" alt="" />
							<img src="./images/vector.png" alt="" />
							<img src="./images/twitter.png" alt="" />
						</div>
					</div>
					<form
						className="xl:col-span-7 lg:col-span-6 col-span-12  py-16 p-4"
						onSubmit={handleSubmit}>
						<div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1  xl:gap-20 gap-5 lg:gap-10 relative">
							<div className="flex flex-col">
								<label htmlFor="fullName1" className="font-poppins">
									Full Name 1
								</label>
								<input
									type="text"
									name="fullName1"
									value={formData.fullName1}
									onChange={handleChange}
									className="border-b border-black outline-none"
								/>
								{errors.fullName1 && (
									<p className="font-poppins text-red-600 mt-1">
										{errors.fullName1}
									</p>
								)}
							</div>
							<div className="flex flex-col ">
								<label htmlFor="fullName2" className="font-poppins">
									Full Name 2
								</label>
								<input
									type="text"
									name="fullName2"
									value={formData.fullName2}
									onChange={handleChange}
									className="border-b border-black outline-none"
								/>
								{errors.fullName2 && (
									<p className="font-poppins text-red-600 mt-1">
										{errors.fullName2}
									</p>
								)}
							</div>
						</div>
						<div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 xl:gap-20 gap-5 lg:gap-10 my-5">
							<div className="my-5">
								<label htmlFor="contactNumber" className="font-poppins">
									Contact Number
								</label>
								<select
									name="contactNumber"
									value={formData.contactNumber}
									onChange={handleChange}
									className="py-[12px] px-1 outline-none w-full font-poppins border-b border-black">
									<option value="">Select Number</option>
									<option value="1">Preferred 1</option>
									<option value="2">Preferred 2</option>
									<option value="3">Preferred 3</option>
									<option value="4">Preferred 4</option>
								</select>
								{errors.contactNumber && (
									<p className="font-poppins text-red-600 mt-1">
										{errors.contactNumber}
									</p>
								)}
							</div>
							<div className="my-5">
								<label htmlFor="object" className="font-poppins">
									Select Object
								</label>
								<select
									name="object"
									value={formData.object}
									onChange={handleChange}
									className="py-[12px] px-1 outline-none w-full font-poppins border-b border-black">
									<option value="">Select Object</option>
									<option value="1">Object 1</option>
									<option value="2">Object 2</option>
									<option value="3">Object 3</option>
									<option value="4">Object 4</option>
								</select>
								{errors.object && (
									<p className="font-poppins text-red-600 mt-1">
										{errors.object}
									</p>
								)}
							</div>
						</div>
						<div className="grid grid-cols-1 my-10">
							<div className="flex flex-col">
								<label htmlFor="message" className="font-poppins">
									Full Name
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									className="border-b py-2 border-black outline-none font-poppins"
									placeholder="Enter Your Message"
								/>
								{errors.message && (
									<p className="font-poppins text-red-600 mt-1">
										{errors.message}
									</p>
								)}
							</div>
						</div>
						<div className="flex justify-end mt-5">
							<button
								type="submit"
								className="px-10 rounded-md py-3 bg-bgBlue text-white font-poppins text-[22px]">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
