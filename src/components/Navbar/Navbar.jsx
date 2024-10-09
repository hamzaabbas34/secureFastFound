// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import { NavLink } from "react-router-dom";
// import MobileNav from "./MobileNav";

// export default function Navbar() {
// 	const [dropdownOpen, setDropdownOpen] = useState(false);
// 	const [menuOpen, setMenuOpen] = useState(false);
// 	const [hoverOpen, setHoverOpen] = useState(false);

// 	return (
// 		<nav className="fixed top-0 left-0 w-full bg-[#F8F9FA] z-50 text-white py-4">
// 			<div className=" mx-auto flex justify-between items-center container px-4 sm:px-6 md:px-2  lg:px-2 xl:px-2">
// 				{/* Left Side: Logo */}
// 				<div className="text-2xl font-poppins font-bold">
// 					<NavLink to="/" className="text-customGreen">
// 						<img src="./images/logo.png" alt="Logo" className="max-w-[190px]" />
// 					</NavLink>
// 				</div>

// 				{/* Right Side: Links for large screens */}
// 				<ul className="hidden lg:flex  gap-3 xl:gap-3 text-black my-auto justify-between  items-center">
// 					<li>
// 						<NavLink
// 							to="/"
// 							className={({ isActive }) =>
// 								isActive
// 									? "bg-bgGreen rounded-md text-white px-2 py-3 font-roboto  font-bold text-[19px]"
// 									: "hover:bg-bgGreen hover:rounded-md hover:text-white px-3 py-3 font-roboto text-[19px] font-bold"
// 							}>
// 							Home
// 						</NavLink>
// 					</li>

// 					<li
// 						className="relative"
// 						onMouseEnter={() => setHoverOpen(true)}
// 						onMouseLeave={() => setHoverOpen(false)}>
// 						{/* Dropdown Link */}
// 						<button className="flex gap-2 justify-center items-center focus:outline-none hover:rounded-md hover:bg-bgGreen px-3 py-3 group hover:text-white font-roboto text-[19px] font-bold">
// 							Loan Services
// 							<span>
// 								<Icon
// 									icon="iconamoon:arrow-down-2-fill"
// 									width="1.2rem"
// 									height="1.2rem"
// 									className="text-black group-hover:text-white"
// 								/>
// 							</span>
// 						</button>

// 						{/* Dropdown Menu */}
// 						<ul
// 							className={`absolute top-full mt-2 bg-white text-[19px] text-black rounded shadow-lg w-80 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
// 								hoverOpen ? "max-h-[500px]" : "max-h-0"
// 							}`}>
// 							{/* Dropdown items */}
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink to="/teamloan" className="block px-4 py-2">
// 									Team Loan
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink to="/EquipmentFinancing" className="block px-4 py-2">
// 									Equipment Financing
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink to="/Sbaloans" className="block px-4 py-2">
// 									SBL Loans
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink
// 									to="/invoice_factoring_loan"
// 									className="block px-4 py-2">
// 									Invoice Factoring
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink to="/RevenueBased" className="block px-4 py-2">
// 									Revenue-Driven Financing
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink
// 									to="/Purchase_Order_Financing"
// 									className="block px-4 py-2">
// 									Purchase Order Finacing
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink
// 									to="/merchant_cash_advance"
// 									className="block px-4 py-2">
// 									Merchant Cash Advance
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink to="/businessloan" className="block px-4 py-2">
// 									Business Loans
// 								</NavLink>
// 							</li>
// 							<li className="hover:bg-bgGreen hover:text-white font-semibold">
// 								<NavLink to="/Line_of_credit" className="block px-4 py-2">
// 									Line of Credit
// 								</NavLink>
// 							</li>
// 							{/* Other dropdown items */}
// 						</ul>
// 					</li>

// 					<li>
// 						<NavLink
// 							to="/Check_Eligibility"
// 							className={({ isActive }) =>
// 								isActive
// 									? "bg-bgGreen text-white rounded-md  px-3 py-3 font-roboto text-[19px] font-bold"
// 									: "hover:bg-bgGreen hover:rounded-md  hover:text-white px-3 py-3 font-roboto text-[19px] font-bold"
// 							}>
// 							Check Eligibility
// 						</NavLink>
// 					</li>

// 					<li>
// 						<NavLink
// 							to="/FAQ"
// 							className={({ isActive }) =>
// 								isActive
// 									? "bg-bgGreen  text-white rounded-md px-3 py-3 font-roboto text-[19px] font-bold"
// 									: "hover:bg-bgGreen hover:rounded-md hover:text-white px-3 py-3 font-roboto text-[19px] font-bold"
// 							}>
// 							FAQ
// 						</NavLink>
// 					</li>

