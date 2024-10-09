import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../home/Footer/Footer";
import TermsCond from "./TermsCond";
import vide from "../../assets/images/videos.mp4";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function CheckEligibility() {
	const [showterms, setShowterms] = useState(false);

	const overflowStyle = useMemo(
		() => (showterms ? "hidden" : "auto"),
		[showterms]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.body.style.overflow = overflowStyle;
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [overflowStyle]);

	function handlebtn() {
		setShowterms(!showterms); // Toggle show terms state
	}

	return (
		<div>
			<Navbar />
			<div className=" ">
				<div className="video w-full h-[250px] bg-red-200 relative mt-[90px]">
					<video
						src={vide}
						className="w-full h-full object-cover absolute top-0 left-0"
						autoPlay
						muted
						loop></video>

					<div className="absolute w-full h-full flex items-center justify-center z-10">
						<h2 className="text-4xl  text-white font-poppins font-bold px-4">
							Let's get you Pre-Qualified
						</h2>
					</div>
				</div>

				<div className="  bg-none  py-5">
					<div className="bg-none py-5">
						<div className="grid grid-cols-12 gap-4 py-10 px-3 container relative">
							<div className="flex flex-col justify-start gap-4 col-span-12 xl:col-span-5 h-fit   border-bgGreen sm:pe-5  sm:pt-5 sm:pb-5  px-3  rounded-lg">
								<h2 className="sm:text-[33px] text-[30px] font-poppins font-semibold text-customBlue leading-[40px] md:leading-[44px]">
									Eligibility for Our Minimum Criteria
								</h2>
								<ul className="flex flex-col gap-2 list-disc ms-3 text-[16px] sm:text-[18px] font-poppins">
									<li>1 Year+ in Business</li>
									<li>$20k+ Monthly Revenue</li>
									<li>600+ FICO Score</li>
								</ul>
								<h2 className="sm:text-[33px] text-[30px] font-poppins font-semibold text-customBlue leading-[40px] md:leading-[44px]">
									Quick and Cost-Effective Funding
								</h2>
								<ul className="flex flex-col gap-2 list-disc ms-3 text-[16px] sm:text-[18px] font-poppins">
									<li>Adaptable Financing to Match Your Business Goals.</li>
									<li>Quick Approval.</li>
								</ul>
								<h2 className="sm:text-[33px] text-[30px] font-poppins font-semibold text-customBlue leading-[40px] md:leading-[44px]">
									Process Of Securing Fast Funding
								</h2>
								<ul className="flex flex-col gap-2 list-disc ms-3 text-[16px] sm:text-[18px] font-poppins">
									<li>Simple online application completed within minutes</li>
									<li>Same-day decision with consultation</li>
									<li>
										{" "}
										<Link className="text-blue-600" to="/">
											Fast Funding
										</Link>{" "}
										typically arrives shortly after approval
									</li>
								</ul>
							</div>

							<div className="col-span-12   xl:col-span-7">
								<div className="w-full">
									<Form handlebtn={handlebtn} />
								</div>
							</div>
						</div>
					</div>
				</div>

				{showterms && <TermsCond handlebtn={handlebtn} />}
			</div>
			<Footer />
		</div>
	);
}
