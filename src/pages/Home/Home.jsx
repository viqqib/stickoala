import React from "react";
import Homepage from "./HomePage";
import ProductPage from "./ProductPage";

const Home = () => {
    return (
        <div>
               <div className="" id="home-section">
                <Homepage />
               </div>
                <div className="" id="product-section">
                <ProductPage />
               </div>
        </div>
    )
}

export default Home