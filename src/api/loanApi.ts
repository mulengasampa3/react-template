// src/api/loanApi.ts
import axios from 'axios';
import { LoanApplication, LoanApplicationData } from '../types/LoanApplication';
import axiosInstance from './axiosConfig';

const API_URL = 'http://localhost:8080/api/loans';

// Function to set the Authorization header for authenticated requests
export const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const loanApi = {
  // Create a new loan application
  createApplication: async (applicationData: LoanApplicationData) => {
    const token = localStorage.getItem('token'); // Retrieve token directly before request
    setAuthToken(token); 
    const response = await axiosInstance.post<LoanApplication>(`${API_URL}/application`, applicationData);
    return response.data;
  },

  // Update the status of an existing loan application
  updateApplicationStatus: async (id: number, status: string) => {
    const token = localStorage.getItem('token'); // Retrieve token directly before request
    setAuthToken(token); 
    const response = await axiosInstance.put<LoanApplication>(`${API_URL}/${id}/status`, { status });
    return response.data;
  },

  // Fetch all loan applications
  getApplications: async () => {
    const token = localStorage.getItem('token'); // Retrieve token directly before request
    setAuthToken(token); 
    const response = await axiosInstance.get<LoanApplication[]>(`${API_URL}`);
    return response.data;
  },

  // Fetch a single loan application by ID
  getApplicationById: async (id: number) => {
    const token = localStorage.getItem('token'); // Retrieve token directly before request
    setAuthToken(token); 
    const response = await axiosInstance.get<LoanApplication>(`${API_URL}/${id}`);
    return response.data;
  },

  // Delete a loan application by ID
  deleteApplication: async (id: number) => {
    const token = localStorage.getItem('token'); // Retrieve token directly before request
    setAuthToken(token); 
    const response = await axiosInstance.delete<{ id: number }>(`${API_URL}/${id}`);
    return response.data;
  },

  // Update loan application information
  updateApplicationInfo: async (id: number, updatedApplication: LoanApplicationData) => {
    const token = localStorage.getItem('token'); // Retrieve token directly before request
    setAuthToken(token); 
    const response = await axiosInstance.put<LoanApplication>(`${API_URL}/${id}`, updatedApplication);
    return response.data;
  },
};
