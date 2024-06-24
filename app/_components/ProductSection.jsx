"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

function ProductSection() {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		ProductApis.getLatestProducts().then((res) => {
			setProductList(res?.data?.data);
		});
	}, []);
	return (
		<div className="px-10 md:px-20" id="productSection">
			<h2 className="my-4 text-xl">Our Latest Products</h2>
			<ProductList productList={productList} />
		</div>
	);
}

export default ProductSection;
