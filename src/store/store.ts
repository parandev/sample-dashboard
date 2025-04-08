import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './slices/metricsSlice';
import watchdogReducer from './slices/watchdogSlice';

export const store = configureStore({
    reducer: {
        metrics: metricsReducer,
        watchdog: watchdogReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 