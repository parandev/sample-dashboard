import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { metricsApi } from '../../services/api/metricsApi';
import {
    FilterParams,
    MetricData,
    MetricsFilterRequest,
    MetricsTrendRequest,
    MonthAverage,
    Signal,
    TrendData,
} from '../../types/api.types';
import { TrendDataPoint } from '../../types/metrics';

interface MetricsState {
    signals: Signal[];
    monthAverages: MonthAverage[];
    metricData: MetricData[];
    trendData: TrendDataPoint[];
    loading: boolean;
    error: string | null;
}

const initialState: MetricsState = {
    signals: [],
    monthAverages: [],
    metricData: [],
    trendData: [],
    loading: false,
    error: null,
};

// Async Thunks
export const fetchAllSignals = createAsyncThunk(
    'metrics/fetchAllSignals',
    async () => {
        return await metricsApi.getAllSignals();
    }
);

export const fetchMonthAverages = createAsyncThunk(
    'metrics/fetchMonthAverages',
    async ({ zoneGroup, month }: { zoneGroup: string; month: string }) => {
        return await metricsApi.getMonthAverages(zoneGroup, month);
    }
);

export const fetchMetricsFilter = createAsyncThunk(
    'metrics/fetchMetricsFilter',
    async ({ params, filterParams }: { params: MetricsFilterRequest; filterParams: FilterParams }) => {
        return await metricsApi.getMetricsFilter(params, filterParams);
    }
);

export const fetchMetricsTrendData = createAsyncThunk(
    'metrics/fetchTrend',
    async (request: MetricsTrendRequest): Promise<TrendDataPoint[]> => {
        const response = await metricsApi.getTrendData(request);
        // Transform TrendData to TrendDataPoint[]
        return response.data.map(item => ({
            timestamp: item.timestamp,
            value: item.value
        }));
    }
);

export const fetchSummaryTrends = createAsyncThunk(
    'metrics/fetchSummaryTrends',
    async () => {
        return await metricsApi.getSummaryTrends();
    }
);

const metricsSlice = createSlice({
    name: 'metrics',
    initialState,
    reducers: {
        clearMetrics: (state) => {
            state.metricData = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Signals
            .addCase(fetchAllSignals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllSignals.fulfilled, (state, action: PayloadAction<Signal[]>) => {
                state.loading = false;
                state.signals = action.payload;
            })
            .addCase(fetchAllSignals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch signals';
            })

            // Fetch Month Averages
            .addCase(fetchMonthAverages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMonthAverages.fulfilled, (state, action: PayloadAction<MonthAverage[]>) => {
                state.loading = false;
                state.monthAverages = action.payload;
            })
            .addCase(fetchMonthAverages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch month averages';
            })

            // Fetch Metrics Filter
            .addCase(fetchMetricsFilter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMetricsFilter.fulfilled, (state, action: PayloadAction<MetricData[]>) => {
                state.loading = false;
                state.metricData = action.payload;
            })
            .addCase(fetchMetricsFilter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch metrics data';
            })

            // Fetch Trend Data
            .addCase(fetchMetricsTrendData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMetricsTrendData.fulfilled, (state, action) => {
                state.loading = false;
                state.trendData = action.payload;
            })
            .addCase(fetchMetricsTrendData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch trend data';
            })

            // Fetch Summary Trends
            .addCase(fetchSummaryTrends.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSummaryTrends.fulfilled, (state, action: PayloadAction<TrendData>) => {
                state.loading = false;
                state.trendData = action.payload.data.map(item => ({
                    timestamp: item.timestamp,
                    value: item.value
                }));
            })
            .addCase(fetchSummaryTrends.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch summary trends';
            });
    },
});

export const { clearMetrics } = metricsSlice.actions;
export default metricsSlice.reducer; 