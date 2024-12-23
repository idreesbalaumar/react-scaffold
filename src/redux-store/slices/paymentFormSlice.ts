// src/slices/paymentFormSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentFormState {
  payerName: string;
  payerPhone: string;
  payerEmail: string;
  viewState: 'paymentForm' | 'customerOverview' | 'paymentMethod' | 'customerForm';
  totalAmount: number; // Add totalAmount to the state
}

const initialState: PaymentFormState = {
  payerName: '',
  payerPhone: '',
  payerEmail: '',
  viewState: 'paymentForm',
  totalAmount: 0, // Initialize totalAmount
};

const paymentFormSlice = createSlice({
  name: 'paymentForm',
  initialState,
  reducers: {
    setPayerName: (state, action: PayloadAction<string>) => {
      state.payerName = action.payload;
    },
    setPayerPhone: (state, action: PayloadAction<string>) => {
      state.payerPhone = action.payload;
    },
    setPayerEmail: (state, action: PayloadAction<string>) => {
      state.payerEmail = action.payload;
    },
    setViewState: (state, action: PayloadAction<PaymentFormState['viewState']>) => {
      state.viewState = action.payload;
    },
    setTotalAmount: (state, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
    },
    resetPaymentForm: (state) => {
      state.payerName = '';
      state.payerPhone = '';
      state.payerEmail = '';
      state.totalAmount = 0;
      state.viewState = 'paymentForm';
    },
  },
});

export const { setPayerName, setPayerPhone, setPayerEmail, setViewState, setTotalAmount, resetPaymentForm } = paymentFormSlice.actions;
export default paymentFormSlice.reducer;