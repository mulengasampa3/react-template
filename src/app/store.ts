import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/auth/userSlice';
import templatesReducer from '../features/templates/templatesSlice';
import dataImportReducer from '../features/dataImport/dataImportSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        templates: templatesReducer,
        dataImport: dataImportReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
