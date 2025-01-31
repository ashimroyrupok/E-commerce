import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// type
export type TProducts = {
  items: TProduct[];
  ediTProductData: TProduct | null;
  showServiceData: TProduct | null;
  compareList: TProduct[];
};

// initialState
const initialState: TProducts = {
  items: [],
  ediTProductData: null,
  showServiceData: null,
  compareList: [],
};

// Services slice
const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    // --------- set all services to store
    loadAllServices: (state, action) => {
      state.items = action.payload;
    },

    // ------------ delete a service
    deleteServiceFromStore: (state, action) => {
      state.items = state.items.filter(
        (service) => service._id !== action.payload
      );
    },

    // update service into store
    updateSingleService: (state, action) => {
      state.items = state?.items?.map((service) => {
        if (service._id === action?.payload?.serviceId) {
          return { ...service, ...action?.payload?.service };
        } else {
          return service;
        }
      });
    },

    // edit a service
    setEdiTProductData: (state, action) => {
      state.ediTProductData = action.payload;
    },
    // clear edit Service
    clearEdiTProductData: (state) => {
      state.ediTProductData = null;
    },

    // show a Service data
    setShowServiceData: (state, action) => {
      state.showServiceData = action.payload;
    },
    // clear show Service
    clearShowServiceData: (state) => {
      state.showServiceData = null;
    },
    // toggle compare lists
    toggleCompare: (state, action) => {
      const service = action.payload;
      // Check if the service is already in the compare list
      const isServiceInCompare = state.compareList.some(
        (item) => item._id === service._id
      );

      if (isServiceInCompare) {
        // If service is in the compare list, remove it
        state.compareList = state.compareList.filter(
          (item) => item._id !== service._id
        );
      } else if (state.compareList.length < 3) {
        state.compareList.push(service);
      }
    },
    // clear compare lists
    clearCompareList: (state) => {
      state.compareList = [];
    },
  },
});

export const {
  loadAllServices,
  deleteServiceFromStore,
  updateSingleService,
  setEdiTProductData,
  clearEdiTProductData,
  setShowServiceData,
  clearShowServiceData,
  toggleCompare,
  clearCompareList,
} = servicesSlice.actions;

export default servicesSlice.reducer;
