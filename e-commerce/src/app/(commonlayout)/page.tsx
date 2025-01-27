import Banner from "@/components/pages/Homepage/Banner";
// import Image from "next/image";
// import bannerBottom from "@/assests/bannerBottom.gif";
// import Footer from "@/components/shared/Footer";
// import Categories from "@/components/pages/Homepage/Categories";
// import BestSelling from "@/components/pages/Homepage/BestSellingProduct";

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <Image
        height={200}
        width={700}
        className="object-cover    h-full w-full  "
        alt={`Banner image `}
        src={bannerBottom}
      />
      <Categories />
      <BestSelling />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
