// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// export default function Navbar() {
// 	const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown menu
// 	const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

// 	return (
// 		<nav className="fixed top-0 left-0 w-full bg-[#F8F9FA] z-50 shadow-lg text-white px-8  md:px-20 lg:px-28 xl:px-40 2xl:px-48 py-4">
// 			<div className="container mx-auto flex justify-between items-center">
// 				{/* Left Side: Logo */}
// 				<div className="text-2xl font-poppins font-bold">
// 					<Link to="/" className="text-customGreen">
// 						<img src="./images/logo.png" alt="" className=" max-w-64" />
// 					</Link>
// 				</div>

// 				{/* Right Side: Links */}
// 				<ul className="hidden lg:flex xl:gap-1 text-black">
// 					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
// 						<Link to="/" className="">
// 							Home
// 						</Link>
// 					</li>

// 					<li className="relative">
// 						{/* Dropdown Link */}
// 						<button
// 							className="flex gap-2 justify-center items-center focus:outline-none hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold"
// 							onClick={() => setDropdownOpen(!dropdownOpen)}>
// 							Loan Services
// 							<span>
// 								<Icon
// 									icon="iconamoon:arrow-down-2-fill"
// 									width="1.2rem"
// 									height="1.2rem"
// 									style={{ color: "black" }}
// 								/>
// 							</span>
// 						</button>

// 						{/* Dropdown Menu with transition */}
// 						<ul
// 							className={`absolute top-full mt-2 bg-white text-black rounded shadow-lg w-72 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
// 								dropdownOpen ? "max-h-[500px]" : "max-h-0"
// 							}`}>
// 							<li className="hover:bg-gray-200 hover:text-white">
// 								<Link to="/teamloan" className="block px-4 py-2">
// 									Team Loan
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/EquipmentFinancing" className="block px-4 py-2">
// 									Equipment Financing
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/Sbaloans" className="block px-4 py-2">
// 									SBA Loans
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/invoice_factoring_loan" className="block px-4 py-2">
// 									Invoice Factoring
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/RevenueBased" className="block px-4 py-2">
// 									Revenue Based Financing
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link
// 									to="/Purchase_Order_Financing"
// 									className="block px-4 py-2">
// 									Purchase Order Financing
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/merchant_cash_advance" className="block px-4 py-2">
// 									Merchant Cash Advance
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/businessloan" className="block px-4 py-2">
// 									Business Loans
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/Line_of_credit" className="block px-4 py-2">
// 									Line of credit
// 								</Link>
// 							</li>
// 						</ul>
// 					</li>

// 					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
// 						<Link to="/Check_Eligibility" className="">
// 							Check Eligibility
// 						</Link>
// 					</li>
// 					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
// 						<Link to="/FAQ" className="">
// 							FAQ
// 						</Link>
// 					</li>
// 					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
// 						<Link to="/contact" className="">
// 							Contact us
// 						</Link>
// 					</li>
// 				</ul>

// 				{/* Mobile Menu Button */}
// 				<div className="lg:hidden">
// 					<button
// 						className="text-black focus:outline-none"
// 						onClick={() => setMenuOpen(!menuOpen)}>
// 						<svg
// 							className="w-6 h-6"
// 							fill="none"
// 							stroke="currentColor"
// 							viewBox="0 0 24 24"
// 							xmlns="http://www.w3.org/2000/svg">
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								strokeWidth="2"
// 								d="M4 6h16M4 12h16M4 18h16"></path>
// 						</svg>
// 					</button>
// 				</div>
// 			</div>

