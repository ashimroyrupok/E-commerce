/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import MobileSidebar from "@/components/product/MobileSidebar";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/shared/Container";
import { categories } from "@/constant";
import { useLoadAllProductsQuery } from "@/redux/features/products/productApi";
import { TCategory } from "@/types";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const AllProduct = () => {
  const [isOpen, setOpen] = useState(false);
  const [styles, setStyles] = useState("grid");
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("");
  console.log(sorting);
  const [search, setSearch] = useState("");
  console.log(search);

  const {
    data: products,
    isLoading,
    isError,
  } = useLoadAllProductsQuery({
    search,
    // priceRange,
    sorting,
    // limit,
    // page,
  });

  console.log(products);
  const handleOpen = () => {
    setOpen(true);
  };
  console.log(category);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    scroll(0, 0);
  }, []);

  //   const { data: apiResponse, isLoading } = useGetProductsQuery({
  //     category,
  //     sorting,
  //     search,
  //   });


  // console.log(isError,"error")

  // console.log(category);

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="w-10 h-10 animate-[spin_1s_linear_infinite]  mx-auto text-center rounded-full border-4 border-r-[#3B9DF8] border-[#3b9df84b]"></div>
        </div>
      );
    }

  //   const data = useLoaderData() as TProductResponse;

  return (
    <div className="px-">
      {/* <Header /> */}

      {/* shop banner */}

      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {/* desktop sidebar */}
          <div className="col-span-1 hidden lg:block border- border-teal-100 bg-[#1D2632] px-5 py-4">
            {/* categories */}
            <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
              <h1 className="text-xl text-gray-300 font-semibold ">
                Categories
              </h1>
              <h2 className="cursor-pointer text-gray-300 font-semibold">
                Clear
              </h2>
            </div>

            <div className="py-3 space-y-2 cursor-pointer pl-1">
              {categories?.map((cate: TCategory, idx: number) => (
                <div key={idx} className="flex  items-center gap-2">
                  <div>
                    <input
                      onChange={(e) => setCategory(e.target.value)}
                      className="h-3 w-3"
                      value={cate.name}
                      type="checkbox"
                      name="category"
                      id="category"
                    />
                  </div>

                  <h3
                    id="category"
                    className="text-white text-[17px] font-medium"
                  >
                    {cate.name}
                  </h3>
                </div>
              ))}
            </div>

            <button className="px-5 my-3 w-full text-black py-2 text-center rounded bg-white border-gray-400">
              Filter
            </button>
          </div>
          {/* desktop sidebar */}

          {/* mobile sidebar */}
          <MobileSidebar
            isOpen={isOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
          {/* mobile sidebar end */}

          {/* righ side  contents*/}

          <div className="col-span-3 relative">
            {/* product header */}
            <div className=" lg:h-[60px] w-full  mb-5 bg-[#1d2632]">
              <div className="flex  items-center px-4 py-3 justify-between">
                <h2 className="font-medium text-white text-[16px] md:text-xl lg:text-xl ">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search your product"
                    className="text-black"
                    type="text"
                  />
                </h2>
                <div className="flex gap-2 lg:gap-4 items-center">
                  <select
                    className="border outline-none py-1 text-center shadow-md bg-transparent text-white rounded-md"
                    name=""
                    onChange={(e) => setSorting(e.target.value)}
                  >
                    <option className="bg-transparent text-black" value="">
                      Sort By
                    </option>
                    <option className="bg-transparent text-black" value="price">
                      Low to High Price
                    </option>
                    <option
                      className="bg-transparent text-black"
                      value="-price"
                    >
                      High to Low Price
                    </option>
                    <option className="bg-transparent text-black" value="name">
                      Sort by Letter (A-Z)
                    </option>
                    <option className="bg-transparent text-black" value="-name">
                      Sort by Letter (Z-A)
                    </option>
                  </select>

                  <span
                    onClick={() => setStyles("grid")}
                    className={`p-2 ${
                      styles === "grid" && "bg-[#1d2632]"
                    } text-black hover:bg-slate-700 group cursor-pointer rounded-sm`}
                  >
                    <IoGrid className=" text-white text-[21px]" />
                  </span>

                  <span
                    onClick={() => setStyles("list")}
                    className={`p-2  ${
                      styles === "list" && "bg-[#1d2632]"
                    } text-black hover:bg-slate-700 cursor-pointer rounded-sm`}
                  >
                    <FaListUl className="text-[22px] text-white" />
                  </span>
                </div>
              </div>
            </div>

            {/* products card */}

            <div>
              {products?.length === 0 && (
                <div className="h-screen w-full flex justify-center items-center">
                  <div className="text-center">
                    <h1 className="text-white text-3xl">Oops!</h1>
                    <p className="text-2xl text-white">No products found.</p>
                  </div>
                </div>
              )}

              <div
                className={`grid  w-full ${
                  styles === "grid"
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
                    : "grid-cols-1 "
                } gap-3   `}
              >
                <ProductCard data={products} category={categories} />

                {/* {loading && (
                  <>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((j, i) => (
                      <div
                        key={i}
                        className="bg-white shadow-md border h-[240px] w-full p-3 rounded-md"
                      >
                        <div className="animate-pulse infinite delay-1000">
                          <div className="bg-gray-300 h-[120px] w-full rounded-lg"></div>
                          <div className="h-3 w-full bg-gray-300 my-3  rounded-lg"></div>
                          <div className="h-3 w-1/2 bg-gray-300 my-3  rounded-lg"></div>
                          <div className="flex mt-3 items-center gap-3 rounded-lg">
                            <div className="h-3 bg-gray-300 w-1/2  rounded-lg"></div>
                            <div className="h-3 bg-gray-300 w-1/2  rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )} */}
              </div>
            </div>

            {/* products end */}

            {/* pagination */}
            {/* 
            <div className="mt-5 mb-4">
              <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                totalItem={20}
                parPage={perPage}
                showItem={Math.floor(20 / 3)}
              />
            </div> */}

            {/* pagination end */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProduct;
