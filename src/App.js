import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ContactUs from "./components/Contact_us/ContactUs";
import FAQ from "./components/Faq/FAQ";
import CheckEligibility from "./components/Check_Eligibility/CheckEligibility";
import TeamLoan from "./components/Services/Teamloan/TeamLoan";
import BusinessLoans from "./components/Services/Business_Loans/BusinessLoans";
import Invoicefactoringloan from "./components/Services/Invoice_factoring_loan/Invoicefactoringloan";
import Lineofcredit from "./components/Services/Line_of_credit/Lineofcredit";
import MerchantCashAdvance from "./components/Services/merchant_cash_advance/MerchantCashAdvance";
import PurchaseOrderFinancing from "./components/Services/Purchase_Order_Financing/PurchaseOrderFinancing";
import Sbaloans from "./components/Services/sba_loans/Sbaloans";
import RevenueBased from "./components/Services/Revenue-Based/RevenueBased";
import EquipmentFinancing from "./components/Services/Equipment_financing/EquipmentFinancing";
import Privacy from "./components/Privacy/Privacy";
import LoanServies from "./components/LoanServices/LoanServies";
import Blogs from "./components/Blog/Blogs";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/FAQ" element={<FAQ />} />
				<Route path="/Check_Eligibility" element={<CheckEligibility />} />
				<Route path="/teamloan" element={<TeamLoan />} />
				<Route path="/businessloan" element={<BusinessLoans />} />
				<Route
					path="/invoice_factoring_loan"
					element={<Invoicefactoringloan />}
				/>
				<Route path="/Line_of_credit" element={<Lineofcredit />} />
				<Route
					path="/merchant_cash_advance"
					element={<MerchantCashAdvance />}
				/>
				<Route
					path="/Purchase_Order_Financing"
					element={<PurchaseOrderFinancing />}
				/>
				<Route
					path="/Invoicefactoringloan"
					element={<Invoicefactoringloan />}
				/>
				<Route path="/Sbaloans" element={<Sbaloans />} />
				<Route path="/RevenueBased" element={<RevenueBased />} />
				<Route path="/EquipmentFinancing" element={<EquipmentFinancing />} />
				<Route path="/privacy-policy" element={<Privacy />} />
				<Route path="/loan_Service" element={<LoanServies />} />
				<Route path="/blog" element={<Blogs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
