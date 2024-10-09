import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Icon } from "@iconify/react";
import Footer from "../home/Footer/Footer";

export default function ContactUs() {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [formData, setFormData] = useState({
		fullName1: "",
		email: "", // Fixed typo here
		contactNumber: "",
		object: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		// Scroll to top when the component loads
		window.scrollTo(0, 0);
	}, []);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validate = () => {
		// Validation logic
		let newErrors = {};
		if (!formData.fullName1.trim())
			newErrors.fullName1 = "This field is required";
		if (!formData.email.trim()) newErrors.email = "This field is required"; // Fixed typo
		if (!formData.contactNumber.trim())
			newErrors.contactNumber = "This field is required";
		if (!formData.object.trim()) newErrors.object = "This field is required";
		if (!formData.message.trim()) newErrors.message = "This field is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			setLoading(true); // Start the loader

			setTimeout(async () => {
				try {
					const response = await fetch(
						`http://localhost:4000/api/check-Eligibility`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(formData), // Use formData
						}
					);

					if (!response.ok) {
						throw new Error("Network response was not ok");
					}

					const result = await response.json();
					console.log("Final Result", result);
					setMessage(result.message || "Eligibility checked successfully!");
				} catch (error) {
					console.error("Error submitting form:", error);
					setMessage("Something went wrong. Please try again.");
				} finally {
					setLoading(false);
					setTimeout(() => {
						setMessage(null);
						if (message === "Eligibility checked successfully!") {
							window.location.href =
								"https://fastapp.kapitus.com/?pid=d8e1ea39-c85f-461a-82b0-b94e3de3d5de&sid=venturerev&_gl=1*v8k4mn*_gcl_au*MTM4MDE1MzA2OC4xNzE5NDczNzU4";
						}
					}, 6000);
				}
			}, 6000); // Delay the API call for 2 seconds
		}
	};
	return (
		<>
			{loading ? (
				<div className=" z-[100000] flex justify-center items-center h-screen top-0 left-0 fixed w-full bg-white bg-opacity-60">
					<div class="w-12 h-12 border-[6px] border-gray-200 border-t-5 border-t-black rounded-full animate-spin"></div>
				</div>
			) : (
				<></>
			)}
			{message && (
				<div className=" z-[100000] flex justify-center items-center h-screen top-0 left-0 fixed w-full bg-black bg-opacity-60">
					<div className=" w-[280px]  md:w-[500px] flex flex-col text-center relative bg-white rounded-xl">
						<button
							onClick={() => setMessage(null)}
							className="absolute right-[-20px] top-[-20px] p-3 px-3 border-[5px] bg-white border-black rounded-full">
							<Icon
								icon="fluent-emoji-high-contrast:cross-mark"
								width="2rem"
								height="2rem"
								style={{ color: "black" }}
							/>
						</button>
						<h2 className="font-poppins py-2 mt-5 text-2xl font-semibold">
							{message === "Eligibility checked successfully!"
								? "Thanks!"
								: "Error!"}
						</h2>
						<p className="font-poppins py-4">{message}</p>
						{message === "Eligibility checked successfully!" ? (
							<div className="">
								<button className="font-poppins text-white mb-4 py-3 px-4 rounded-[10px]   bg-blue-600">
									<a href="https://fastapp.kapitus.com/?pid=d8e1ea39-c85f-461a-82b0-b94e3de3d5de&sid=venturerev&_gl=1*v8k4mn*_gcl_au*MTM4MDE1MzA2OC4xNzE5NDczNzU4">
										Let's Go
									</a>
								</button>
							</div>
						) : (
							<div className="mb-2"></div>
						)}
					</div>
				</div>
			)}
			<div className="overflow-hidden z-[-1]">
				<Navbar />
				<div className="mt-[90px] text-center px-4 py-10">
					<h2 className="text-4xl font-poppins  font-semibold text-customBlue ">
						Contact Us
					</h2>
					<p className=" font-poppins text-[20px] mt-4">
						Any question or remarks? Just write us a message!
					</p>
				</div>
				<div className=" px-3 container  mb-16  ">
					<div
						style={{
							boxShadow:
								"0px 10px 15px rgba(0, 0, 0, 0.1) , 0px -10px 15px rgba(0, 0, 0, 0.1)",
						}}
						className="grid grid-cols-12 sm:p-6 p-0 gap-5  rounded-lg ">
						<div className=" xl:col-span-5 lg:col-span-6 col-span-12  flex flex-col gap-9 w-full  bg-bgGreen rounded-md py-10 sm:p-3 p-2 text-white font-poppins relative ">
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
							<div className="flex flex-col gap-5 my-4">
								<h2 className="flex  justify-start items-center gap-2 sm:gap-4 ">
									<span>
										<Icon
											icon="carbon:email"
											width="2rem"
											height="2rem"
											style={{ color: "whtie" }}
										/>
									</span>
									<span className="flex-wrap">
										office@securefastfunding.com
									</span>
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
							className="xl:col-span-7 lg:col-span-6 col-span-12  py-6 p-4"
							onSubmit={handleSubmit}>
							<div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1  xl:gap-20 gap-5 lg:gap-10 relative">
								<div className="flex flex-col gap-3">
									<label
										htmlFor="fullName1"
										className="font-poppins text-[#5a5a5a] font-[600]   text-[18px] ">
										Full Name{" "}
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
								<div className="flex flex-col gap-3 ">
									<labe
										htmlFor="emial"
										className="font-poppins font-[600]    text-[#5a5a5a] text-[18px]">
										Email
									</labe>
									<input
										type="text"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="border-b border-black outline-none"
									/>
									{errors.emial && (
										<p className="font-poppins text-red-600 mt-1">
											{errors.emial}
										</p>
									)}
								</div>
							</div>
							<div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 xl:gap-20 gap-5 lg:gap-10 my-5">
								<div className="my-5">
									<div className="flex flex-col ">
										<label
											htmlFor="contactNumber"
											className="font-poppins text-[#5a5a5a] font-[600]    text-[18px] ">
											Phone Number
										</label>
										<input
											type="text"
											name="contactNumber"
											placeholder="+1 234 567 890"
											value={formData.contactNumber}
											onChange={handleChange}
											className="border-b border-black outline-none selection:bg-inherit  py-[12px]"
										/>
										{errors.contactNumber && (
											<p className="font-poppins text-red-600 mt-1">
												{errors.contactNumber}
											</p>
										)}
									</div>
								</div>
								<div className="my-5">
									<label
										htmlFor="object"
										className="font-poppins text-[#5a5a5a] font-[600]   text-[18px] ">
										Select Object
									</label>
									<select
										name="object"
										value={formData.object}
										onChange={handleChange}
										className="py-[12px] px-1 outline-none w-full font-poppins border-b border-black">
										<option value="">Select Object</option>
										<option value="1">General Inquiry</option>
										<option value="2">Loans</option>
										<option value="3">Complain</option>
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
									<label
										htmlFor="message"
										className="font-poppins text-[#5a5a5a] font-[600] text-[18px]   ">
										Message
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
							<div className="flex justify-end mt-5 ">
								<button
									type="submit"
									onClick={handleSubmit}
									className="px-10 rounded-md py-3 bg-bgBlue text-white font-poppins text-[20px]">
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
