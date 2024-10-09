import React, { useState } from "react";
import { Icon } from "@iconify/react";

import "./form.css";

export default function Form({ handlebtn }) {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		businessName: "",
		email: "",
		contactNumber: "",
		loanAmount: "",
		ownershipPercentage: "",
		businessDuration: "",
		loanUsage: "",
		agreedToTerms: false,
	});

	// State to manage validation errors
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		businessName: "",
		email: "",
		contactNumber: "",
		loanAmount: "",
		ownershipPercentage: "",
		businessDuration: "",
		loanUsage: "",
		agreedToTerms: "",
	});

	// Handle input changes
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormValues({
			...formValues,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	// Validate form fields
	const validate = () => {
		const newErrors = {};

		if (!formValues.firstName) newErrors.firstName = "This field is required.";
		if (!formValues.lastName) newErrors.lastName = "This field is required.";
		if (!formValues.businessName)
			newErrors.businessName = "This field is required.";
		if (!formValues.email) newErrors.email = "This field is required.";
		else if (!formValues.email.includes("@gmail.com")) {
			newErrors.email = "Please use a Gmail address.";
		}
		if (!formValues.contactNumber)
			newErrors.contactNumber = "This field is required.";
		if (!formValues.loanAmount)
			newErrors.loanAmount = "This field is required.";
		if (!formValues.ownershipPercentage)
			newErrors.ownershipPercentage = "This field is required.";
		if (!formValues.businessDuration)
			newErrors.businessDuration = "This field is required.";
		if (!formValues.loanUsage) newErrors.loanUsage = "This field is required.";
		if (!formValues.agreedToTerms)
			newErrors.agreedToTerms =
				"Please read and accept the terms & conditions.";

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
							body: JSON.stringify(formValues),
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
					}, 1500);
				}
			}, 2000); // Delay the API call for 2 seconds
		}
	};

	return (
		<>
			{loading ? (
				<div className="flex justify-center items-center h-screen top-0 left-0 fixed w-full bg-white bg-opacity-60">
					<div class="w-12 h-12 border-[6px] border-gray-200 border-t-5 border-t-black rounded-full animate-spin"></div>
				</div>
			) : (
				<></>
			)}
			{message && (
				<div className="flex justify-center items-center h-screen top-0 left-0 fixed w-full bg-black bg-opacity-60">
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
			<form className=" w-full   gap-5 my-5" onSubmit={handleSubmit}>
				<div className="col-span-12 flex flex-col gap-6 lg:col-span-12 xl:col-span-9 xl:col-start-2 xl:col-end-12 border-2 border-blue-700 rounded-[10px]   py-10 px-3 md:px-5 lg:px-10 bg-white">
					<div className="flex w-full justify-center">
						<h2 className="font-poppins text-[26px] mb-5 font-semibold text-customBlue">
							Let's Get You Pre-Qualified
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="">
							<input
								type="text"
								name="firstName"
								placeholder="First Name"
								value={formValues.firstName}
								onChange={handleChange}
								className="  border-opacity-30   font-poppins w-full py-3 px-2 placeholder:text-[#5e5d5d] text-[12px]    rounded-[10px]   border-[1px] outline-none shadow-lg border-[#5e5d5d]"
							/>
							{errors.firstName && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.firstName}
								</p>
							)}
						</div>
						<div className="">
							<input
								type="text"
								name="lastName"
								placeholder="Last Name"
								value={formValues.lastName}
								onChange={handleChange}
								className="  border-opacity-30   font-poppins w-full py-3 px-2 placeholder:text-[#5e5d5d]
text-[#5e5d5d] text-[12px]    rounded-[10px]   border-[1px] outline-none shadow-lg border-[#5e5d5d]"
							/>
							{errors.lastName && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.lastName}
								</p>
							)}
						</div>
					</div>
					<div className="grid grid-cols-1 gap-5">
						<div className="">
							<input
								type="text"
								name="businessName"
								placeholder="Business Name"
								value={formValues.businessName}
								onChange={handleChange}
								className="  border-opacity-30   font-poppins w-full py-3 px-2 placeholder:text-[#5e5d5d]
text-[#5e5d5d]  text-[12px]   rounded-[10px]   border-[1px] outline-none shadow-lg border-[#5e5d5d]"
							/>
							{errors.businessName && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.businessName}
								</p>
							)}
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="">
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={formValues.email}
								onChange={handleChange}
								className="  border-opacity-30   font-poppins w-full py-3 px-2 placeholder:text-[#5e5d5d]
