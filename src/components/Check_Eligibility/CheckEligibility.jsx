import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Icon } from "@iconify/react";
import Footer from "../home/Footer/Footer";
import TermsCond from "./TermsCond";

export default function CheckEligibility() {
	const [showterms, setShowterms] = useState(false);

	const overflowStyle = useMemo(
		() => (showterms ? "hidden" : "auto"),
		[showterms]
	);

	useEffect(() => {
		document.body.style.overflow = overflowStyle;
		console.log("mamoizations");
		// Cleanup on component unmount
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [overflowStyle]);
	function handlebtn() {
		setShowterms(!showterms); // This sets showterms to true
		console.log("Button clicked...");
	}

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

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			// Form is valid, handle form submission logic here
			console.log("Form submitted", formValues);
		}
	};

	return (
		<div>
			<Navbar />
			<div className=" ">
				<div className="video w-full h-[250px] bg-red-200 relative mt-[90px]">
					{/* <video
						src="./images/screen.mov"
						className="w-full h-full object-cover absolute top-0 left-0" autoPlay muted loop></video> */}

					<div className="absolute w-full h-full flex items-center justify-center z-10">
						<h2 className="text-4xl font-medium text-customDarkBlue font-poppins">
							Let's get you Pre-Qualified
						</h2>
					</div>
				</div>

				<div className=" px-8  md:px-20   lg:px-32  xl:px-40   2xl:px-48  py-5">
					<div className="grid lg:grid-cols-2  grid-cols-1 gap-4  lg:gap-0  py-10">
						<div className=" flex flex-col justify-center gap-4 ">
							<h2 className="sm:text-[42px] text-[30px]  font-poppins font-semibold text-customBlue leading-[40px] sm:leading-[49px]   ">
								Quick and Cost-Effective Funding
							</h2>
							<ul className=" flex flex-col gap-2 list-disc ms-3  text-[16px] sm:text-[18px] font-poppins">
								<li>Adaptable Financing to Match Your Business Goals.</li>
								<li>Quick Approval.</li>
							</ul>
							<h2 className="sm:text-[42px] text-[30px]  font-poppins font-semibold text-customBlue leading-[40px] sm:leading-[49px]  ">
								Eligibility for Our Minimum Criteria
							</h2>
							<ul className=" flex flex-col gap-2   list-disc ms-3  text-[16px] sm:text-[18px] font-poppins">
								<li>1 Year+ in Business</li>
								<li>$20k+ Monthly Revenue</li>
								<li>600+ FICO Score</li>
							</ul>
						</div>
						<div className=" flex justify-center lg:justify-start  items-center lg:items-center">
							<img src="./images/quick_and_cost.png" alt="" />
						</div>
					</div>

					<form
						className="grid grid-cols-12 gap-5 my-5"
						onSubmit={handleSubmit}>
						<div className="col-span-12 flex flex-col gap-5 lg:col-span-12 xl:col-span-9 xl:col-start-2 xl:col-end-12 border-2 border-blue-700 rounded-md py-10 px-10">
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
										className="font-poppins w-full py-3 px-2 placeholder:text-black text-[14px] rounded-md border-[1px] outline-none shadow-lg border-[#5e5d5d]"
									/>
									{errors.firstName && (
										<p className="font-poppins text-red-600 mt-1">
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
										className="font-poppins w-full py-3 px-2 placeholder:text-black text-[14px] rounded-md border-[1px] outline-none shadow-lg border-[#5e5d5d]"
									/>
									{errors.lastName && (
										<p className="font-poppins text-red-600 mt-1">
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
										className="font-poppins w-full py-3 px-2 placeholder:text-black text-[14px] rounded-md border-[1px] outline-none shadow-lg border-[#5e5d5d]"
									/>
									{errors.businessName && (
										<p className="font-poppins text-red-600 mt-1">
											{errors.businessName}
										</p>
									)}
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div className="">
									<input
										type="text"
										name="email"
										placeholder="Email"
										value={formValues.email}
										onChange={handleChange}
										className="font-poppins w-full py-3 px-2 placeholder:text-black text-[14px] rounded-md border-[1px] outline-none shadow-lg border-[#5e5d5d]"
									/>
									{errors.email && (
										<p className="font-poppins text-red-600 mt-1">
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
										className="font-poppins w-full py-3 px-2 placeholder:text-black text-[14px] rounded-md border-[1px] outline-none shadow-lg border-[#5e5d5d]"
									/>
									{errors.contactNumber && (
										<p className="font-poppins text-red-600 mt-1">
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
										className="py-[12px] px-1 border-[1px] outline-none w-full font-poppins text-[14px] border-[#5e5d5d] rounded-md active:outline-blue-500 shadow-lg ">
										<option value="">Preferred loan Amount</option>
										<option value="1">Preferred 1</option>
										<option value="2">Preferred 2</option>
										<option value="3">Preferred 3</option>
										<option value="4">Preferred 4</option>
									</select>
									{errors.loanAmount && (
										<p className="font-poppins text-red-600 mt-1">
											{errors.loanAmount}
										</p>
									)}
								</div>
								<div className="">
									<select
										name="ownershipPercentage"
										value={formValues.ownershipPercentage}
										onChange={handleChange}
										className="py-[12px] px-1 rounded-md w-full font-poppins text-[14px] active:outline-blue-500 shadow-lg border-[1px] outline-none border-[#5e5d5d] ">
										<option value="">Ownership percentage?</option>
										<option value="1">Preferred 1</option>
										<option value="2">Preferred 2</option>
										<option value="3">Preferred 3</option>
										<option value="4">Preferred 4</option>
									</select>
									{errors.ownershipPercentage && (
										<p className="font-poppins text-red-600 mt-1">
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
										className="py-[12px] px-1 rounded-md w-full font-poppins text-[14px] active:outline-blue-500 border-[1px] outline-none border-[#5e5d5d] shadow-lg ">
										<option value="">
											How long have you been in business?
										</option>
										<option value="1">Preferred 1</option>
										<option value="2">Preferred 2</option>
										<option value="3">Preferred 3</option>
										<option value="4">Preferred 4</option>
									</select>
									{errors.businessDuration && (
										<p className="font-poppins text-red-600 mt-1">
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
										className="py-3 px-2 w-full font-poppins text-[14px] rounded-md placeholder:text-black shadow-lg border-[1px] outline-none border-[#5e5d5d]"
									/>
									{errors.loanUsage && (
										<p className="font-poppins text-red-600 mt-1">
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
										className="w-10 h-10"
									/>
									<label className="form-check-label inter font-poppins">
										I agree to
										<span className="text-blue-700">
											<button type="button" onClick={handlebtn}>
												terms & conditions
											</button>
										</span>
										and by providing my phone number, I consent to receive
										communications from Securefastfunding such as SMS, text
										messages, WhatsApp, emails, and artificial intelligence
										voice/human phone calls. You may unsubscribe at any time.
									</label>
								</div>
								{errors.agreedToTerms && (
									<p className="ps-10 font-poppins text-red-600 mt-1">
										{errors.agreedToTerms}
									</p>
								)}
							</div>

							<div className="flex justify-center items-center grid-cols-1">
								<button
									type="submit"
									className="md:w-full lg:w-[50%] text-2xl flex justify-center items-center py-3 rounded-md bg-bgBlue text-white gap-3">
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
				</div>

				{showterms && <TermsCond handlebtn={handlebtn} />}
			</div>
			<Footer />
		</div>
	);
}
