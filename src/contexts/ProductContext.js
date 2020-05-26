import React, { createContext, useState } from "react";
import data from '../data';

function clg(...x) {
	for (let exes of x) console.log(exes);
}

export const ProductContext = createContext()

// export const ProductProvider = (props) => {
// 	const [products] = useState(data);

// 	const addItem = item => {
// 		// add the given item to the cart
// 		clg("addItem")
// 		setCart([...cart, item]);
// 	};

// 	return (
// 		<ProductContext value={[products, addItem]}>
// 			{props.children}
// 		</ProductContext>
// 	)
// }

