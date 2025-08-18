import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../service/customerService";

export const fetchCustomers = createAsyncThunk("customers/fetchAll", async () => {
  const res = await api.getCustomers();
  return res.data;
});

export const addCustomer = createAsyncThunk("customers/add", async (customer) => {
  const res = await api.createCustomer(customer);
  return res.data;
});

export const updateCustomer = createAsyncThunk("customers/update", async ({ id, customer }) => {
  const res = await api.updateCustomer(id, customer);
  return res.data;
});

export const deleteCustomer = createAsyncThunk("customers/delete", async (id) => {
  await api.deleteCustomer(id);
  return id;
});

export const searchCustomer = createAsyncThunk("customers/search", async (name) => {
  const res = await api.searchCustomerByName(name);
  return res.data;
});

const customerSlice = createSlice({
  name: "customers",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => { state.data = action.payload; })

      .addCase(addCustomer.fulfilled, (state, action) => { state.data.push(action.payload); })
      
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.data.findIndex(c => c.id === action.payload.id);
        if (index >= 0) state.data[index] = action.payload;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.data = state.data.filter(c => c.id !== action.payload);
      })
      .addCase(searchCustomer.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  }
});
export default customerSlice.reducer;