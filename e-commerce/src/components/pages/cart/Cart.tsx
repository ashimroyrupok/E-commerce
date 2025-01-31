"use client";
import Container from "@/components/shared/Container";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/features/cart/addToCart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

const Cart = () => {
  const { carts } = useAppSelector((state) => state.carts);

  //get total price of cart items
  const subTotal = carts?.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (total: number, item: any) =>
      total + parseFloat(item.price) * parseFloat(item.quantity),
    0
  );

  const dispatch = useAppDispatch();

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleDelete = (id: string) => {
    console.log(id)
    dispatch(removeItem(id));
  };

  //scroll to to of page

  useEffect(() => {
    scroll(0, 0);
  }, []);

  //redirect to checkout page :

  const redirectCheckout = () => {
    // navigate("/checkout", {
    //   state: {
    //     products: carts,
    //     price: subTotal + 70,
    //     shipping_fee: 70,
    //     items: products.length,
    //   },
    // });
  };
  return (
    <div>
      <section className='bg-[url("https://i.ibb.co/HFyqg34/card.jpg")] h-[150px] md:h-[180px] lg:h-[220px] mt-1d bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shopp.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link href="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#24292e]">
        <Container>
          <div className="grid grid-cols-1 py-4 lg:grid-cols-4 gap- lg:gap-4">
            <div className="col-span-3 bgw w-full ">
              {carts?.length > 0 ? (
                <div>
                  <div className="bg-[#0C1117] py-3 px-4 mb-3">
                    <h2 className="text-md text-green-500 font-semibold">
                      Stock Products {carts?.length}
                    </h2>
                  </div>

                  {carts?.map((item, idx: number) => (
                    <div key={idx} className="w-full ">
                      <div className="flex flex-wrap  gap-2 border-b border-slate-300 py-1 mb-2 justify-between items-center">
                        <div className="flex gap-2 flex-wrap items-center">
                          <Image
                            height={70}
                            width={70}
                            className="w-[70px] h-[70px] rounded-md"
                            src={item?.image}
                            alt="product image"
                          />
                          <div className="pr-4 text-white">
                            <h2 className="text-xl">{item.name}</h2>
                            <span className="hidden lg:block text-sm">
                              {/* Brand: {item?.brand ? item?.brand : "No Brand"} */}
                            </span>
                            <span className="hidden lg:block text-sm">
                              only {item?.stock} items in stock
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="pl-4 sm:pl-0">
                            <h2 className="text-lg text-white">
                              ${item?.price}
                            </h2>
                          </div>
                        </div>

                        <div className="flex gap-2 text-black flex-col">
                          <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                            <div
                              onClick={() => handleDecrement(item?._id)}
                              className="px-3 cursor-pointer"
                            >
                              -
                            </div>

                            <div className="px-3">{item.quantity}</div>

                            <div
                              onClick={() => handleIncrement(item?._id)}
                              className="px-3 cursor-pointer"
                            >
                              +
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className="px-5 py-[3px] bg-[#F85606] text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex  items-center justify-center mb-10 lg:mb-0 mt-2 lg:mt-20">
                  <div>
                    <Image
                      height={300}
                      width={250}
                      className="w-[120px] lg:w-[250px] mx-auto animate-bounce delay-700"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
                      alt="cart"
                    />
                    <p className="text-[#e66b2e text-center text-white font-semibold text-[17px]">
                      Looks like your cart is empty 😔. Browse our products and
                      add something!
                    </p>
                    <p className="text-center text-white font-semibold">
                      To Continue Buy Product..
                    </p>
                    <div className="mx-auto text-center mt-4">
                      <Link
                        className="px-7 rounded-md bg-[#3C956B] py-2   text-white"
                        href="/products"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-1  bg-[#0C1117] rounded-md border shadow-md w-full px-6 py-3">
              <h2 className="font-bold text-white py-2 text-2xl">
                Cart Totals
              </h2>
              <div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-white font-normal text-[18px]">
                    Sub-Total
                  </p>
                  <p className="text-[16px] text-white font-semibold">
                    ${subTotal}
                  </p>
                </div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-white font-normal text-[18px]">Shipping</p>
                  <p className="text-[16px] text-white font-semibold">70</p>
                </div>
                <div className="flex  justify-between item-center border-b-2 border-slate-200 pt-1 pb-3">
                  <p className="text-white font-normal text-[18px]">Discount</p>
                  <p className="text-[16px] text-white font-semibold">
                    not available
                  </p>
                </div>
                <div className="flex py-1 justify-between item-center">
                  <p className="text-white font-semibold text-[18px]">Total</p>
                  <p className="text-[16px] text-white font-semibold">
                    ${subTotal + 70}
                  </p>
                </div>
                <button
                  onClick={redirectCheckout}
                  className="py-2 lg:py-3 w-full text-[15px] text-white font-semibold cursor-pointer uppercase bg-[#3C956B] mt-4 rounded-md "
                >
                  Proceed to Checkout{" "}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cart;
