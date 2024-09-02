import React, { useState } from 'react';
import CustomDropdown from '../CustomDropDown/CustomDropDown';
import MultiSelectDropdown from '../MultiSelectDropDown/MultiSelectDropDown';
import upload_area from '/upload_area.svg';

export const AddProducts = () => {
    const http://localhost:4000 = 'http://localhost:4000'

    const [productDetails, setProductDetails] = useState({
        name: "",
        new_price: "",
        old_price: "",
        category: "",
        sizes: [],  
        image: "" 
    });
    const [image, setImage] = useState(null); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            setImage(file); 
        }
    };

    const handleSizeChange = (selectedSizes) => {
        setProductDetails(prevFormData => ({
            ...prevFormData,
            sizes: selectedSizes 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault( )
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch(`${http://localhost:4000}/upload`, {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData,
        })
        .then((res) => res.json())
        .then((data) => responseData = data)

        if(responseData.success){
            product.image = responseData.image_url;
            await fetch(`${http://localhost:4000}/addproduct`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
            .then((res) => res.json())
            .then((data) => {
                data.success ? alert("Product added to the database") : alert("Failed to add the product in the database")
            })
        }
    };

    return (
        <div className='w-[100%] px-[50px] py-[30px] md:mx-[30px] my-[20px] rounded-[6px] bg-white'>
            <form className='flex flex-col gap-8'>
                <div className='w-[100%] text-[#7b7b7b]'>
                    <p className='mb-[10px] text-[#171717]'>Product title</p>
                    <input
                        name='name'
                        value={productDetails.name}
                        onChange={handleChange}
                        type="text"
                        placeholder='Type here...'
                        className='w-[100%] h-[50px] rounded-[4px] pl-[16px] text-[#7b7b7b] text-[14px] bg-transparent border border-[#c3c3c3] outline-none'
                    />
                </div>
                <div className='w-[100%] text-[#7b7b7b] flex gap-[40px]'>
                    <div className='w-[50%]'>
                        <p className='mb-[10px] text-[#171717]'>Price</p>
                        <input
                            name='new_price'
                            value={productDetails.new_price}
                            onChange={handleChange}
                            type='tel'
                            placeholder='Type here...'
                            className='w-[100%] h-[50px] rounded-[4px] pl-[16px] text-[#7b7b7b] text-[14px] bg-transparent border border-[#c3c3c3] outline-none'
                        />
                    </div>
                    <div className='w-[50%]'>
                        <p className='mb-[10px] text-[#171717]'>Offer price</p>
                        <input
                            name='old_price'
                            value={productDetails.old_price}
                            onChange={handleChange}
                            type='tel'
                            placeholder='Type here...'
                            className='w-[100%] h-[50px] rounded-[4px] pl-[16px] text-[#7b7b7b] text-[14px] bg-transparent border border-[#c3c3c3] outline-none'
                        />
                    </div>
                </div>
                <div className='w-[100%] text-[#7b7b7b]'>
                    <p className='mb-[10px] text-[#171717]'>Product category</p>
                    <CustomDropdown
                        name='category'
                        value={productDetails.category}
                        onChange={(value) => handleChange({ target: { name: 'category', value } })}
                        placeholder='Select'
                        options={[
                            { value: 'Men', label: 'Men' },
                            { value: 'Women', label: 'Women' },
                            { value: 'Kid', label: 'Kids' }
                        ]}
                        className='w-[100%] h-[50px] rounded-[4px] text-[#7b7b7b] text-[14px]'
                    />
                </div>
                {/* MultiSelectDropdown for sizes */}
                <div className='w-[100%] text-[#7b7b7b]'>
                    <p className='mb-[10px] text-[#171717]'>Sizes available</p>
                    <MultiSelectDropdown
                        options={[
                            { value: 'XS', label: 'XS' },
                            { value: 'S', label: 'S' },
                            { value: 'M', label: 'M' },
                            { value: 'L', label: 'L' },
                            { value: 'XL', label: 'XL' },
                            { value: 'XXL', label: 'XXL' }
                        ]}
                        value={productDetails.sizes}
                        onChange={handleSizeChange}
                        placeholder="Select Sizes"
                        className='w-[100%] h-[50px] rounded-[4px] text-[#7b7b7b] text-[14px]'
                    />
                </div>
                <div className='w-[100%] text-[#7b7b7b]'>
                    <label htmlFor='file-input'>
                        <img className='w-[120px] object-cover cursor-pointer' src={image ? URL.createObjectURL(image) : upload_area} alt='Upload area' />
                    </label>
                    <input
                        name='image'
                        type='file'
                        id='file-input'
                        className='hidden'
                        onChange={handleFileChange} // Handle file selection
                    />
                </div>
                <button onClick={handleSubmit} type='submit' className='w-[160px] h-[50px] rounded-[6px] bg-[#ff4141] hover:bg-red-600 duration-300 text-white font-semibold uppercase'>Add product</button>
            </form>
        </div>
    );
};
