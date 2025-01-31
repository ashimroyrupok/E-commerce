import Ratings from "@/components/Rating/Rating";
import Container from "@/components/shared/Container";
import nexiosInstance from "@/config/nexios.config";
import { TProducts } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowCircleRight, FaArrowRight, FaEye } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";

const BestSelling = async() => {
//   const { data: apiResponse } = useGetProductsQuery("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {data}:any = await nexiosInstance.get('/products')
  console.log(data, "response");
  const products = data?.data;
//   console.log(products, "homepage");

//   const dispatch = useAppDispatch();
  // const { carts } = useAppSelector((state) => state.carts);
  // console.log(carts, "cartsss");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAddToCart = (product: TProducts) => {
    // dispatch(
    //   addCart({
    //     _id: product._id,
    //     name: product.name,
    //     image: product.image,
    //     price: product.price,
    //     stock: product.stock,
    //   })
    // );
  };

  return (
    <div className="lg:px-5 -mt-48 bg-[#F1F5F9] rounded-lg max-w-7xl mx-auto ">
      <Container>
        <div className="flex justify-between items center">
          <div className="flex flex-col gap-y-1 my-4">
            <h1 className="text-2xl font-semibold uppercase text-black my-">
              Best Selling Products
            </h1>

            <div className="h-[1px] w-[170px] bg-teal-300"></div>
          </div>

          <Link
            href={"/products"}
            className="text-[16px] cursor-pointer hover:text-teal-300 font-medium flex items-center gap-2 text-black underline "
          >
            See All Products <FaArrowRight />
          </Link>
        </div>

        <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {products.slice(0, 10).map((product: TProducts, idx: number) => (
            <div
              key={idx}
              className="card lg:h-[350px]   cursor-pointer group shadow-lg rounded-md border border-teal-300/3 border-slate-50/10 p-2 lg:px-3  lg:py-3"
            >
              <div className="relative overflow-hidden">
                <Image
                  height={210}
                  width={400}
                  className="mx-auto md:h-[170px] lg:h-[210px] md:w-full w-full  rounded-md transition-opacity hover:duration-700 ease-in-out"
                  src={product?.image}
                  alt="Product image"
                />

                {/* overlay */}
                <ul className="flex gap-3 h-[75px] lg:h-[120px] bg-slate-100 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -bottom-10 justify-center items-center  absolute w-full group-hover:bottom-0">
                  <li className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-black hover:rotate-[360deg] transition-all">
                    <AiFillHeart className="text-[20px] fill-black " />
                  </li>
                  <Link
                    href={`/all-products/${product._id}`}
                    className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-black hover:rotate-[360deg] transition-all"
                  >
                    <FaEye className="text-[18px] fill-black" />
                  </Link>
                  <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center shadow-md border rounded-full hover:bg-violet-500 hover:text-black hover:rotate-[360deg] transition-all">
                    <AiOutlineShoppingCart className="text-[20px] fill-black" />
                  </li>
                </ul>

                {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-700"></div> */}
              </div>

              <div className="">
                <Link href={`/all-products/${product._id}`}>
                  {" "}
                  <h3 className="font-medium text-black my-1 mt-1 hover:text-teal-500 duration-500">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="pb-1 flex items-center justify-between">
                    <div className="flex items-center text-black">
                      <TbCurrencyDollar className="text-[20px]" />
                      <p className="font-semibold   pb-2 transition-all duration-500 lg:mt-2">
                        {product.price}
                      </p>
                    </div>

                    <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                      {" "}
                      <FaArrowCircleRight className="text-[21px]" />{" "}
                    </button>
                  </div>
                  <div className="flex items-center text-black">
                    <Ratings ratings={3} /> (5)
                  </div>
                </div>

                <div
                  //   onClick={() => handleAddToCart(product)}
                  className="bg-[#e7e7e8] lg:flex hidden mx-auto justify-center text-center gap-2  border text-black py-[5px]  hover:border hover:duration-500 hover:border-teal-500 rounded-full px-2 lg:px-4 text-[13px] font-semibold"
                >
                  Add To Cart
                </div>
              </div>
            </div>
          ))}
        </section>

        {/*  */}
      </Container>
    </div>
  );
};

export default BestSelling;
