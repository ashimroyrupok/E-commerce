import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ---------- create a product into db
    createProduct: builder.mutation({
      query: (newProduct) => {
        return {
          url: `/products/create-product`,
          method: "POST",
          body: newProduct,
        };
      },
      invalidatesTags: ["products"],
    }),

    // --------- load all  products
    loadAllProducts: builder.query({
      query: ({ searchTerm, priceRange, sort, limit, page, ...others }) => {
        const params = new URLSearchParams();
        // Search term
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        // Price range
        if (priceRange) {
          params.append("minPrice", priceRange[0].toString());
          params.append("maxPrice", priceRange[1].toString());
        }
        // Sorting
        if (sort) {
          params.append("sort", sort);
        }
        // Pagination
        if (limit) {
          params.append("limit", limit.toString());
        }
        if (page) {
          params.append("page", page.toString());
        }

        // Handle dynamic properties in "others"
        Object.keys(others).forEach((key) => {
          if (others[key]) {
            params.append(key, others[key].toString());
          }
        });

        return { url: `/products?${params.toString()}` };
      },
      providesTags: ["products"],
    }),
    // --------- load single products
    loadSingleProducts: builder.query({
      query: ({ id }) => {
        console.log(id,"from redux api")
        return { url: `/products/${"6797b889b39fefeae8780b62"}`, method: "GET" };
      },
      providesTags: ["products"],
    }),

    // ---------- update single product
    updateProduct: builder.mutation({
      query: ({ product, productId }) => {
        return {
          url: `/products/${productId}`,
          method: "PATCH",
          body: product,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useLoadAllProductsQuery,
  useLoadSingleProductsQuery,
  useUpdateProductMutation,
} = productApi;
