import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialOrders, type Order } from "../../constants/content";

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: initialOrders,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (
      state,
      action: PayloadAction<Omit<Order, "orderId" | "date">>,
    ) => {
      const newOrder: Order = {
        ...action.payload,
        orderId: `#CM${Math.floor(9000 + Math.random() * 1000)}`,
        date: new Date().toISOString(),
      };

      state.orders.unshift(newOrder);
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
