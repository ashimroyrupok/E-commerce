/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MobileSidebar = ({ isOpen, handleOpen, handleClose }: any) => {
  return (
    <div className="block relative lg:hidden">
      <div
        onClick={handleOpen}
        className={`bg-[#F85606] cursor-pointer  -left-0 top-[180px] md:top-[213px] z-30 fixed inline hover:bg-black duration-500 px-1 rounded-r-md py-4 text-white ${
          isOpen ? "hidden" : ""
        }`}
      >
        <FaAngleRight size={22} />
      </div>
      <div
        onClick={handleClose}
        className={`bg-[#F85606] cursor-pointer  left-[75%] md:left-[360px] top-[180px] md:top-[213px] fixed inline px-1 hover:bg-black duration-500 rounded-r-md py-4 z-50 text-white ${
          isOpen ? "" : "hidden"
        }`}
      >
        <FaAngleLeft className="duration-500 ease-in" size={24} />
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } top-0  transition-all duration-500 left-0 z-[9999] w-[320px] md:w-[360px] fixed overflow-auto h-full border-r-2 shadow-2xl border-gray-100 p-4 bg-white`}
      >
        <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
          <h1 className="text-xl text-gray-600 font-semibold ">Categories</h1>
          <h2 className="text-gray-600 font-semibold">Clear</h2>
        </div>
        <div className="py-3 space-y-2 pl-1">
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Phones</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Tablet</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Laptops</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Shoes</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Watches</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Clothing</h3>
          </div>

          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Pants</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">T-Shirt</h3>
          </div>
        </div>

        <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
          <h1 className="text-xl text-gray-600 font-semibold ">Colors</h1>
          <h2 className="text-gray-600 font-semibold">Clear</h2>
        </div>

        <div className="py-3 space-y-2 pl-1">
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">White</h3>
          </div>

          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Red</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Blue</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Green</h3>
          </div>

          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Pink</h3>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <label className="container">
                <input type="checkbox" />
                <svg className="w-4 h-4" viewBox="0 0 64 64">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>

            <h3 className="text-gray-700 text-[17px]">Silver</h3>
          </div>
        </div>

        {/* mobile price */}
        <h1 className="text-xl mb-3 border-b-2 border-gray-200 py-1 text-[#4b5563] font-semibold">
          Price
        </h1>

        <button className="px-5 my-3 w-full text-white py-2 text-center rounded bg-[#ef4444] border-gray-400">
          Filter
        </button>
        {/* mobile price end */}
      </div>
    </div>
  );
};

export default MobileSidebar;
