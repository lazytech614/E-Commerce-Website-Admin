import React, { useState, useEffect } from 'react'
import cross_icon from '/cross_icon.png'

export const ListProducts = () => {
  const baseURL = 'http://localhost:4000'

  const [allproducts, setAllProducts] = useState([])

  const fetchAllProducts = async () => {
    await fetch(`${baseURL}/allproducts`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
  }

  const handleRemove = async (id) => {  
    await fetch(`${baseURL}/removeproduct`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
    await fetchAllProducts()
  }
  

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div className='w-[100%] px-[20px] py-[30px] md:mx-[30px] my-[20px] rounded-[6px] bg-white'>
      <p className='text-center text-[20px] sm:text-[30px] font-semibold capitalize text-[#171717] underline'>
        All products list
      </p>
      <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] py-[20px] text-[12px] sm:text-[14px] md:text-[16px] text-[#171717] font-semibold capitalize bg-white sticky top-0 z-10'>
        <p className='px-1 sm:px-0'>Products</p>
        <p className='px-1 sm:px-0'>Name</p>
        <p className='px-1 sm:px-0'>Old price</p>
        <p className='px-1 sm:px-0'>New price</p>
        <p className='px-1 sm:px-0'>Category</p>
        <p className='px-1 sm:px-0'>Sizes</p>
        <p className='px-1 sm:px-0'>Remove</p>
      </div>
      <div className='overflow-y-scroll h-[50vh] sm:h-[60vh]'>
        <div className='w-[100%] h-[2px] bg-[#D9D9D9]'></div>
        {allproducts.map((product) => (
          <div key={product.id}>
            <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] items-start font-medium text-[12px] sm:text-[14px] md:text-[16px] text-[#454545] my-4'>
              <img className='w-[40px] md:w-[60px]' src={product.image} alt='product image' />
              <p className='px-4 sm:px-0'>{product.name}</p>
              <p>Rs. {product.old_price}</p>
              <p>Rs. {product.new_price}</p>
              <p>{product.category}</p>
              <div className='flex flex-wrap gap-x-2'>
                {product.sizes.map((size, index) => (
                  <span key={index}>
                    {size}
                    {index < product.sizes.length - 1 && ', '}
                  </span>
                ))}
              </div>
              <button onClick={() => handleRemove(product.id)} className='w-fit px-2 sm:px-4 sm:py-1 rounded-[6px] bg-white border border-[#171717] text-[12px] sm:text-[16px] text-[#171717] hover:bg-[#ff4141] hover:text-white hover:border-[#ff4141] duration-300 cursor-pointer'>
                X
              </button>
            </div>
            <div className='w-[100%] h-[2px] bg-[#D9D9D9]'></div>
          </div>
        ))}
      </div>
    </div>
  )
}
