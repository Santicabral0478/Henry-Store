"use client"
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ProductCards } from "@/components/ProductCards";

export const Products = ()=>{
    return(
        <div className="">
            <NavBar/>
            <ProductCards/>
            <Footer/>
        </div>
    )
}

export default Products;