// 			{/* Mobile Menu */}
// 			{menuOpen && (
// 				<ul className="  lg:hidden mt-4 space-y-2  text-center rounded-lg text-black">
// 					<li className="py-5">
// 						<Link to="/" className="">
// 							Home
// 						</Link>
// 					</li>
// 					<li className="py-5 mt-0" style={{ margin: "0px" }}>
// 						<Link to="/about" className="block m-0">
// 							About
// 						</Link>
// 					</li>
// 					<li
// 						className="flex flex-col justify-center  pt-4 pb-5"
// 						style={{ margin: "0px" }}>
// 						<button
// 							className="block focus:outline-none"
// 							onClick={() => setDropdownOpen(!dropdownOpen)}>
// 							Services
// 						</button>
// 						{/* Mobile Dropdown */}
// 						<ul
// 							className={`bg-white  rounded-lg overflow-hidden transition-[max-height] duration-500 ease-in-out ${
// 								dropdownOpen ? "max-h-[500px]" : "max-h-0"
// 							}`}>
// 							<li className="  ">
// 								<Link to="/teamloan" className="block py-3">
// 									Team Loan
// 								</Link>
// 							</li>
// 							<li className=" ">
// 								<Link to="/EquipmentFinancing" className="block py-3">
// 									Equipment Financing
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/Sbaloans" className="block  py-3">
// 									SBA Loans
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/invoice_factoring_loan" className="block  py-3">
// 									Invoice Factoring
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/RevenueBased" className="block  py-3">
// 									Revenue Based Financing
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/Purchase_Order_Financing" className="block  py-3">
// 									Purchase Order Financing
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/merchant_cash_advance" className="block  py-3">
// 									Merchant Cash Advance
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/businessloan" className="block  py-3">
// 									Business Loans
// 								</Link>
// 							</li>
// 							<li className="hover:bg-gray-200">
// 								<Link to="/Line_of_credit" className="block  py-3">
// 									Line of credit
// 								</Link>
// 							</li>
// 						</ul>
// 					</li>
// 					<li className="pt-4 pb-">
// 						<Link to="/contact" className="block hover:text-customGreen">
// 							Contact
// 						</Link>
// 					</li>
// 				</ul>
// 			)}
// 		</nav>
// 	);
// }

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown menu
	const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

	return (
		<nav className="fixed top-0 left-0 w-full bg-[#F8F9FA] z-50 shadow-lg text-white px-8  md:px-20 lg:px-28 xl:px-40 2xl:px-48 py-4">
			<div className="container mx-auto flex justify-between items-center">
				{/* Left Side: Logo */}
				<div className="text-2xl font-poppins font-bold">
					<Link to="/" className="text-customGreen">
						<img src="./images/logo.png" alt="" className=" max-w-64" />
					</Link>
				</div>

				{/* Right Side: Links for large screens */}
				<ul className="hidden lg:flex xl:gap-1 text-black">
					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
						<Link to="/" className="">
							Home
						</Link>
					</li>

					<li className="relative">
						{/* Dropdown Link */}
						<button
							className="flex gap-2 justify-center items-center focus:outline-none hover:bg-bgGreen rounded-sm px-3 py-3 group hover:text-white font-roboto text-[17px] font-bold"
							onClick={() => setDropdownOpen(!dropdownOpen)}>
							Loan Services
							<span>
								<Icon
									icon="iconamoon:arrow-down-2-fill"
									width="1.2rem"
									height="1.2rem"
									className="text-black group-hover:text-white"
								/>
							</span>
						</button>

						{/* Dropdown Menu for large screens */}
						<ul
							className={`absolute top-full mt-2 bg-white text-black rounded shadow-lg w-72 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
								dropdownOpen ? "max-h-[500px]" : "max-h-0"
							}`}>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Team Loan
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Equipment Financing
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									SBA Loans
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Invoice Factoring
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Revenue Based Financing
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Purchase Based Financing
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Merchant Cash Advance Finacing
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Business Loans
								</Link>
							</li>
							<li className="hover:bg-gray-200">
								<Link to="/teamloan" className="block px-4 py-2">
									Line of Credit
								</Link>
							</li>
							{/* Add other links here */}
						</ul>
					</li>

					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
						<Link to="/Check_Eligibility" className="">
							Check Eligibility
						</Link>
					</li>
					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
						<Link to="/FAQ" className="">
							FAQ
						</Link>
					</li>
					<li className="hover:bg-bgGreen rounded-sm px-3 py-3 hover:text-white font-roboto text-[17px] font-bold">
						<Link to="/contact" className="">
							Contact us
						</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<div className="lg:hidden">
					<button
						className="text-black focus:outline-none"
						onClick={() => setMenuOpen(!menuOpen)}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
					menuOpen ? "max-h-[720px]" : "max-h-0"
				}`}>
				<ul className="lg:hidden mt-4 space-y-2 text-center rounded-lg text-black">
					<li className="py-5">
						<Link to="/" className="">
							Home
						</Link>
					</li>
					<li className="py-5">
						<Link to="/about" className="block">
							About
						</Link>
					</li>
					<li className="pt-4 pb-5 flex justify-center flex-col ">
						{/* Dropdown Button inside mobile menu */}
						<button
							className=" focus:outline-none flex justify-center gap-3 ms-3"
							onClick={() => setDropdownOpen(!dropdownOpen)}>
							Services
							<span>
								<Icon
									icon="iconamoon:arrow-down-2-fill"
									width="1.2rem"
									height="1.2rem"
									className="text-black mt-1 "
								/>
							</span>
						</button>

						{/* Dropdown Menu inside mobile menu */}
						<ul
							className={` bg-white rounded-lg overflow-hidden transition-[max-height] duration-500 ease-in-out ${
								dropdownOpen ? "max-h-[500px]" : "max-h-0"
							}`}>
							<li className="py-3 m-2">
								<Link to="/teamloan" className="block">
									Team Loan
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									Equipment Financing
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									SBA Loans
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									Invoice Factoring
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									Revenue Based Financing
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									Purchase Based Financing
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									Merchant Cash Advance Finacing
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									Business Loans
								</Link>
							</li>
							<li className="py-3">
								<Link to="/teamloan" className="block">
									Line of Credit
								</Link>
							</li>
							{/* Add other links here */}
						</ul>
					</li>
					<li className="pt-4 pb-5">
						<Link to="/contact" className="block hover:text-customGreen">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
