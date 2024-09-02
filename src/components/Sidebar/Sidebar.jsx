import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import add_product from '/Product_Cart.svg';
import product_list from '/Product_list_icon.svg';

export const Sidebar = () => {
    const [btn, setBtn] = useState("");

    const handleClick = (e) => {
        setBtn(e.target.innerText); 
    }

    return (
        <div className='flex md:flex-col justify-center md:justify-normal gap-4 w-[100%] md:max-w-[250px] bg-[#FFFFFF] py-8 md:py-4 md:ml-[30px] my-[20px] rounded-[6px]'>
            <section>
                <Link to="/addproduct">
                    <div 
                        onClick={handleClick} 
                        className={`flex gap-2 sm:gap-5 justify-center items-center mx-[20px] py-[5px] px-[10px] rounded-[6px] text-[14px] sm:text-[16px] ${btn === "Add product" ? "bg-[#ff4141] text-[#f0f0f0]" : "bg-[#f6f6f6]"}  border border-[#f6f6f6] hover:border-[#d9d9d9] duration-300 cursor-pointer`}
                    >
                        <img className='w-[20px] sm:w-[30px]' src={add_product} alt='product cart' />
                        <p>Add product</p>
                    </div>
                </Link>
            </section>
            <section>
                <Link to="/listproduct">
                    <div 
                        onClick={handleClick} 
                        className={`flex gap-2 sm:gap-5 justify-center items-center mx-[20px] py-[5px] px-[10px] rounded-[6px] text-[14px] sm:text-[16px] ${btn === "Product list" ? "bg-[#ff4141] text-[#f0f0f0]" : "bg-[#f6f6f6]"} border border-[#f6f6f6] hover:border-[#d9d9d9] duration-300 cursor-pointer`}
                    >
                        <img className='w-[20px] sm:w-[30px]' src={product_list} alt='product list' />
                        <p>Product list</p>
                    </div>
                </Link>
            </section>
        </div>
    );
};
