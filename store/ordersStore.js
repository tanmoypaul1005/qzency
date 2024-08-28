
import { create } from "zustand";
import orders from "../data/orders.json"

export const useOrderStore = create((set) => ({

    ordersList: orders,
    setOrderList: (value) => set({ ordersList: value }),

    tampOrdersList: orders,
    setTampOrdersListList: (value) => set({ tampOrdersList: value }),

    filterForm:{
      category:null,
      minPrice:10,
      maxPrice:300000,
    },
    setFilterForm: (value) => set({ filterForm: value }),

}));
