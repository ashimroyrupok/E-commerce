import Container from "@/components/shared/Container";
import nexiosInstance from "@/config/nexios.config";
import { TCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Categories =async () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const  {data} :any= await nexiosInstance.get('/categories')
  console.log(data)
  const categories= data.data

  return (
    <div className="text-black bg-slate-100 relative py-5 px-4 my-3">
      <Container>
        <div className="flex flex-col gap-y-1  my-4 ">
          <h1 className="text-2xl font-semibold ">
            EQUIPMENT MADE FOR YOUR LIFESTYLE
          </h1>
          <div className="h-[1px] w-[190px] bg-teal-300"></div>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-6 gap-6 cursor-pointer">
          {categories?.slice(0,12).map((category: TCategory, idx: number) => (
            <Link key={idx} href={`/product/${category.name}`}>
              <div
                key={idx}
                className="border group border-teal-200/40 bg-white rounded-md h-[200px] "
              >
                <Image
                  className="rounded-md w-full  group-hover:scale-95 transition-all duration-300 h-[120px] object-cover "
                  width={400}
                  height={120}
                  src={category.image}
                  alt="categories"
                />

                <p className="text-center mt-6 group-hover:text-teal-400 font-medium ">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
