"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Footer() {
	const pathName = usePathname();
	return (
		!["/sign-in", "/sign-up"].includes(pathName) && (
			<footer className="bg-gray-50 dark:bg-gray-900 shadow-[0_0_6px_0_inset] shadow-primary mt-20">
				<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<div className="flex justify-center sm:justify-start">
							<Image
								src="/logo.svg"
								width={40}
								height={40}
								alt="logo"
								style={{ width: "auto", height: "auto" }}
								priority
							/>
						</div>
						<p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
							Copyright &copy; 2042. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		)
	);
}

export default Footer;
