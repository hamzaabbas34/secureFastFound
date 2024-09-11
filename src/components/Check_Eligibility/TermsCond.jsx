import React from "react";
import { Icon } from "@iconify/react";

function TermsCond({handlebtn}) {
	return (
		<div className="overflow-y-scroll fixed inset-0  bg-black bg-opacity-50 z-50 flex justify-center ">
			<div className=" max-w-[800px] w-full px-4 bg-white absolute  top-16 pt-3 rounded-lg ">
				<nav className=" flex justify-between items-center border-b border-black py-2">
					<h2 className=" text[20px] md:text-2xl font-poppins ">
						Terms and Conditions
					</h2>

					<button onClick={handlebtn}>
						<Icon
							icon="system-uicons:cross"
							width="2rem"
							height="2rem"
							style={{ color: "black" }}
						/>
					</button>
				</nav>

				<div className=" ">
					<h3 className="my-4 font-poppins ">Effective: June 13, 2024</h3>
					<p className="font-poppins  my-3">
						Thank you for using our services! These terms of service
						(â€œTermsâ€) cover your use and access to our services, client
						software, and websites ("Services"). By using our Services, you
						agree to be bound by these Terms and our Privacy Policy. If you are
						using our Services for an organization, you are agreeing to these
						Terms on behalf of that organization.
					</p>
					<h1 className="font-poppins font-[600] ">
						Your Information and Your Permissions
					</h1>
					<p className="font-poppins  my-3">
						Thank you for using our services! These terms of service
						(â€œTermsâ€) cover your use and access to our services, client
						software, and websites ("Services"). By using our Services, you
						agree to be bound by these Terms and our Privacy Policy. If you are
						using our Services for an organization, you are agreeing to these
						Terms on behalf of that organization.
					</p>
					<p className="font-poppins  my-3">
						Thank you for using our services! These terms of service
						(â€œTermsâ€) cover your use and access to our services, client
						software, and websites ("Services"). By using our Services, you
						agree to be bound by these Terms and our Privacy Policy. If you are
						using our Services for an organization, you are agreeing to these
						Terms on behalf of that organization.
					</p>
					<h1 className="font-poppins font-[600] ">
						Your Information and Your Permissions
					</h1>
					<p className="font-poppins  my-3">
						Thank you for using our services! These terms of service
						(â€œTermsâ€) cover your use and access to our services, client
						software, and websites ("Services"). By using our Services, you
						agree to be bound by these Terms and our Privacy Policy. If you are
						using our Services for an organization, you are agreeing to these
						Terms on behalf of that organization.
					</p>
					<p className="font-poppins  my-3">
						Help us keep you informed and your information protected. Safeguard
						your password to the Services, and keep your account information
						current. Do not share your account credentials or give others access
						to your account.
					</p>
					<p className="font-poppins  my-3">
						You may use our Services only as permitted by applicable law,
						including export control laws and regulations.
					</p>
					<h1 className="font-poppins font-[600] ">Your Information</h1>
					<p className="font-poppins  my-3">
						The Services are protected by copyright, trademark, and other US and
						foreign laws. These Terms do not grant you any right, title, or
						interest in the Services, othersâ€™ content in the Services,
						Securefastfunding , and our trademarks, logos, and other brand
						features. We welcome feedback, but note that we may use comments or
						suggestions without any obligation to you.
					</p>
					<h1 className="font-poppins font-[600] ">Copyright</h1>
					<p className="font-poppins  my-3">
						We respect the intellectual property of others and ask that you do
						too. We respond to notices of alleged copyright infringement if they
						comply with the law, and such notices should be reported to
						office@Securefastfunding .com. We reserve the right to delete or
						disable content alleged to be infringing and terminate accounts of
						repeat infringers.
					</p>
					<h1 className="font-poppins font-[600] ">Termination</h1>
					<p className="font-p my-3">
						You are free to stop using our Services at any time. We reserve the
						right to suspend or terminate your access to the Services with
						notice to you if:
					</p>
					<p className="font-p my-3">(a) you are in breach of these Terms,</p>
					<p className="font-p my-3">
						(b) you are using the Services in a manner that would cause a real
						risk of harm or loss to us or other users, or
					</p>
					<p className="font-p my-3">
						We will provide you with reasonable advance notice via the email
						address associated with your account to remedy the activity that
						prompted us to contact you and give you the opportunity to export
						your information from our Services. If after such notice you fail to
						take the steps we ask of you, we will terminate or suspend your
						access to the Services.
					</p>
					<p className="font-p my-3">
						We will not provide notice before termination where:
					</p>
					<p className="font-p my-3">
						(a) you are in material breach of these Terms,
					</p>
					<p className="font-p my-3">
						(b) doing so would cause us legal liability or compromise our
						ability to provide the Services to our other users, or
					</p>
					<p className="font-p my-3">
						(c) we are prohibited from doing so by law.{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default TermsCond;
