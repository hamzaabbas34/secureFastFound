import React from "react";

export default function Process() {
	return (
		<div className="px-3 md:px-20 lg:px-32 xl:px-40 2xl:px-48 my-10">
			<div className=" flex w-100 justify-start items-center  flex-col    ">
				<div className="   lg:w-3/4  xl:w-1/2 text-center pt-10">
					<div className=" text-5xl font-poppins  text-customBlue font-semibold">
						<h2>Our Process</h2>
					</div>
					<p className="font-poppins  my-6 xl:px-20">
						Streamline the Process from Application to Disbursement in Three
						Easy Steps
					</p>
				</div>
			</div>
			<div className="grid lg:grid-cols-3  md:grid-cols-3    grid-cols-1  my-10  2xl:gap-52 xl:gap-12 lg:gap-10 md:gap-4 gap-5  ">
				<div className="flex justify-center items-start w-100 ">
					<div className=" flex justify-start flex-col items-center  w-[80%]  sm:w-3/5 md:w-[100%] ">
						<div className=" w-20 h-20 rounded-full  bg-bgBlue flex justify-center items-center">
							<h1 className=" font-poppins text-4xl font-semibold text-white">
								1
							</h1>
						</div>
						<h2 className="text-[1.5rem] font-poppins mt-10 font-semibold ">
							Apply
						</h2>
						<p className="font-poppins text-center mt-4">
							Fill in an application form for funding options & Check your
							eligibility
						</p>
					</div>
				</div>
				<div className="flex justify-center items-start w-100 ">
					<div className=" flex justify-start flex-col items-center    w-[80%] sm:w-3/5 md:w-[100%]">
						<div className=" w-20 h-20 rounded-full  bg-bgBlue flex justify-center items-center">
							<h1 className=" font-poppins text-4xl font-semibold text-white">
								2
							</h1>
						</div>
						<h2 className="text-[1.5rem] font-poppins mt-10 font-semibold ">
							Interview
						</h2>
						<p className="font-poppins text-center mt-4">
							A funding expert interviews & approves your tailored loan offer
						</p>
					</div>
				</div>
				<div className="flex justify-center items-start w-100 ">
					<div className=" flex justify-start flex-col items-center   w-[80%] sm:w-3/5 md:w-[100%] mx-auto">
						<div className=" w-20 h-20 rounded-full  bg-bgGreen flex justify-center items-center">
							<h1 className=" font-poppins text-4xl font-semibold text-white">
								3
							</h1>
						</div>
						<h2 className="text-[1.5rem] font-poppins mt-10 font-semibold ">
							Fund
						</h2>
						<p className="font-poppins text-center mt-4">
							Upon approval, funds will quickly be disbursed to your
							accountâ€”often within 24 hrs
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
