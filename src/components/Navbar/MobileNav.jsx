// import React from "react";
// import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react";

// export default function MobileNav({ menuOpen, setDropdownOpen, dropdownOpen }) {
// 	return (
// 		<div
// 			className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
// 				menuOpen ? "max-h-[720px]" : "max-h-0"
// 			}`}>
// 			<ul className="lg:hidden mt-4 space-y-2 text-center rounded-lg text-black">
// 				<li className="py-3 hover:bg-bgGreen hover:text-white ">
// 					<Link to="/" className="">
// 						Home
// 					</Link>
// 				</li>
// 				<li className="py-3 hover:bg-bgGreen hover:text-white">
// 					<Link to="/about" className="block">
// 						About
// 					</Link>
// 				</li>
// 				<li className="py-3 hover:bg-bgGreen hover:text-white">
// 					<Link to="/Check_Eligibility" className="block">
// 						Check Eligibility
// 					</Link>
// 				</li>
// 				<li className="pt-2 pb-3 flex justify-center flex-col hover:bg-bgGreen hover:text-white ">
// 					{/* Dropdown Button inside mobile menu */}
// 					<button
// 						className=" focus:outline-none flex justify-center gap-3 ms-3 "
// 						onClick={() => setDropdownOpen(!dropdownOpen)}>
// 						Services
// 						<span>
// 							<Icon
// 								icon="iconamoon:arrow-down-2-fill"
// 								width="1.2rem"
// 								height="1.2rem"
// 								className="text-black mt-1 "
// 							/>
// 						</span>
// 					</button>

// 					{/* Dropdown Menu inside mobile menu */}
// 					<ul
// 						className={` bg-white rounded-lg overflow-hidden transition-[max-height] duration-500 ease-in-out ${
// 							dropdownOpen ? "max-h-[500px]" : "max-h-0"
// 						}`}>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white ">
// 							<Link to="/teamloan" className="block">
// 								Team Loan
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/EquipmentFinancing" className="block">
// 								Equipment Financing
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/Sbaloans" className="block">
// 								SBA Loans
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/invoice_factoring_loan" className="block">
// 								Invoice Factoring
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/RevenueBased" className="block">
// 								Revenue Based Financing
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/Purchase_Order_Financing" className="block">
// 								Purchase Based Financing
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/merchant_cash_advance" className="block">
// 								Merchant Cash Advance Finacing
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/businessloan" className="block">
// 								Business Loans
// 							</Link>
// 						</li>
// 						<li className="py-1 hover:bg-bgGreen hover:text-white">
// 							<Link to="/Line_of_credit" className="block">
// 								Line of Credit
// 							</Link>
// 						</li>
// 						{/* Add other links here */}
// 					</ul>
// 				</li>
// 				<li className="pt-2 pb-3 hover:bg-bgGreen hover:text-white ">
// 					<Link to="/contact" className="block ">
// 						Contact
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// }

import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function MobileNav({ menuOpen, setDropdownOpen, dropdownOpen }) {
	return (
		<div
			className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
				menuOpen ? "max-h-[720px]" : "max-h-0"
			}`}>
			<ul className="lg:hidden mt-4 space-y-2 text-center rounded-lg text-black">
				<li className="">
					<Link
						to="/"
						className="block w-fit py-3 hover:bg-bgGreen hover:text-white mx-auto px-4  rounded-md ">
						Home
					</Link>
				</li>
				<li className="">
					<Link
						to="/about"
						className="block w-fit py-3 hover:bg-bgGreen hover:text-white mx-auto px-4  rounded-md ">
						About
					</Link>
				</li>
				<li className="">
					<Link
						to="/Check_Eligibility"
						className="block w-fit py-3 hover:bg-bgGreen hover:text-white mx-auto px-4  rounded-md ">
						Check Eligibility
					</Link>
				</li>
				<li className="  flex justify-center flex-col  ">
					<div className=" mx-auto group pt-2 pb-3 flex justify-center items-center w-[233px] hover:bg-bgGreen hover:text-white rounded-md  ">
						<button
							className="focus:outline-none flex justify-center gap-3 ms-3"
							onClick={() => setDropdownOpen(!dropdownOpen)}>
							Services
							<span>
								<Icon
									icon="iconamoon:arrow-down-2-fill"
									width="1.2rem"
									height="1.2rem"
									className="mt-1 text-black group-hover:text-white transition-colors duration-300"
								/>
							</span>
						</button>
					</div>
				</li>
				<li className=" flex justify-center ">
					{/* Dropdown Button inside mobile menu */}

					{/* Dropdown Menu inside mobile menu */}
					<ul
						className={`bg-white  w-[233px] font-bold   text-start rounded-lg overflow-hidden transition-[max-height] duration-500 ease-in-out ${
							dropdownOpen ? "max-h-[500px]" : "max-h-0"
						}`}>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/teamloan" className="block">
								Team Loan
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/EquipmentFinancing" className="block">
								Equipment Financing
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/Sbaloans" className="block">
								SBA Loans
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/invoice_factoring_loan" className="block">
								Invoice Factoring
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/RevenueBased" className="block">
								Revenue Based Financing
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/Purchase_Order_Financing" className="block">
								Purchase Based Financing
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/merchant_cash_advance" className="block">
								Merchant Cash Advance Financing
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/businessloan" className="block">
								Business Loans
							</Link>
						</li>
						<li className="p-1 hover:bg-bgGreen hover:text-white">
							<Link to="/Line_of_credit" className="block">
								Line of Credit
							</Link>
						</li>
					</ul>
				</li>
				<li className="" style={{margin: "0px"}}>
					<Link
						to="/contact"
						className="block w-fit py-3 hover:bg-bgGreen hover:text-white mx-auto px-4  mt-0 rounded-md ">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}
