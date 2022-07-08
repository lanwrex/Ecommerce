import React from 'react'
import Delete from '../images/icon-delete.svg'
import pic1 from '../images/image-product-1-thumbnail.jpg'
function Cart({addToCart}) {

  return (
    <>
      {addToCart <= 0 ? (
        <div className='fixed top-28 z-20 ml-32 w-72 h-48 rounded-md bg-white text-sm shadow-2xl mobile:top-32 md:top-[6.3rem] md:right-8 md:w-[54%] lg:w-[35%] desktop:w-[20%] desktop:h-48'>
          <h3 className='p-5 font-bold text-black'>Cart</h3>
          <hr />
          <div className='flex items-center justify-center py-10 mb-24 mobile:py-20'>
            <p className='font-bold text-gray-500'>
              Your cart is empty.
            </p>
          </div>
        </div>
      ) : (
        <div className='fixed top-30 z-30 ml-32 w-72 rounded-md bg-white text-sm shadow-2xl mobile:top-32 md:top-[6.3rem] md:right-8 md:w-[54%] lg:w-[35%] desktop:w-[25%]'>
          <h3 className='p-5 font-bold text-black'>Cart</h3>
          <hr />
          <div className='px-5 pb-5'>
            <div className='flex items-center justify-around gap-5 py-7 '>
              <img 
                alt=''
                className='w-14 rounded-lg'
                src={pic1}
              />
              <div className='flex flex-col gap-1'>
                <p className='font-semibold text-gray-500'>
                  Autumn Limited Edition...
                </p>
                <p className='font-bold text-gray-500'>
                  $125.00 x {addToCart }
                  <span className='font-bold text-black'>
                     ${(addToCart * 125.0).toFixed(2)}
                  </span>
                </p>
              </div>
              <img alt='Delete Icon' src={Delete}>
              
              </img>
            </div>
            <div className='flex cursor-pointer justify-center rounded-lg  p-4 font-semibold bg-orange-500 active:bg-orange-300'>
              <button className='font-bold text-white'>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