// 					<li>
// 						<NavLink
// 							to="/contact"
// 							className={({ isActive }) =>
// 								isActive
// 									? "bg-bgGreen text-white rounded-md px-3 py-3 font-roboto text-[19px] font-bold"
// 									: "hover:bg-bgGreen hover:rounded-md  hover:text-white px-3 py-3 font-roboto text-[19px] font-bold"
// 							}>
// 							Contact us
// 						</NavLink>
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
// 			<MobileNav
// 				menuOpen={menuOpen}
// 				setDropdownOpen={setDropdownOpen}
// 				dropdownOpen={dropdownOpen}
// 			/>
// 		</nav>
// 	);
// }
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown menu
	const [menuOpen, setMenuOpen] = useState(false); // For mobile menu
	const [hoverOpen, setHoverOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-[#F8F9FA] z-50 text-white py-[21px]">
			<div className=" mx-auto flex justify-between items-center container px-3 ">
				{/* Left Side: Logo */}
				<div className="text-2xl font-poppins font-bold">
					<NavLink to="/" className="text-customGreen">
						<img src={logo} alt="Logo" className="max-w-[190px]" />
					</NavLink>
				</div>

				{/* Right Side: Links for large screens */}
				<ul className="hidden lg:flex  gap-3 xl:gap-2 text-black my-auto justify-center  items-center">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "bg-bgGreen text-white px-2 py-3 font-roboto  rounded-md font-bold text-[19px]"
									: "hover:bg-bgGreen hover:rounded-md rounded-none hover:text-white px-2 py-3 font-roboto text-[19px] font-bold"
							}>
							Home
						</NavLink>
					</li>

					<li
						className="relative"
						onMouseEnter={() => setHoverOpen(true)}
						onMouseLeave={() => setHoverOpen(false)}>
						{/* Dropdown Link */}

						<button className="flex gap-2 justify-center items-center rounded focus:outline-none hover:bg-bgGreen px-2 py-[9px] hover:rounded-md group hover:text-white font-roboto text-[19px] font-bold">
							Loan Services
							<span>
								<Icon
									icon="iconamoon:arrow-down-2-fill"
									width="1.2rem"
									height="1.2rem"
									className={
										({ isActive }) =>
											isActive
												? "text-white" // If active, set icon color to white
												: "text-black group-hover:text-white" // Default color is black, changes on hover
									}
								/>
							</span>
						</button>

						{/* Dropdown Menu */}
						<ul
							className={`absolute top-full mt-2 bg-white text-[19px] text-black rounded shadow-lg w-80 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
								hoverOpen ? "max-h-[500px]" : "max-h-0"
							}`}>
							{/* Dropdown items */}
							<li className="hover:bg-bgGreen  hover:text-white font-semibold">
								<NavLink to="/teamloan" className="block px-4 py-2">
									Team Loan
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink to="/EquipmentFinancing" className="block px-4 py-2">
									Equipment Financing
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink to="/Sbaloans" className="block px-4 py-2">
									SBL Loans
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink
									to="/invoice_factoring_loan"
									className="block px-4 py-2">
									Invoice Factoring
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink to="/RevenueBased" className="block px-4 py-2">
									Revenue-Driven Financing
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink
									to="/Purchase_Order_Financing"
									className="block px-4 py-2">
									Purchase Order Finacing
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink
									to="/merchant_cash_advance"
									className="block px-4 py-2">
									Merchant Cash Advance
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink to="/businessloan" className="block px-4 py-2">
									Business Loans
								</NavLink>
							</li>
							<li className="hover:bg-bgGreen hover:text-white font-semibold">
								<NavLink to="/Line_of_credit" className="block px-4 py-2">
									Line of Credit
								</NavLink>
							</li>
							{/* Other dropdown items */}
						</ul>
					</li>

					<li>
						<NavLink
							to="/Check_Eligibility"
							className={({ isActive }) =>
								isActive
									? "bg-bgGreen text-white px-2 py-3  rounded-md font-roboto text-[19px] font-bold"
									: "hover:bg-bgGreen hover:rounded-md rounded-none   hover:text-white px-2 py-3 font-roboto text-[19px] font-bold"
							}>
							Check Eligibility
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/FAQ"
							className={({ isActive }) =>
								isActive
									? "bg-bgGreen text-white px-2 py-3 rounded-md font-roboto text-[19px] font-bold"
									: "hover:bg-bgGreen hover:rounded-md rounded-none hover:text-white px-2 py-3 font-roboto text-[19px] font-bold"
							}>
							FAQ
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								isActive
									? "bg-bgGreen text-white px-2 py-3 rounded-md font-roboto text-[19px] font-bold"
									: "hover:bg-bgGreen hover:rounded-md rounded-none hover:text-white px-2 py-3 font-roboto text-[19px] font-bold"
							}>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive
									? "bg-bgGreen text-white px-2 py-3 rounded-md font-roboto text-[19px] font-bold"
									: "hover:bg-bgGreen hover:rounded-md rounded-none hover:text-white px-2 py-3 font-roboto text-[19px] font-bold"
							}>
							Contact us
						</NavLink>
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
			<MobileNav
				menuOpen={menuOpen}
				setDropdownOpen={setDropdownOpen}
				dropdownOpen={dropdownOpen}
			/>
		</nav>
	);
}
