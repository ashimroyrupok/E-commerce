import ProductDetails from "@/components/pages/product/ProductDetails";
import nexiosInstance from "@/config/nexios.config";
import { TProduct, TProductResponse } from "@/types";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data } = await nexiosInstance.get<TProductResponse>(
    `/products/${productId}`
  );
  // console.log(data, "data");
  const product: TProduct = data?.data;

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetailPage;
