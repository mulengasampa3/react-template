import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { importData } from '../../api/dataImportApi';
import { TableName } from '../../types/dataImportTypes';

interface DataImportState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataImportState = {
  status: 'idle',
  error: null,
};

// Async thunk for data import
export const importDataAsync = createAsyncThunk(
  'dataImport/importData',
  async ({ tableName, file }: { tableName: TableName; file: File }) => {
    const response = await importData(tableName, file);
    return response;
  }
);

// Slice for data import
const dataImportSlice = createSlice({
  name: 'dataImport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(importDataAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(importDataAsync.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(importDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to import data';
      });
  },
});

export const selectImportStatus = (state: { dataImport: DataImportState }) => state.dataImport.status;
export const selectImportError = (state: { dataImport: DataImportState }) => state.dataImport.error;

export default dataImportSlice.reducer;
