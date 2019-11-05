import React, { usecontext, useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import { ProductContext, ProductProvider } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		clg("addItem");
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart }}>
					<Navigation cart={cart} />

					<Route exact path="/" component={Products} />

					<Route exact path="/cart" component={ShoppingCart} />
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
