"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";

const inter = Roboto({ subsets: ["latin"], weight: "700" });

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
	const [cart, setCart] = useState({
		products: [],
		cartId: undefined,
		amount: 0,
	});
	return (
		<ClerkProvider>
			<CartContext.Provider value={{ cart, setCart }}>
				<html lang="en" className={window.localStorage.theme || "dark"}>
					<body
						className={`${inter.className} dark:bg-gray-900 dark:text-white`}
					>
						<div className="min-h-[calc(100vh-99px-80px)]">
							<Header />
							{children}
						</div>
						<Footer />
					</body>
				</html>
			</CartContext.Provider>
		</ClerkProvider>
	);
}
