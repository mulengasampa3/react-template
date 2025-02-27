import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loanApi } from '../../api/loanApi';
import { LoanApplication, LoanApplicationData } from '../../types/LoanApplication';



// Initial state for the loan slice
interface LoanState {
  applications: LoanApplication[]; // Use LoanApplication type here, which includes id
  currentApplication?: LoanApplication | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoanState = {
  applications: [],
  currentApplication: null,
  loading: false,
  error: null,
};


// Async thunk to create a new loan application
export const createApplication = createAsyncThunk(
  'loan/createApplication',
  async (applicationData: LoanApplicationData, { rejectWithValue }) => {
    try {
      const response = await loanApi.createApplication(applicationData);
      return response; // Return the created application data
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to update the status of a loan application
export const updateApplicationStatus = createAsyncThunk(
  'loan/updateApplicationStatus',
  async ({ id, status }: { id: number; status: string }, { rejectWithValue }) => {
    try {
      const response = await loanApi.updateApplicationStatus(id, status);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch all loan applications
export const getApplications = createAsyncThunk(
  'loan/getApplications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await loanApi.getApplications();
      return response; // Return the list of applications
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch a single loan application by ID
export const getApplicationById = createAsyncThunk(
  'loan/getApplicationById',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await loanApi.getApplicationById(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to delete a loan application by ID
export const deleteApplication = createAsyncThunk(
  'loan/deleteApplication',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await loanApi.deleteApplication(id);
      return { id }; // Return the deleted application's id
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to update loan application information
export const updateApplicationInfo = createAsyncThunk(
  'loan/updateApplicationInfo',
  async ({ id, updatedApplication }: { id: number; updatedApplication: LoanApplicationData }, { rejectWithValue }) => {
    try {
      const response = await loanApi.updateApplicationInfo(id, updatedApplication);
      return response; // Return the updated application data
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);


const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle create application
      .addCase(createApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload);
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle update application status
      .addCase(updateApplicationStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedAppIndex = state.applications.findIndex(app => app.id === action.payload.id);
        if (updatedAppIndex !== -1) {
          state.applications[updatedAppIndex] = action.payload;
        }
      })
      .addCase(updateApplicationStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle get all applications
      .addCase(getApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(getApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle get single application by ID
      .addCase(getApplicationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getApplicationById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentApplication = action.payload;
      })
      .addCase(getApplicationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle delete application
      .addCase(deleteApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = state.applications.filter(app => app.id !== action.payload.id);
      })
      .addCase(deleteApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle update application information
      .addCase(updateApplicationInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateApplicationInfo.fulfilled, (state, action) => {
        state.loading = false;
        const updatedAppIndex = state.applications.findIndex(app => app.id === action.payload.id);
        if (updatedAppIndex !== -1) {
          state.applications[updatedAppIndex] = action.payload;
        }
      })
      .addCase(updateApplicationInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default loanSlice.reducer;
