
import { create } from "zustand";
import orders from "../data/orders.json"

export const useOrderStore = create((set) => ({

    searchQuery:"",
    setSearchQuery: (value) => set({ searchQuery: value }),

    selectDate:null,
    setSelectDate: (value) => set({ selectDate: value }),

    selectFilter:null,
    setSelectFilter: (value) => set({ selectFilter: value }),

    ordersList: orders,
    setOrderList: (value) => set({ ordersList: value }),

    selectedOrder: [],
    setSelectedOrder: (value) => set({ selectedOrder: value }),

    tampOrdersList: orders,
    setTampOrdersListList: (value) => set({ tampOrdersList: value }),

    filterForm:{
      category:null,
      minPrice:10,
      maxPrice:300000,
    },
    setFilterForm: (value) => set({ filterForm: value }),

}));
