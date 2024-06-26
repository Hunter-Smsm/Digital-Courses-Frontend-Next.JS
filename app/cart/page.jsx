"use client";
import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import getTotalPrice from "../_utils/totalAmount";
import Link from "next/link";

function CartPage() {
	const { cart, setCart } = useContext(CartContext);

	function handelDeleteItem(id) {
		const wantedItems = {
			data: {
				products: cart.products.filter((product) => product.id !== id),
			},
		};
		CartApis.updateCartItems(cart.cartId, wantedItems).then((res) => {
			setCart({
				products: res.data.data.attributes.products.data,
				cartId: res.data.data.id,
			});
		});
	}
	return (
		<section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<div className="mx-auto max-w-3xl">
					<header className="text-center">
						<h1 className="text-xl font-bold sm:text-3xl">
							Your Cart
						</h1>
					</header>
					<div className="mt-8">
						<ul className="space-y-4">
							{cart?.products.length === 0 ? (
								<h2 className="text-center text-gray-400">
									Empty Cart
								</h2>
							) : (
								cart.products.map((product) => {
									return (
										<li
											className="flex items-center gap-4"
											key={product.id}
										>
											<img
												src={
													product?.attributes?.banner
														?.data?.attributes?.url
												}
												alt=""
												className="size-16 rounded object-cover"
											/>
											<div>
												<h3 className="text-sm">
													{product?.attributes?.title}
												</h3>
												<dl className="mt-0.5 space-y-px text-[10px] text-gray-400">
													<div>
														<dt className="inline">
															Category:
														</dt>
														<dd className="inline">
															{` ${product?.attributes?.category}`}
														</dd>
													</div>
												</dl>
											</div>
											<div className="flex flex-1 items-center justify-end gap-2">
												{`$${product?.attributes?.price}`}
												<button
													className="text-gray-600 transition hover:text-red-600"
													onClick={() => {
														handelDeleteItem(
															product.id
														);
													}}
												>
													<span className="sr-only">
														Remove item
													</span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														className="h-4 w-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
														/>
													</svg>
												</button>
											</div>
										</li>
									);
								})
							)}
						</ul>
						<div className="mt-8 flex justify-end border-t border-gray-400 dark:border-gray-100 pt-8">
							<div className="w-full space-y-4">
								<dl className="space-y-0.5 text-sm">
									<div className="flex justify-between !text-base font-medium">
										<dt>Total</dt>
										<dd>${getTotalPrice()}</dd>
									</div>
								</dl>
								<div className="flex justify-end">
									{cart?.products.length !== 0 && (
										<Link
											href={`/checkout?amount=${getTotalPrice()}`}
											className="block rounded bg-primary px-5 py-3 text-sm text-white transition hover:bg-primaryHover"
										>
											Checkout
										</Link>
									)}
								</div>
								<h2 className="text-gray-500 text-[12px] text-center">
									Note: All Items Will Be Sent Via Email
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CartPage;
