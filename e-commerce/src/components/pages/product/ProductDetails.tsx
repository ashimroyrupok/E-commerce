/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Ratings from "@/components/Rating/Rating";
import Container from "@/components/shared/Container";
import { addCart, TAddtoCart } from "@/redux/features/cart/addToCart.slice";
import { useLoadSingleProductsQuery } from "@/redux/features/products/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaAngleRight, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "sonner";
const ProductDetails = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params?.productId;
  //   console.log(params?.productId, id, "productid");

  const { data, error, isLoading } = useLoadSingleProductsQuery(id);

  //   console.log(data, error, isLoading);

  //   const data = useLoaderData() as TProductResponse;
  const [quantity, setQuantity] = useState(1);

  //   const dispatch = useAppDispatch();

  //   const { carts } = useAppSelector((state) => state.carts);
  //   console.log(carts);

  const handleAddToCart = (product: TAddtoCart) => {
    dispatch(
      addCart({
        _id: product._id,
        name: product.name,
        image: product.image,
        stock: product.stock,
        quantity: quantity,
        price: product.price,
      })
    );
  };

  const { category, description, stock, price, image, name } = product;

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Product limit exceeded");
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="mb-8 text-black">
      {product && (
        <Container>
          <div className="flex items-center mt-10  italic text-[18px]">
            products <FaAngleRight />
            {/* <span className="text-white font-medium">{name.firstName}</span> */}
          </div>

          <div className="flex mt-10 md:flex-row flex-col justify-center lg:p-5 lg:border border-slate-50/40 border-b pb-4 lg:rounded-lg gap-10">
            <div className="w-full flex-1">
              <Image
                height={384}
                width={300}
                src={image}
                alt="blackwidow-elite"
                className="rounded-lg max-w-md md:max-w-full w-full object-cover md:h-96 max-h-96"
              />
            </div>

            <div className="space-y-5 flex-1 ">
              <h1 className="text-3xl font-medium">{name} </h1>
              <h3 className="text-2xl font-medium">${price}</h3>
              <hr />
              <p>{description?.slice(0, 187)}..</p>
              <div className="flex gap-1">
                <Ratings ratings={4} />
              </div>
              <h3>Category : {category}</h3>
              <h6 className="bg-zinc-200 text-sm text-black inline-block px-2 py-1 rounded-lg">
                Availablity: {stock} in stock
              </h6>

              <div className="py-3 l:py-4 flex gap-3 items-center">
                <div className="flex  cursor-pointer bg-[#E0E8EF w-32 rounded-md">
                  <p
                    onClick={handleDecrement}
                    className="w-full text-black bg-slate-100/6 bg-[#E4E4E7] py-1 lg:py-2 text-2xl text-center border"
                  >
                    {" "}
                    -
                  </p>
                  <p className="border border-slate-50/50 w-full text-black text-center text-xl font-medium py-1 lg:py-2">
                    {quantity}
                  </p>
                  <p
                    onClick={handleIncrement}
                    className="text-center text-black bg-[#E4E4E7] py-1 lg:py-2 text-xl w-full border"
                  >
                    +
                  </p>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-[#3C956B] text-white flex cursor-pointer  gap-1 items-center py-2 lg:py-3  px-6 rounded-sm"
                >
                  Add to Cart <IoCartOutline className="text-[22px]" />
                </button>

                <div className="py-3 lg:py-4  px-3 lg:px-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-violet-500 text-white rounded-sm ">
                  <FaHeart />
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default ProductDetails;
