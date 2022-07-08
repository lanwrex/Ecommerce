import React from "react";
import ProductImage from "./ProductImage";
import CartLogo from "./CartLogo";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
function Product({count,setCount,setAddToCart}) {
  function handleCart() {
    setAddToCart(count)
    setCount((prevCount) => !prevCount)
  }
  // console.log(count);

  function increaseCounter(){
    setCount(prevCount=> prevCount+1)
  }
  function decreaseCounter(){
    setCount(prevCount=> prevCount-1)
  }
  return (
    <>
      <div className="block md:hidden ">
        <ProductImage />
      </div>
      <div className="mt-5 mb-5 items-center px-10 md:flex  md:flex-col md:justify-center md:gap-2 md:px-12 md:pt-20 lg:mb-0  lg:flex lg:flex-row lg:gap-20 lg:px-20 desktop:px-52 desktop:mt-40">
        <div className="hidden md:block md:max-w-[440px]">
          <ProductImage />
        </div>
        <div className="desktop:w-[600px]">
          <div className="flex flex-col gap-3 leading-relaxed">
            <p className="font-bold uppercase text-orange-500">
              Sneaker Company
            </p>
            <h2 className="text-2xl font-bold lg:mb-2 lg:text-5xl">
              Fall Limited Edition Sneakers
            </h2>
            <p className="text-gray-500 w-80">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole they'll withstand everything
              the weather can offer.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-5">
            <p className="text-2xl font-bold">$125.00</p>
            <p className="rounded-md bg-orange-100 px-3 font-bold text-orange-500">
              50%
            </p>
            <p className="ml-auto font-thin text-gray-500 line-through md:hidden">
              $250.00
            </p>
          </div>
          <p className="ml-auto mt-3 hidden font-thin text-gray-600 line-through md:block">
            $250.00
          </p>

          <div className="pb-10 md:flex">
            <div className="mt-5 mr-10 flex w-full items-center justify-center rounded-md bg-white p-4 md:mr-auto md:w-[40%]">
              <div
                className="mr-auto cursor-pointer"
                onClick={decreaseCounter}
              >
                <img src={Minus} alt="Minus Icon" />
              </div>
              <p className="mr-auto text-lg font-bold">{count}</p>
              <div className="cursor-pointer" onClick={increaseCounter}>
                <img src={Plus} alt="Plus Icon" />
              </div>
            </div>

            <div
              onClick={handleCart}
              className="mt-6 flex cursor-pointer justify-center gap-3 rounded-lg bg-orange-500 p-4 font-semibold shadow-lg  active:bg-orange-200 active:shadow-orange-300  md:w-[50%]"
            >
              <CartLogo  />
              <p className="text-white ">Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;