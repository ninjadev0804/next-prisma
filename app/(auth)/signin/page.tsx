import React from "react";
import ClientFormSignIn from "@/components/users/forms/signin";

const SignInPage = () => {
	return (
		<main className="flex flex-col w-full h-screen lg:flex-row">
			<div className="hidden w-full bg-blue-500 lg:w-2/4 lg:block"></div>
			<div className="flex items-center justify-center w-full h-full lg:w-2/4">
				<ClientFormSignIn />
			</div>
		</main>
	);
};

export default SignInPage;
