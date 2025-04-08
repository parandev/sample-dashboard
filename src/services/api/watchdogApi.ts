import { apiClient } from './apiClient';
import { WatchdogParams } from '../../types/api.types';

export interface WatchdogData {
    id: string;
    timestamp: string;
    alert: string;
    status: string;
    location: string;
    // Add other watchdog data properties
}

export const watchdogApi = {
    getWatchdogData: (params: WatchdogParams) => {
        return apiClient.post<WatchdogData[]>('/watchdog/data', params);
    },
}; 