text-[#5e5d5d]  text-[12px]   rounded-[10px]   border-[1px] outline-none shadow-lg border-[#5e5d5d]"
							/>
							{errors.email && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.email}
								</p>
							)}
						</div>
						<div className="">
							<input
								type="text"
								name="contactNumber"
								placeholder="Contact Number"
								value={formValues.contactNumber}
								onChange={handleChange}
								className="  border-opacity-30   font-poppins w-full py-3 px-2 placeholder:text-[#5e5d5d]
  text-[12px]   rounded-[10px]   border-[1px] outline-none shadow-lg border-[#5e5d5d]"
							/>
							{errors.contactNumber && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.contactNumber}
								</p>
							)}
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="">
							<select
								name="loanAmount"
								value={formValues.loanAmount}
								onChange={handleChange}
								className="  w-full custom-select    border-opacity-30   py-[12px] px-1 border-[1px] outline-none font-poppins text-[12px]   text-[#5e5d5d] border-[#5e5d5d] rounded-[10px]   active:outline-blue-500 shadow-lg ">
								<option value="">Preferred loan Amount</option>
								<option value="$50000">$50000</option>
								<option value="$100000">$100000</option>
								<option value="$250000">$250000</option>
								<option value="$500000">$500000</option>
								<option value="1Million+">1Million+</option>
							</select>
							{errors.loanAmount && (
								<p className="font-poppins text-red-600 text-[16px]   mt-1">
									{errors.loanAmount}
								</p>
							)}
						</div>
						<div className="">
							<select
								name="ownershipPercentage"
								value={formValues.ownershipPercentage}
								onChange={handleChange}
								className=" custom-select  border-opacity-30   py-[12px] px-1 rounded-[10px]   w-full font-poppins text-[12px]     text-[#5e5d5d] active:outline-blue-500 shadow-lg border-[1px] outline-none border-[#5e5d5d] ">
								<option value="">Ownership percentage?</option>
								<option value="Less than 50% Ownership">
									Less than 50% Ownership
								</option>
								<option value="50% Ownership or more">
									50% Ownership or more
								</option>
								<option value="100% Ownership">100% Ownership</option>
							</select>
							{errors.ownershipPercentage && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.ownershipPercentage}
								</p>
							)}
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 px">
						<div className="">
							<select
								name="businessDuration"
								value={formValues.businessDuration}
								onChange={handleChange}
								className="  border-opacity-30 custom-select  py-[12px] px-1 rounded-[10px]   w-full font-poppins   text-[12px] active:outline-blue-500 border-[1px] outline-none border-[#5e5d5d] shadow-lg   text-[#5e5d5d] ">
								<option value="">How long have you been in business?</option>
								<option value="Less than 1 year">Less than 1 year</option>
								<option value="1 year-2 years">1 year-2 years</option>
								<option value="2 years +">2 years +</option>
							</select>
							{errors.businessDuration && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.businessDuration}
								</p>
							)}
						</div>
						<div className="">
							<input
								type="text"
								name="loanUsage"
								placeholder="How do you plan to use the loan?"
								value={formValues.loanUsage}
								onChange={handleChange}
								className="  border-opacity-30    py-3 px-2 w-full font-poppins text-[12px]   rounded-[10px]   placeholder:text-[#5e5d5d]
text-[#5e5d5d]  shadow-lg border-[1px] outline-none border-[#5e5d5d]"
							/>
							{errors.loanUsage && (
								<p className="font-poppins text-red-600 text-[16px] mt-1">
									{errors.loanUsage}
								</p>
							)}
						</div>
					</div>
					<div className="">
						<div className="flex justify-start items-start gap-5 px">
							<input
								type="checkbox"
								name="agreedToTerms"
								checked={formValues.agreedToTerms}
								onChange={handleChange}
								className="mt-[-10px] w-10 h-10 flex"
							/>
							<label className="form-check-label inter font-poppins text-[13px]">
								I agree to{" "}
								<span className="text-blue-600">
									<button type="button" onClick={handlebtn}>
										terms & conditions{" "}
									</button>{" "}
								</span>
								and by providing my phone number, I consent to receive
								communications from Securefastfunding such as SMS, text
								messages, WhatsApp, emails, and artificial intelligence
								voice/human phone calls. You may unsubscribe at any time.
							</label>
						</div>
						{errors.agreedToTerms && (
							<p className="ps-10 font-poppins text-red-600 text-[16px] mt-1">
								{errors.agreedToTerms}
							</p>
						)}
					</div>

					<div className="flex justify-center items-center grid-cols-1">
						<button
							type="submit"
							className="md:w-full  w-full lg:w-[60%] text-[20px] font-bold flex justify-center items-center py-3 rounded-[10px]   bg-bgBlue text-white gap-3">
							Submit
							<span>
								<Icon
									icon="ph:arrow-right"
									width="1.7rem"
									height="1.7rem"
									style={{ color: "white" }}
								/>
							</span>
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
