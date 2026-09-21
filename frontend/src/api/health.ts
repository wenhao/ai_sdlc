import apiClient from './client'

export interface HealthInfo {
  status: string
  version: string
}

export function getHealth() {
  return apiClient.get<never, HealthInfo>('/health')
}
