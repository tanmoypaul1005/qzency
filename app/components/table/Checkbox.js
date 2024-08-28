"use client"
import { useOrderStore } from '@/store/ordersStore'
import React from 'react'

const Checkbox = ({id=null}) => {

    const {selectedOrder,setSelectedOrder}=useOrderStore();

    return (
        <input
            type="checkbox"
            id="processing"
            className=""
            onChange={() => {
                if (selectedOrder?.includes(id)) {
                    setSelectedOrder(selectedOrder?.filter((order) => order !== id));
                    return;
                }
                setSelectedOrder([...selectedOrder, id]);
            }}
            checked={selectedOrder?.includes(id)}
          />
    )
}

export default Checkbox